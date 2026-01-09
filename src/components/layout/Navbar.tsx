import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 px-4 pt-4",
        scrolled ? "pb-2" : "pb-0"
      )}
    >
      <nav className={cn(
        'container mx-auto flex h-16 items-center justify-between rounded-2xl border transition-all duration-500',
        scrolled
          ? 'glass px-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
          : 'bg-transparent border-transparent px-4',
      )}
    >
        <Link
          to="/"
          className="group flex items-center gap-2 font-sans text-xl font-bold text-primary"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg transition-transform group-hover:scale-110 active:scale-95"
          >
            <Code2 className="h-6 w-6" />
          </div>
          <span className="tracking-tight text-foreground">David Frederick</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary',
                location.pathname === item.path ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 z-[-1] rounded-full bg-primary/5"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l">
            <Link to="/contact">
              <Button
                size="sm"
                className="rounded-full px-6 font-semibold shadow-md transition-all hover:shadow-lg active:scale-95"
              >
                Hire Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 md:hidden active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-20 left-4 right-4 rounded-2xl border bg-background/95 backdrop-blur-xl p-6 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-colors',
                      location.pathname === item.path
                        ? 'bg-primary/5 text-primary'
                        : 'text-muted-foreground hover:bg-muted',
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-xl py-6 text-lg font-semibold shadow-xl">
                    Hire Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};