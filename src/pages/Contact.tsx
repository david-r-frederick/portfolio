import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <div className="py-32 bg-background min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1000px] w-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <h1 className="text-5xl font-extrabold mb-8 tracking-tighter text-slate-900 dark:text-white md:text-7xl">
                Let's <span className="text-primary">Connect.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                I'm currently seeking new challenges in{' '}
                <span className="text-foreground font-semibold">Full-Stack Development</span>. Whether you
                have a project in mind or a role that fits my expertise, I'm just a message away.
              </p>

              <div className="grid gap-4">
                {[
                  {
                    icon: <Mail className="h-5 w-5" />,
                    label: 'Email',
                    value: 'dfrederick79@gmail.com',
                    href: 'mailto:dfrederick79@gmail.com',
                  },
                  {
                    icon: <Linkedin className="h-5 w-5" />,
                    label: 'LinkedIn',
                    value: 'david-frederick',
                    href: 'https://linkedin.com/in/david-frederick-413b30ab',
                  },
                  {
                    icon: <Phone className="h-5 w-5" />,
                    label: 'Phone',
                    value: '409.543.7859',
                    href: 'tel:409.543.7859',
                  },
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    label: 'Location',
                    value: 'Beaumont, Texas',
                    href: '#',
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 group p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl"
                  >
                    <div
                      className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                        {item.label}
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl rounded-[3rem] -z-10" />
              <div className="glass dark:glass-dark p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full -mr-20 -mt-20" />
                
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-900 dark:text-slate-200 ml-1 uppercase tracking-wider">Your Name</label>
                      <Input placeholder="John Doe" className="h-14 bg-background/50 rounded-2xl border-slate-200 dark:border-slate-700 focus:ring-primary transition-all" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-900 dark:text-slate-200 ml-1 uppercase tracking-wider">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="h-14 bg-background/50 rounded-2xl border-slate-200 dark:border-slate-700 focus:ring-primary transition-all" required />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900 dark:text-slate-200 ml-1 uppercase tracking-wider">Subject</label>
                    <Input placeholder="How can I help you today?" className="h-14 bg-background/50 rounded-2xl border-slate-200 dark:border-slate-700 focus:ring-primary transition-all" required />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900 dark:text-slate-200 ml-1 uppercase tracking-wider">Message</label>
                    <Textarea placeholder="Tell me about your vision, goals, or role..." className="min-h-[200px] bg-background/50 rounded-2xl border-slate-200 dark:border-slate-700 focus:ring-primary transition-all resize-none p-5" required />
                  </div>
                  <Button type="submit" className="w-full h-16 text-xl font-bold gap-3 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all">
                    Send Inquiry <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
