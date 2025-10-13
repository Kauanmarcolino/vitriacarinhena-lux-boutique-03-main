import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import vitoriaPortrait from '@/assets/fotoSobre.jpeg';

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
      
      {/* Imagem com efeito de blur dourado */}
      <ScrollReveal animation="fade-left">
  <div className="relative w-fit">
    {/* Glow com blur */}
    <div className="absolute -inset-4 rounded-3xl bg-[#c9b17c]/40 filter blur-2xl"></div>

    {/* Imagem */}
    <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant relative z-10">
      <img
        src={vitoriaPortrait}
        alt="Vitória Carinhena"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</ScrollReveal>

      {/* Texto à direita */}
      <ScrollReveal animation="fade-right" delay={200}>
        <div className="space-y-6">
          <h2 className="font-tenor text-3xl md:text-4xl font-semibold text-foreground">
            A história por trás da curadoria
          </h2>
          
          <div className="space-y-4 text-body-elegant">
            <p>
              Advogada por formação e mãe dedicada, Vitória Carinhena encontrou na moda um novo caminho para expressar sua sensibilidade e apreço pelo luxo autêntico. Movida por sua paixão por bolsas sofisticadas, ela iniciou uma curadoria especial que une elegância, autenticidade e cuidado em cada detalhe.
            </p>
            
            <p>
              Cada peça de nossa coleção é escolhida com critério e responsabilidade, passando por um processo rigoroso de seleção e verificação de autenticidade. Mais do que acessórios, oferecemos verdadeiras expressões de estilo e bom gosto.
            </p>
            
            <p>
              Nosso propósito é tornar o luxo acessível, com transparência e confiança, conectando mulheres a peças únicas que valorizam sua personalidade e história.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild className="btn-gold">
              <Link to="/catalogo">
                Ver catálogo
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="btn-outline-gold">
              <Link to="/contato">
                Entrar em contato
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
                Nossos valores
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
                    Selecionamos cuidadosamente produtos que carregam procedência e história, com garantia de originalidade e certificação de autenticidade, para que você tenha em mãos muito mais do que um acessório: uma obra única e legítima.
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
                    Nossa curadoria segue um processo rigoroso de avaliação, inspeção e seleção. Desde a estrutura até os acabamentos, cada peça é analisada criteriosamente para garantir durabilidade, beleza e padrão elevado de qualidade.
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
                    As bolsas de nossa coleção são escolhidas para valorizar o estilo atemporal e sofisticado de mulheres que apreciam o luxo com discrição, classe e personalidade. Um toque de requinte que transforma qualquer ocasião.
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