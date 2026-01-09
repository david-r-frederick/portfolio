import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, User, Code2 } from 'lucide-react';

const skills = {
  'Languages': ['JavaScript/TypeScript', 'C#', 'SQL', 'HTML', 'CSS', 'Java (Novice)'],
  'Frontend': ['React', 'React Native', 'AngularJS', 'RemixJS', 'Redux', 'Bootstrap', 'Tailwind'],
  'Backend': ['.NET / ASP.NET Core', 'Entity Framework Core', 'REST API Design', 'Authentication & Authorization'],
  'Databases': ['SQL Server', 'PostGreSQL (Novice)', 'JSON data modeling', 'Schema & relational design'],
  'DevOps & Infrastructure': ['Git', 'Azure DevOps (Repos & Pipelines)', 'IIS', 'Azure', 'Webpack / Vite / Gulp'],
  'Engineering Practices': ['Application Architecture', 'Plugin / Modular Systems', 'Legacy System Modernization', 'Debugging & Root Cause Analysis'],
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
                I’m a full-stack developer in Beaumont, Texas with 8+ years of experience working across client-side, server-side, and the systems that support them. Most of my work has been on real, enterprise eCommerce applications—modernizing legacy code, building new features both independently and collaboratively, and keeping things running when the edge cases inevitably show up.
              </p>
              <p>
                I enjoy working at the intersection of UX and architecture. I’m comfortable moving between the browser, the API, and the database, and I tend to focus on building solutions that are practical, explicit, and built to last rather than overly clever. I’m a firm believer that the only way to move fast is to build things well.
              </p>
              <p>
                I care a lot about clarity—both in code and in communication. I enjoy helping teams untangle complex problems, making technical decisions easier to reason about, and supporting other developers as they grow. At the end of the day, I value collaboration, continuous improvement, and shipping software that holds up over time.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Award className="h-8 w-8 text-primary mb-4" />, title: 'Technical Mentor', desc: 'Expertise in onboarding and training developers through structured programs.' },
                { icon: <Code2 className="h-8 w-8 text-primary mb-4" />, title: 'Full-Stack eCommerce Engineer', desc: 'Delivering seamless, secure, and scalable shopping experiences from UI to database.' }
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