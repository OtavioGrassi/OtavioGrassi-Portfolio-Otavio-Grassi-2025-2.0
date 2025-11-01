import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="py-12 px-4 border-t border-primary/20 relative">
      <div className="absolute top-0 left-1/2 w-96 h-48 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/otavio-grassi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 glow-box-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="https://github.com/OtavioGrassi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 glow-box-hover"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="mailto:ramosgrassi@gmail.com"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 glow-box-hover"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-foreground/80 text-sm">
              © 2025 Otávio Henrique Ramos Grassi
            </p>
            <p className="text-foreground/60 text-sm">
              Desenvolvedor Front-End | Full Stack Júnior
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
