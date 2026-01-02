import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const experiences = [
  {
    company: 'CLARITY VENTURES, INC',
    role: 'Full-Stack Software Developer',
    period: 'February 2021 to Present',
    description: [
      'Built complex features out of small, reusable components for eCommerce websites.',
      'Developed 20+ different eCommerce projects, including HIPAA compliant sites, using React and AngularJS.',
      'Spearheaded re-architecture/migration of front-end of core platform from AngularJS to React.',
      'Designed and created in-depth on-boarding certification program for new and mid-level developers.',
      'Lead weekly trainings and paired programming sessions.'
    ]
  },
  {
    company: 'LAMAR UNIVERSITY',
    role: 'Technical Support Specialist',
    period: 'September 2018 to April 2020',
    description: [
      'Oversaw daily technical and administrative operations of the Office of International Education and Services.',
      'Employed Cascade CMS to design and develop 4 new department websites.',
      'Designed 40+ web pages for international services.'
    ]
  },
  {
    company: 'LAMAR UNIVERSITY',
    role: 'IT Support Specialist',
    period: 'September 2012 to May 2016',
    description: [
      'Provided hardware and software infrastructure support, troubleshooting, maintenance, and installation services.',
      'Managed a network of over 36 computers, printers, and scanners spanning hundreds of offices.'
    ]
  }
];

export const Experience = () => {
  return (
    <div className="py-32 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 h-96 w-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white md:text-6xl">Professional Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A roadmap of my technical evolution and career milestones across enterprise software and technical leadership.</p>
          </motion.div>

          <div className="relative space-y-16 before:absolute before:left-[17px] md:before:left-1/2 before:top-2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-primary/50 before:to-primary/20 before:z-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-start z-10",
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-[9px] md:left-1/2 md:-ml-[8px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background ring-4 ring-primary/20 shadow-lg shadow-primary/30" />
                
                <div className="flex-1 w-full">
                  <div className={cn(
                    "group relative overflow-hidden rounded-[2rem] border bg-white/50 dark:bg-slate-900/50 p-8 backdrop-blur-xl transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:translate-y-[-4px]",
                    i % 2 === 0 ? "md:text-left" : "md:text-left"
                  )}>
                    <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                    
                    <div className="mb-4 flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{exp.role}</h3>

                    <ul className="space-y-4">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-slate-600 dark:text-slate-400 leading-relaxed flex gap-3 text-base">
                          <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 text-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
            <h2 className="relative z-10 text-3xl font-extrabold mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              Academic Foundation
            </h2>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">LAMAR UNIVERSITY</h3>
                <p className="text-slate-400 text-lg">Bachelor of Arts in Psychology</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold border border-white/10">Class of 2016</span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm leading-relaxed italic">
                "The intersection of psychology and technology defines my approach to software: understanding the human element to build better digital experiences."
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
