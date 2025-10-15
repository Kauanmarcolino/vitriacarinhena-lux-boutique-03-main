import { useState } from "react";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import videoInst from "@/videoInst.mp4";
import videoPoster from "@/assets/posterVideo.png";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-luxury-title mb-4">Sobre Vitória Carinhena</h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Uma paixão por elegância e autenticidade
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* VÍDEO no lugar da imagem */}
              <ScrollReveal animation="fade-left">
                <div className="relative w-fit mx-auto">
                  {/* Glow dourado com blur */}
                  <div className="absolute -inset-4 rounded-3xl bg-[#c9b17c]/40 filter blur-2xl"></div>

                  {/* Player do vídeo */}
                  <div className="relative h-[800px] w-[500px] overflow-hidden rounded-2xl shadow-elegant z-10 bg-black">
                    {showVideo ? (
                      <video
                        controls
                        autoPlay
                        className="w-full h-full object-cover rounded-2xl"
                        poster={videoPoster}
                      >
                        <source src={videoInst} type="video/mp4" />
                        Seu navegador não suporta vídeos em HTML5.
                      </video>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={videoPoster}
                          alt="Preview do vídeo"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <button
                          onClick={() => setShowVideo(true)}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center hover-lift shadow-lg transition-transform duration-300">
                            <Play className="h-12 w-12 text-white ml-1" />
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Texto à direita */}
              <ScrollReveal animation="fade-right" delay={200}>
                <div className="space-y-6 max-w-xl mx-auto text-center lg:text-left">
                  <h2 className="font-tenor text-4xl md:text-5xl text-foreground">
                    A história por trás da curadoria
                  </h2>

                  <div className="space-y-4 text-body-elegant text-lg">
                    <p>
                      Advogada por formação e mãe dedicada, Vitória Carinhena
                      encontrou na moda um novo caminho para expressar sua
                      sensibilidade e apreço pelo luxo autêntico. Movida por sua
                      paixão por bolsas sofisticadas, ela iniciou uma curadoria
                      especial que une elegância, autenticidade e cuidado em
                      cada detalhe.
                    </p>

                    <p>
                      Cada peça de nossa coleção é escolhida com critério e
                      responsabilidade, passando por um processo rigoroso de
                      seleção e verificação de autenticidade. Mais do que
                      acessórios, oferecemos verdadeiras expressões de estilo e
                      bom gosto.
                    </p>

                    <p>
                      Nosso propósito é tornar o luxo acessível, com
                      transparência e confiança, conectando mulheres a peças
                      únicas que valorizam sua personalidade e história.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <Button asChild className="btn-gold">
                      <Link to="/catalogo">Ver catálogo</Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="btn-outline-gold"
                    >
                      <Link to="/contato">Entrar em contato</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-tenor text-3xl md:text-5xl text-foreground mb-4">
              Pronta para encontrar sua bolsa ideal?
            </h2>
            <p className="text-luxury-subtitle text-muted-foreground text-xl max-w-xl mx-auto mb-8">
              Explore nossa coleção curada e descubra a peça perfeita para você
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-gold">
                <Link to="/catalogo">Explorar catálogo</Link>
              </Button>

              <Button asChild variant="outline" className="btn-outline-gold">
                <Link to="/contato">Falar conosco</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-tenor text-3xl md:text-5xl text-foreground mb-4">
                Nossos valores
              </h2>
              <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto text-xl">
                Os pilares que guiam nossa curadoria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Autenticidade */}
              <ScrollReveal delay={0}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-2xl font-tenor font-bold">
                      A
                    </span>
                  </div>
                  <h3 className="font-tenor text-2xl">Autenticidade</h3>
                  <p className="text-body-elegant">
                    Selecionamos cuidadosamente produtos que carregam
                    procedência e história, com garantia de originalidade e
                    certificação de autenticidade.
                  </p>
                </div>
              </ScrollReveal>

              {/* Qualidade */}
              <ScrollReveal delay={200}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-2xl font-tenor font-bold">
                      Q
                    </span>
                  </div>
                  <h3 className="font-tenor text-2xl text-foreground">
                    Qualidade
                  </h3>
                  <p className="text-body-elegant">
                    Nossa curadoria segue um processo rigoroso de avaliação,
                    inspeção e seleção para garantir padrão elevado.
                  </p>
                </div>
              </ScrollReveal>

              {/* Elegância */}
              <ScrollReveal delay={400}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-2xl font-tenor font-bold">
                      E
                    </span>
                  </div>
                  <h3 className="font-tenor text-2xl text-foreground">
                    Elegância
                  </h3>
                  <p className="text-body-elegant">
                    As bolsas de nossa coleção valorizam o estilo atemporal e
                    sofisticado de mulheres que apreciam o luxo com classe e
                    personalidade.
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
