import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import vitoriaPortrait from '@/assets/vitoria-portrait.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-luxury-title mb-4">
              Sobre Vitória Carinhena
            </h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Uma paixão por elegância e autenticidade
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <ScrollReveal animation="fade-left">
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant">
                    <img
                      src={vitoriaPortrait}
                      alt="Vitória Carinhena"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal animation="fade-right" delay={200}>
                <div className="space-y-6">
                  <h2 className="font-tenor text-3xl md:text-4xl font-semibold text-foreground">
                    A História por Trás da Curadoria
                  </h2>
                  
                  <div className="space-y-4 text-body-elegant">
                    <p>
                      Há mais de uma década, Vitória Carinhena dedica-se à arte de selecionar 
                      as mais belas e autênticas bolsas de luxo do mercado. Com um olhar 
                      refinado e expertise reconhecida, ela transformou sua paixão por 
                      acessórios em uma curadoria exclusiva.
                    </p>
                    
                    <p>
                      Cada peça em nossa coleção passa por um rigoroso processo de 
                      autenticação e seleção, garantindo que você adquira não apenas 
                      um acessório, mas uma obra de arte que reflete seu bom gosto 
                      e sofisticação.
                    </p>
                    
                    <p>
                      Nossa missão é democratizar o acesso ao luxo autêntico, oferecendo 
                      peças cuidadosamente escolhidas com a garantia de qualidade e 
                      originalidade que você merece.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button asChild className="btn-gold">
                      <Link to="/catalogo">
                        Ver Catálogo
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="btn-outline-gold">
                      <Link to="/contato">
                        Entrar em Contato
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-tenor text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
                Os pilares que guiam nossa curadoria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-2xl font-tenor font-bold">A</span>
                  </div>
                  <h3 className="font-tenor text-xl font-semibold text-foreground">
                    Autenticidade
                  </h3>
                  <p className="text-body-elegant">
                    Garantia de originalidade em cada peça selecionada
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-2xl font-tenor font-bold">Q</span>
                  </div>
                  <h3 className="font-tenor text-xl font-semibold text-foreground">
                    Qualidade
                  </h3>
                  <p className="text-body-elegant">
                    Rigoroso processo de seleção e inspeção
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-2xl font-tenor font-bold">E</span>
                  </div>
                  <h3 className="font-tenor text-xl font-semibold text-foreground">
                    Elegância
                  </h3>
                  <p className="text-body-elegant">
                    Peças que refletem sofisticação e bom gosto
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;