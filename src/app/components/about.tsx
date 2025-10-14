export function About() {
    return (
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
  
            <div className="grid gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground text-pretty">
                  Minha trajetória profissional começou na Administração, área em que me graduei e que me proporcionou experiências valiosas na gestão de negócios e no empreendedorismo. Durante esse período, tive a oportunidade de compreender de perto a dinâmica empresarial, a importância da organização de processos e a visão estratégica necessária para conduzir projetos de forma eficiente. Essas vivências foram fundamentais para moldar minha mentalidade analítica, minha capacidade de resolução de problemas e meu olhar crítico sobre oportunidades de melhoria.
                </p>
  
                <p className="text-lg text-muted-foreground text-pretty">
                  Foi justamente essa curiosidade em investigar e compreender melhor o mundo dos negócios e da inovação que me levou a explorar um novo universo: a tecnologia. O ponto de virada veio em 2021, quando busquei entender mais a fundo como funcionavam o Bitcoin, a blockchain e os smart contracts. Essa busca despertou meu interesse pela programação e abriu caminho para uma transição de carreira, iniciada formalmente em 2022. 
                </p>
  
                <p className="text-lg text-muted-foreground text-pretty">
                  Desde então, estou me especializando no desenvolvimento full stack, unindo minha base analítica e visão de negócios à criação de soluções tecnológicas eficientes e escaláveis. Tenho me aprofundado em linguagens e frameworks como Python, JavaScript, React e Django, com foco em boas práticas de engenharia de software e integração entre front-end e back-end. Busco atuar em projetos que valorizem qualidade técnica, colaboração e impacto real por meio da tecnologia. 
                </p>
              </div>
  
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl text-center font-semibold mb-4 text-primary">Tecnologias que utilizo:</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Bootstrap",
                    "Git",
                    "Node.js",
                    "Vue.js",
                    "React",
                    "Next.js",
                    "React",
                    "TypeScript",
                    "PostgreSQL",
                    "Python",
                    "Django",
                    "Postman",
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }