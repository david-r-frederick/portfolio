import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative border-t bg-background py-16 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-sans text-2xl font-black tracking-tight text-primary mb-1">David Frederick</h3>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Full-Stack Software Developer
            </p>
          </div>
          
          <div className="flex gap-4">
            {[
              {
                icon: <Github className="h-5 w-5" />,
                href: 'https://github.com/david-r-frederick',
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                href: 'https://linkedin.com/in/david-frederick-413b30ab',
              },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:dfrederick79@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/50 text-muted-foreground hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-110 active:scale-95"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-medium text-muted-foreground">
              © {new Date().getFullYear()} David Frederick.
            </p>
            <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mt-1">
              Built with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};