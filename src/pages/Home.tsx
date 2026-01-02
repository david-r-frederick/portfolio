import React from 'react';
import { ArrowRight, Code, Database, Globe, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1760224254103-3dcc15e4ad9d?q=80&w=2000" 
            alt="Background" 
            className="h-full w-full object-cover opacity-10 dark:opacity-20 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-sm transition-transform hover:scale-105"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Available for new opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-6 text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white md:text-8xl lg:leading-[1.1]">
                Crafting Digital <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">Experiences</span> That Scale.
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl max-w-2xl mx-auto">
                Technical Specialist with 8 years of experience building enterprise-grade applications. Specializing in <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">TypeScript</span>, and <span className="text-primary font-semibold">C#</span>.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/projects">
                  <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all hover:translate-y-[-4px] hover:shadow-2xl active:scale-95">
                    View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/experience">
                  <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl bg-background/50 backdrop-blur-sm transition-all hover:bg-background hover:translate-y-[-4px] active:scale-95">
                    My Journey
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Glass Bento Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Years Experience', value: '8+', icon: <Layers className="h-5 w-5" /> },
              { label: 'Projects Delivered', value: '20+', icon: <Globe className="h-5 w-5" /> },
              { label: 'Enterprise Clients', value: '15+', icon: <Code className="h-5 w-5" /> },
              { label: 'Core Technologies', value: '10+', icon: <Database className="h-5 w-5" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border bg-white/50 dark:bg-slate-900/50 p-8 backdrop-blur-xl transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:translate-y-[-4px]"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - Bento Grid Style */}
      <section className="py-32 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight sm:text-5xl">Technical Arsenal</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Leveraging cutting-edge technologies to solve complex business problems with elegance and efficiency.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border shadow-sm group hover:shadow-xl transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8 transition-transform group-hover:scale-110">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced Front-End Systems</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Expertise in building highly interactive and accessible user interfaces using React, TypeScript, and modern state management. Proven track record in leading large-scale architectural migrations for eCommerce leaders.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'AngularJS', 'Tailwind CSS'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 p-10 bg-primary text-white rounded-[2.5rem] shadow-xl group hover:scale-[1.02] transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white mb-8 transition-transform group-hover:rotate-12">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Robust Back-End</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">Designing and implementing scalable RESTful APIs and database architectures with C# and SQL. Focused on security, performance, and data integrity.</p>
              <div className="flex flex-wrap gap-2">
                {['C#', '.NET', 'SQL Server', 'PostgreSQL', 'Redis'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/90">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border shadow-sm group hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-8 transition-transform group-hover:scale-110">
                    <Layers className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Enterprise eCommerce Solutions</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">Specializing in high-compliance, mission-critical eCommerce platforms. Deep experience with HIPAA compliance, third-party logistics, and complex payment gateway integrations.</p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-dashed">
                    <div className="font-bold text-primary mb-1">HIPAA</div>
                    <div className="text-xs text-muted-foreground">Compliant architectures</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-dashed">
                    <div className="font-bold text-primary mb-1">Logistics</div>
                    <div className="text-xs text-muted-foreground">3PL & API Integrations</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-dashed">
                    <div className="font-bold text-primary mb-1">Scale</div>
                    <div className="text-xs text-muted-foreground">Load balanced systems</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-dashed">
                    <div className="font-bold text-primary mb-1">Search</div>
                    <div className="text-xs text-muted-foreground">Elasticsearch & Algolia</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-slate-900 dark:bg-slate-800 px-8 py-20 text-center text-white shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
          <h2 className="relative z-10 mb-8 text-4xl font-extrabold tracking-tight sm:text-6xl">Ready to build something <span className="text-accent">extraordinary</span>?</h2>
          <p className="relative z-10 mb-10 text-xl text-slate-400 max-w-2xl mx-auto">Let's collaborate to bring your vision to life with performance-driven code and world-class design.</p>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl shadow-xl hover:shadow-primary/40 active:scale-95">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
