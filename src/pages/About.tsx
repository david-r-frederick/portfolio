import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, User, Code2 } from 'lucide-react';

const skills = {
  'Languages': ['JavaScript', 'TypeScript', 'C#', 'SQL', 'HTML', 'CSS', 'Java (Novice)'],
  'Frameworks': ['React', 'React Native', 'AngularJS', 'RemixJS', 'Redux', 'Bootstrap'],
  'Tools': ['Git', 'Firebase', 'Webpack', 'IIS', 'Azure DevOps', 'Azure'],
  'CMS & Platforms': ['DNN', 'Kentico', 'Cascade CMS', 'Selenium IDE'],
};

export const About = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
              <User className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-extrabold mb-6 text-slate-900">About Me</h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a Technical Specialist based in Beaumont, Texas, with a combined 8 years of front-end web design, back-end development, and IT support experience.
              </p>
              <p>
                My professional journey has been defined by a passion for creating reusable components, implementing accessibility features, and building full-stack features from UI to database. I pride myself on my ability to collaborate effectively with teammates and clients to find creative solutions to complex problems.
              </p>
              <p>
                Beyond coding, I have experience in education and technical support, which has honed my communication skills and my ability to simplify complex technical concepts for diverse audiences.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-slate-900 mb-1">Mentor</h3>
                <p className="text-sm text-slate-500">Onboarded and trained mid-level developers.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Code2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-slate-900 mb-1">Architect</h3>
                <p className="text-sm text-slate-500">Lead front-end migrations for enterprise core platforms.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900 p-10 rounded-3xl text-white shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-8">Technical Skillset</h2>
            <div className="space-y-10">
              {Object.entries(skills).map(([category, items], i) => (
                <div key={i}>
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, j) => (
                      <div key={j} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
