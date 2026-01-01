param(
  [Parameter(Mandatory = $false)]
  [string]$SourceJsonPath = "source.json"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $SourceJsonPath)) {
  throw "Cannot find $SourceJsonPath"
}

$raw = Get-Content -LiteralPath $SourceJsonPath -Raw
$data = $raw | ConvertFrom-Json

$root = Get-Location

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Ensure-ParentDir([string]$filePath) {
  $parent = Split-Path -Parent $filePath
  if ([string]::IsNullOrWhiteSpace($parent)) { return }
  if (-not (Test-Path -LiteralPath $parent)) {
    New-Item -ItemType Directory -Path $parent -Force | Out-Null
  }
}

$createdFiles = 0
$createdDirs = 0
$skipped = 0
$warnings = New-Object System.Collections.Generic.List[string]

foreach ($prop in $data.PSObject.Properties) {
  $entry = $prop.Value

  if ($null -eq $entry) { continue }

  $path = $entry.path
  if ([string]::IsNullOrWhiteSpace($path)) {
    $warnings.Add("Skipping '$($prop.Name)' (missing entry.path)")
    $skipped++
    continue
  }

  # Normalize to workspace-relative filesystem path.
  $targetPath = Join-Path -Path $root -ChildPath $path

  if ($entry.type -eq "folder") {
    if (-not (Test-Path -LiteralPath $targetPath)) {
      New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
      $createdDirs++
    }
    continue
  }

  if ($entry.type -ne "file") {
    $warnings.Add("Skipping '$path' (unknown type '$($entry.type)')")
    $skipped++
    continue
  }

  Ensure-ParentDir -filePath $targetPath

  if ($entry.binary -eq $true) {
    # No binary payload is provided in this JSON; create an empty placeholder file.
    if (-not (Test-Path -LiteralPath $targetPath)) {
      [System.IO.File]::WriteAllText($targetPath, "", $utf8NoBom)
      $createdFiles++
    }
    $warnings.Add("Created empty placeholder for binary file: $path")
    continue
  }

  # Some entries omit "content" (e.g., assets); still create the file.
  $content = $null
  if ($entry.PSObject.Properties.Name -contains "content") {
    $content = $entry.content
  }
  if ($null -eq $content) {
    $content = ""
    $warnings.Add("No content found for: $path (created empty file)")
  }

  [System.IO.File]::WriteAllText($targetPath, [string]$content, $utf8NoBom)
  $createdFiles++
}

Write-Host "Done."
Write-Host "Directories created: $createdDirs"
Write-Host "Files created/updated: $createdFiles"
Write-Host "Entries skipped: $skipped"
if ($warnings.Count -gt 0) {
  Write-Host ""
  Write-Host "Warnings:"
  $warnings | ForEach-Object { Write-Host " - $_" }
}


