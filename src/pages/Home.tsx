import React from 'react';
import { ArrowRight, Code, Database, Globe, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-50 pt-16">
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                Full-Stack Software Developer
              </span>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
                Building Scalable <span className="text-primary">eCommerce</span> Solutions for the Modern Web.
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">
                Technical Specialist with 8 years of experience in front-end design, back-end development, and IT support. I specialize in React, TypeScript, and C# to build enterprise-grade applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/experience">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold">
                    My Experience
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 clip-path-slant hidden lg:block" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '8+' },
              { label: 'Projects Delivered', value: '20+' },
              { label: 'Enterprise Clients', value: '15+' },
              { label: 'Core Technologies', value: '10+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Expertise</h2>
            <p className="text-slate-600">Specialized in modern tech stacks to deliver high-performance, accessible, and responsive applications.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Globe className="h-8 w-8 text-primary" />, 
                title: 'Front-End Development', 
                desc: 'Expert in React, TypeScript, and AngularJS. Spearheaded front-end migrations for core eCommerce platforms.' 
              },
              { 
                icon: <Database className="h-8 w-8 text-primary" />, 
                title: 'Back-End & APIs', 
                desc: 'Skilled in C#, SQL, and RESTful API integration. Building robust workflows and data-driven systems.' 
              },
              { 
                icon: <Layers className="h-8 w-8 text-primary" />, 
                title: 'eCommerce Specialist', 
                desc: 'Deep experience with enterprise eCommerce platforms, HIPAA compliant sites, and third-party integrations.' 
              }
            ].map((skill, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-6">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
