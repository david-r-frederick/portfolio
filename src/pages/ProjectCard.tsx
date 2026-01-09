import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Project {
  title: string;
  category: string;
  desc: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  image?: React.ReactNode;
  codeLink?: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border bg-card p-2 transition-all hover:shadow-2xl hover:translate-y-[-8px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800">
        {project.imageSrc || project.image ? (
          <>
            {project.imageSrc && <img
              src={project.imageSrc}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />}
            {project.image && <div className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
              {React.cloneElement(project.image as React.ReactElement, { className: 'h-full w-full object-cover' })}
            </div>}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity group-hover:opacity-60" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity group-hover:opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <div className="p-8 rounded-full bg-white/20 backdrop-blur-xl text-white shadow-2xl">
                {React.cloneElement(project.icon as React.ReactElement, { className: 'h-12 w-12' })}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col flex-1 p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.category}</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <div className="mb-8 max-h-[4.5rem] overflow-y-scroll [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent] hover:[scrollbar-color:rgb(203_213_225)_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto mb-8">
          {project.tags.map((tag, j) => (
            <span
              key={j}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-lg uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.link && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 rounded-xl h-11 border-primary/20 hover:border-primary gap-2 transition-all"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" /> View
              </a>
            </Button>
          )}
          {project.codeLink && <Button
            variant="secondary"
            size="sm"
            asChild
            className="flex-1 rounded-xl h-11 gap-2 bg-slate-500 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-700 transition-all"
          >
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> Code
            </a>
          </Button>}
        </div>
      </div>
    </motion.div>
  );
};

