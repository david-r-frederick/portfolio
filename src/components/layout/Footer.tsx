import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-sans text-lg font-bold text-primary">David Frederick</h3>
            <p className="text-sm text-muted-foreground">Full-Stack Software Developer</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/david-r-frederick" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/david-frederick-413b30ab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:dfrederick79@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Â© {new Date().getFullYear()} David Frederick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
