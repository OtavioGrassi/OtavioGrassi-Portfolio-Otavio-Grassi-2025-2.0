const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">01.</span> Sobre Mim
          </h2>
          
          <div className="bg-surface border border-primary/20 rounded-2xl p-8 md:p-12 space-y-6 glow-box-hover">
            <p className="text-foreground/90 text-lg leading-relaxed">
              Sou desenvolvedor Front-End e Full Stack Júnior, apaixonado por tecnologia e pela criação de interfaces funcionais e responsivas. Tenho experiência com <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Angular</span>, <span className="text-primary font-medium">TypeScript</span>, <span className="text-primary font-medium">Java</span> e integração com <span className="text-primary font-medium">APIs REST</span>.
            </p>
            
            <p className="text-foreground/90 text-lg leading-relaxed">
              Concluí o curso de <span className="text-primary font-medium">Análise e Desenvolvimento de Sistemas pela FATEC-SP (2024)</span> e atualmente curso <span className="text-primary font-medium">Pós-Graduação em Desenvolvimento Full Stack na PUC Minas Virtual (2025–2026)</span>.
            </p>
            
            <p className="text-foreground/90 text-lg leading-relaxed">
              Já atuei como estagiário na <span className="text-primary font-medium">UNIVESP</span>, desenvolvendo aplicações educacionais acessíveis, e como freelancer na <span className="text-primary font-medium">LSR Negócios Digitais</span>, criando landing pages otimizadas para SEO e campanhas de marketing digital.
            </p>
            
            <p className="text-foreground/90 text-lg leading-relaxed">
              Gosto de aprender constantemente, trabalhar em equipe e transformar ideias em experiências digitais modernas e acessíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
