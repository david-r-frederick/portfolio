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
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-900">Professional Experience</h1>
          <p className="text-lg text-slate-600 mb-16">A timeline of my career as a technical specialist and software developer.</p>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-200"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white" />
                
                <div className="mb-1 flex flex-wrap items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                <div className="flex items-center gap-2 text-slate-600 font-semibold mb-4">
                  <Briefcase className="h-4 w-4" />
                  {exp.company}
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-slate-600 leading-relaxed flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">LAMAR UNIVERSITY</h3>
              <p className="text-slate-600">Bachelor of Arts in Psychology</p>
              <p className="text-sm font-medium text-slate-500 mt-2">Class of 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
