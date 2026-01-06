import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    desc: 'Designed and developed 4 new department websites and 40+ web pages for Lamar University’s Office of International Education.',
    icon: <Globe className="h-6 w-6" />,
    tags: ['Cascade CMS', 'CSS', 'HTML', 'JavaScript'],
    link: '#'
  }
];

export const Projects = () => {
  return (
    <div className="py-32 bg-background min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">Portfolio</span>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white md:text-7xl">Selected Works</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">A showcase of enterprise eCommerce platforms, high-compliance systems, and digital ecosystems built for performance and scale.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border bg-card p-2 transition-all hover:shadow-2xl hover:translate-y-[-8px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity group-hover:opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <div className="p-8 rounded-full bg-white/20 backdrop-blur-xl text-white shadow-2xl">
                    {React.cloneElement(project.icon as React.ReactElement, { className: "h-12 w-12" })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-xl h-11 border-primary/20 hover:border-primary gap-2 transition-all">
                    <ExternalLink className="h-4 w-4" /> Preview
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1 rounded-xl h-11 gap-2 bg-slate-500 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-700 transition-all">
                    <Github className="h-4 w-4" /> Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden rounded-[3rem] bg-primary p-12 md:p-20 text-center text-white shadow-2xl shadow-primary/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
          <h2 className="relative z-10 text-4xl font-extrabold mb-6 tracking-tight">Need a custom enterprise solution?</h2>
          <p className="relative z-10 text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            I've contributed to dozens of high-traffic eCommerce platforms. Let's discuss your next project's architectural needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="relative z-10 h-16 px-10 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
