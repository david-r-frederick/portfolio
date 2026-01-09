import { motion } from 'framer-motion';
import { ShoppingCart, Globe, Code, Tractor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProjectCard, type Project } from './ProjectCard';
// @ts-ignore it's there
import CSSPressMeImage from "../assets/img/CSSPressMeBig.png";
// @ts-ignore it's there
import BugTrackerImage from "../assets/img/BugTrackerBig.png";

const clientProjects: Project[] = [
  {
    title: 'Riedell Skates',
    category: 'eCommerce Development',
    desc: 'Worked with the team to develop and maintain the eCommerce platform for Riedell Skates, featuring product catalogs for competitive, casual, and developmental ice skates, dealer locator functionality, and comprehensive skate fitting resources.',
    icon: <ShoppingCart className="h-6 w-6" />,
    imageSrc: "https://ice.riedellskates.com/portals/2/images/ice/homepage/HomePage_CollageTopRight_ShopDevelopmental.jpg?ver=880YPjaqCrlfD-IrObPZ1A%3d%3d",
    tags: ['React', 'TypeScript', 'Complex Products', 'eCommerce'],
    link: 'https://ice.riedellskates.com/'
  },
  {
    title: 'Body Shop Jobs',
    category: 'Job Board Platform',
    desc: 'Developed and maintained the Body Shop Jobs platform, a specialized job board connecting automotive body shop professionals with employment opportunities, featuring job listings, employer advertising, and comprehensive job description resources.',
    // imageSrc: "https://bodyshopjobs.com/images/ecommerce/Body-Shop-Jobs-logo.png",
    icon: <Code className="h-6 w-6" />,
    tags: ['React', 'TypeScript', 'C#', 'Complex Schema', 'Job Board'],
    link: 'https://bodyshopjobs.com/'
  },
  {
    title: 'Thunderstuck Agriculture',
    category: 'Agricultural Website',
    desc: 'Developed the product detail page and header for the Thunderstruck Agricultural website, a specialized website featuring comprehensive farm equipment resources.',
    icon: <Tractor className="h-6 w-6" />,
    tags: ['React', 'TypeScript', 'Agricultural', 'WordPress'],
    link: 'https://thunderstruckag.com/'
  },
  {
    title: 'GL Veneeer',
    category: 'Agricultural Website',
    desc: 'Assisted with the development of the GL Veneeer website, showcasing wood veneer sheets, custom plywood, and live edge slabs with an emphasis on species inventory and sustainability.',
    icon: <Tractor className="h-6 w-6" />,
    tags: ['React', 'TypeScript', 'Dot Net Nuke'],
    link: 'https://glveneer.com/'
  },
];

const employerProjects: Project[] = [
  {
    title: 'Lamar University Web Fleet',
    category: 'Web Design & CMS',
    desc: 'Designed and developed 4 new department websites and 40+ web pages for Lamar University\'s Office of International Education.',
    icon: <Globe className="h-6 w-6" />,
    tags: ['Cascade CMS', 'CSS', 'HTML', 'JavaScript'],
    link: 'https://www.lamar.edu/international-education/index.html'
  }
];

const funProjects: Project[] = [
  {
    title: 'CSS PressMe',
    image: <img src={CSSPressMeImage} alt="CSS Press Me" />,
    category: 'Front End Development',
    desc: 'Architected and constructed a complete rebuild of the front-end for a core enterprise eCommerce platform, migrating from AngularJS to React.',
    icon: <ShoppingCart className="h-6 w-6" />,
    tags: ['React', 'CSS'],
    codeLink: "https://github.com/david-r-frederick/css-press-me",
    link: "https://csspressme.web.app/"
  },
  {
    title: 'Bug Tracker',
    image: <img src={BugTrackerImage} alt="Bug Tracker" />,
    category: 'Front End Development',
    desc: 'Architected and constructed a complete rebuild of the front-end for a core enterprise eCommerce platform, migrating from AngularJS to React.',
    icon: <ShoppingCart className="h-6 w-6" />,
    tags: ['React', 'BootStrap', 'Firebase'],
    codeLink: "https://github.com/david-r-frederick/bug-tracker",
    link: "https://bug-tracker-6ea40.web.app/login"
  }
];

export const Projects = () => {
  return (
    <div className="py-32 bg-background min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">Portfolio</span>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white md:text-7xl">Selected Works</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">A showcase of enterprise eCommerce platforms, high-compliance systems, and digital ecosystems built for performance and scale.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">For Clients</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientProjects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">For My Employers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employerProjects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">For Fun</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funProjects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden rounded-[3rem] bg-primary p-12 md:p-20 text-center text-white shadow-2xl shadow-primary/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
          <h2 className="relative z-10 text-4xl font-extrabold mb-6 tracking-tight">Need a custom enterprise solution?</h2>
          <p className="relative z-10 text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            I've contributed to dozens of high-traffic eCommerce platforms. Let's discuss your next project's architectural needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="relative z-10 h-16 px-10 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
