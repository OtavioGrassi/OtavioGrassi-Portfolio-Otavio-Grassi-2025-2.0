import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Teste Front-End Econverse",
      period: "Out 2025 - Out 2025",
      description: "Aplicação front-end desenvolvida como teste técnico para a vaga de Desenvolvedor Front-End na Econverse. Construída com React, TypeScript, SCSS e HTML semântico, exibe produtos de uma API JSON de forma responsiva, com foco em performance, acessibilidade e boas práticas de SEO.",
      tech: ["React", "TypeScript", "SCSS", "HTML5"],
      github: "https://github.com/OtavioGrassi/teste-front-end",
      demo: null
    },
    {
      title: "Login Page com Autenticação",
      period: "Set 2025 - Set 2025",
      description: "Aplicação full stack que permite login de usuários com autenticação JWT. O front-end se comunica com o back-end em Java (Spring Security e JWT) para validação e controle de sessões.",
      tech: ["React", "Java", "Spring Security", "JWT"],
      github: "https://github.com/OtavioGrassi/login-page-fullstack-frontend",
      demo: null,
      extraLink: {
        url: "https://github.com/OtavioGrassi/login-page-fullstack-backend",
        label: "Backend"
      }
    },
    {
      title: "Dashboard Financeiro Binance",
      period: "Set 2025 - Set 2025",
      description: "Aplicação full stack para exibição de dados financeiros em tempo real, integrada à API pública da Binance. Possui gráficos candlestick interativos via ApexCharts, filtros por par de moedas e intervalos, e atualizações dinâmicas.",
      tech: ["React", "ApexCharts", "Binance API", "TypeScript"],
      github: "https://github.com/OtavioGrassi/Dashboard-Binance-Api-React",
      demo: null
    },
    {
      title: "To Do List",
      period: "Ago 2025 - Ago 2025",
      description: "Aplicação CRUD com criação, edição, busca e filtros por status. Foco em componentização, gerenciamento de estado e manipulação de listas em React.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/OtavioGrassi/To-Do-List-em-React-JS",
      demo: null
    },
    {
      title: "Landing Page E-commerce Supermercado",
      period: "Jun 2025 - Jun 2025",
      description: "Simulação de e-commerce com carrinho de compras, atualização dinâmica e cálculo automático de totais. Desenvolvida com HTML, CSS e JavaScript, usando dados de uma API REST local com JSON Server.",
      tech: ["HTML", "CSS", "JavaScript", "JSON Server"],
      github: "https://github.com/OtavioGrassi/Teste-Front-Tgid",
      demo: null
    },
    {
      title: "Questões Objetivas",
      period: "Set 2024 - Dez 2024",
      description: "Aplicação interativa de simulação de questões de múltipla escolha, baseada em exames como ENEM e ENADE. Apresenta enunciados e alternativas dinâmicas para prática de provas.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/univesp/questoes-objetivas",
      demo: "https://apps.univesp.br/questoes-objetivas/"
    },
    {
      title: "História da Pessoa com Deficiência",
      period: "Ago 2024 - Nov 2024",
      description: "Aplicação em formato de linha do tempo interativa, apresentando a história da pessoa com deficiência desde as civilizações antigas até os dias atuais. Desenvolvida com foco em acessibilidade e conteúdo educativo.",
      tech: ["React", "JavaScript", "Acessibilidade", "CSS"],
      github: "https://github.com/univesp/linha-do-tempo-da-acessibilidade",
      demo: "https://apps.univesp.br/historia-da-pessoa-com-deficiencia/"
    },
    {
      title: "Imposto de Renda",
      period: "Jul 2024 - Set 2024",
      description: "Aplicação educativa sobre o processo de declaração do imposto de renda. Inclui tutoriais, exemplos práticos e design voltado à compreensão de iniciantes.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/univesp/imposto-de-renda",
      demo: "https://apps.univesp.br/imposto-de-renda/"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">03.</span> Projetos Recentes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-surface border border-primary/20 rounded-2xl p-6 flex flex-col glow-box-hover"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                      >
                        <Github className="h-4 w-4 text-primary" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                      >
                        <ExternalLink className="h-4 w-4 text-primary" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-primary/80">{project.period}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech stack */}
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-3 py-1 bg-surface-elevated border border-primary/30 rounded-md text-xs text-foreground/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.extraLink && (
                    <a 
                      href={project.extraLink.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-primary hover:underline"
                    >
                      🔗 {project.extraLink.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
