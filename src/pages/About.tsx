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
    <div className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 clip-path-slant pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 shadow-inner shadow-primary/10">
              <User className="h-7 w-7" />
            </div>
            <h1 className="text-5xl font-extrabold mb-8 tracking-tight text-slate-900 dark:text-white md:text-6xl">About Me</h1>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                I am a Technical Specialist based in <span className="text-primary font-bold">Beaumont, Texas</span>, with a combined 8 years of high-impact engineering experience spanning front-end design, back-end development, and technical operations.
              </p>
              <p>
                My professional philosophy is rooted in the creation of <span className="text-foreground font-semibold">robust, scalable, and inclusive</span> digital systems. I specialize in bridging the gap between sophisticated UI requirements and complex architectural needs.
              </p>
              <p>
                I am not just a developer; I am a technical leader who thrives in collaborative environments, simplifying complex concepts and mentoring the next generation of engineers.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Award className="h-8 w-8 text-primary mb-4" />, title: 'Technical Mentor', desc: 'Expertise in onboarding and training mid-level developers through structured programs.' },
                { icon: <Code2 className="h-8 w-8 text-primary mb-4" />, title: 'Lead Architect', desc: 'Spearheading complex architectural migrations for enterprise core platforms.' }
              ].map((card, i) => (
                <div key={i} className="group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:translate-y-[-4px]">
                  <div className="transition-transform group-hover:scale-110">{card.icon}</div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-1 rounded-[3rem] bg-gradient-to-br from-primary via-accent to-primary/20 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl group-hover:bg-slate-900/20 transition-colors" />
            <div className="relative bg-slate-900 dark:bg-slate-950 p-10 lg:p-14 rounded-[2.8rem] text-white">
              <h2 className="text-3xl font-extrabold mb-12 tracking-tight">Technical Matrix</h2>
              <div className="space-y-12">
                {Object.entries(skills).map(([category, items], i) => (
                  <div key={i}>
                    <h3 className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <span className="h-px w-8 bg-primary/40" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {items.map((skill, j) => (
                        <motion.div 
                          key={j}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-white/10 hover:border-white/20"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};