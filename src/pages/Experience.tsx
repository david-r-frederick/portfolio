import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { TimelineItem } from '@/components/TimelineItem';

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
      <div
        className="absolute top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none"
      />
      <div
        className="absolute bottom-40 left-0 h-96 w-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A roadmap of my technical evolution and career milestones across enterprise software and
              technical leadership.
            </p>
          </motion.div>

          <div
            className="relative space-y-16 before:absolute before:left-[17px] md:before:left-1/2 before:top-2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-primary/50 before:to-primary/20 before:z-0"
          >
            {experiences.map((exp, i) => (
              <TimelineItem
                key={i}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                description={exp.description}
                index={i}
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 text-white shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"
            />
            <h2 className="relative z-10 text-3xl font-extrabold mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              Academic Foundation
            </h2>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">LAMAR UNIVERSITY</h3>
                <p className="text-slate-400 text-lg">Bachelor of Arts in Psychology</p>
                <div className="mt-4 flex items-center gap-4">
                  <span
                    className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold border border-white/10"
                  >
                    Class of 2016
                  </span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm leading-relaxed italic">
                "Studying psychology gave me a strong foundation in how people think, communicate, and make
                decisions. I apply that knowledge as I build intuitive, user-friendly software."
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
