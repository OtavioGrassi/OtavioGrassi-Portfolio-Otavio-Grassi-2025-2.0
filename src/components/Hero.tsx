import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface opacity-50" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 bg-surface">
                {/* Placeholder for photo */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-surface-elevated">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-6xl text-primary font-bold">OG</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Espaço para foto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-slide-in text-center lg:text-left">
            <div>
              <h2 className="text-primary text-lg md:text-xl font-medium mb-2">Olá, meu nome é</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 glow-text">
                Otávio Henrique<br />Ramos Grassi
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                Desenvolvedor Front-End | Full Stack Júnior
              </h3>
            </div>

            <p className="text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed">
              Busco minha primeira oportunidade CLT como Desenvolvedor Front-End/Full Stack, 
              aplicando conhecimentos em <span className="text-primary font-medium">Angular</span>, <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Java</span>, <span className="text-primary font-medium">JavaScript</span> e <span className="text-primary font-medium">APIs REST</span> para 
              criar aplicações modernas, responsivas e seguras.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box-hover font-medium"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Currículo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary/10 font-medium"
              >
                Entrar em Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              <a 
                href="https://www.linkedin.com/in/otavio-grassi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 glow-box-hover"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://github.com/OtavioGrassi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 glow-box-hover"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="mailto:ramosgrassi@gmail.com"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 glow-box-hover"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
