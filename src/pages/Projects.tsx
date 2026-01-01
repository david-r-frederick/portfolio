import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Core eCommerce Rebuild',
    category: 'Full-Stack Development',
    desc: 'Architected and constructed a complete rebuild of the front-end for a core enterprise eCommerce platform, migrating from AngularJS to React.',
    icon: <ShoppingCart className="h-6 w-6" />,
    tags: ['React', 'TypeScript', 'Redux', 'C#'],
    link: '#'
  },
  {
    title: 'HIPAA Compliant Platforms',
    category: 'Specialized Web Apps',
    desc: 'Developed multiple HIPAA-compliant eCommerce projects ensuring strict data security and privacy standards were met.',
    icon: <ShieldCheck className="h-6 w-6" />,
    tags: ['React', 'Security', 'RESTful APIs', 'SQL'],
    link: '#'
  },
  {
    title: 'Lamar University Web Fleet',
    category: 'Web Design & CMS',
    desc: 'Designed and developed 4 new department websites and 40+ web pages for Lamar Universityâ€™s Office of International Education.',
    icon: <Globe className="h-6 w-6" />,
    tags: ['Cascade CMS', 'CSS', 'HTML', 'JavaScript'],
    link: '#'
  }
];

export const Projects = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-900">Selected Projects</h1>
          <p className="text-lg text-slate-600">A showcase of eCommerce platforms, enterprise systems, and educational web services I have built.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-2 bg-primary" />
              <div className="p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {project.icon}
                </div>
                <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Github className="h-4 w-4" /> Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary rounded-3xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to see more?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            I've contributed to dozens of enterprise eCommerce websites and internal tools. Let's discuss how I can help your team.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};
