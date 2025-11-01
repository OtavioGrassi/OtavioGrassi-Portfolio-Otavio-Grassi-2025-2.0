import { Code2, Server, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: Code2,
      skills: [
        "HTML5", "CSS3", "SCSS", "JavaScript (ES6+)", "TypeScript", 
        "React.js", "Angular", "Bootstrap", "Responsividade", "SEO", "Acessibilidade"
      ]
    },
    {
      title: "Back-End / Integrações",
      icon: Server,
      skills: [
        "Java", "Spring Security", "JWT", "Node.js", "Express", 
        "Firebase", "REST API", "JSON"
      ]
    },
    {
      title: "Ferramentas e Outros",
      icon: Wrench,
      skills: [
        "Git", "GitHub", "Gitflow", "Postman", "VS Code", 
        "IntelliJ", "Figma", "WordPress", "Scrum", "Kanban", "Trello"
      ]
    },
    {
      title: "Idiomas",
      icon: Globe,
      skills: [
        "Inglês intermediário (foco em leitura técnica e comunicação para trabalho remoto)"
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">02.</span> Habilidades Técnicas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx}
                className="bg-surface border border-primary/20 rounded-2xl p-8 glow-box-hover"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-4 py-2 bg-surface-elevated border border-primary/30 rounded-lg text-sm text-foreground/90 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
