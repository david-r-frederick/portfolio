import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  role,
  period,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col md:flex-row gap-8 items-start z-10",
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Timeline Node */}
      <div
        className="absolute left-[9px] md:left-1/2 md:-ml-[8px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background ring-4 ring-primary/20 shadow-lg shadow-primary/30"
      />
      
      <div className="flex-1 w-full">
        <div className={cn(
          "group relative overflow-hidden rounded-[2rem] border bg-white/50 dark:bg-slate-900/50 p-8 backdrop-blur-xl transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:translate-y-[-4px]",
          index % 2 === 0 ? "md:text-left" : "md:text-left"
        )}>
          <div
            className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"
          />
          
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <div
              className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider"
            >
              <Calendar className="h-3.5 w-3.5" />
              {period}
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              {company}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
            {role}
          </h3>

          <ul className="space-y-4">
            {description.map((item, j) => (
              <li
                key={j}
                className="text-slate-600 dark:text-slate-400 leading-relaxed flex gap-3 text-base"
              >
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
  );
};
