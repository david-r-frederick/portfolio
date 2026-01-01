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
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold mb-6 text-slate-900">Let's Connect</h1>
              <p className="text-lg text-slate-600 mb-12">
                I'm currently seeking a Full-Stack Developer role. If you have a project or a role that fits my profile, I'd love to hear from you.
              </p>

              <div className="space-y-8">
                {[
                  { icon: <Mail className="h-6 w-6" />, label: 'Email', value: 'dfrederick79@gmail.com', href: 'mailto:dfrederick79@gmail.com' },
                  { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', value: 'linkedin.com/in/david-frederick', href: 'https://linkedin.com/in/david-frederick-413b30ab' },
                  { icon: <Phone className="h-6 w-6" />, label: 'Phone', value: '409.543.7859', href: 'tel:409.543.7859' },
                  { icon: <MapPin className="h-6 w-6" />, label: 'Location', value: 'Beaumont, Texas', href: '#' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</div>
                      <div className="text-lg font-bold text-slate-900">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Name</label>
                    <Input placeholder="John Doe" className="h-12 bg-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Email</label>
                    <Input type="email" placeholder="john@example.com" className="h-12 bg-white" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Subject</label>
                  <Input placeholder="How can I help?" className="h-12 bg-white" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-white resize-none" required />
                </div>
                <Button type="submit" className="w-full h-14 text-lg font-bold gap-2">
                  Send Message <Send className="h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
