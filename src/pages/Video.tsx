import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import videoInst from "@/videoInst.mp4";
import videoPoster from "@/assets/posterVideo.png";

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-luxury-title mb-4">Nossa curadoria</h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Conheça o processo por trás da seleção das nossas bolsas de luxo
            </p>
          </div>
        </section>

        {/* Video + Text Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Vídeo */}
              <div className="w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="relative w-full aspect-[9/16] rounded-2xl shadow-elegant overflow-hidden bg-secondary/30">
                  {showVideo ? (
                    <video
                      controls
                      autoPlay
                      className="w-full h-full object-contain rounded-2xl bg-black"
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
                        className="w-full h-full object-contain rounded-2xl bg-black"
                      />
                      <button
                        onClick={() => setShowVideo(true)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover-lift shadow-lg">
                          <Play className="h-10 w-10 text-white ml-1" />
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Textos */}
              <div className="space-y-6 text-center lg:text-left max-w-xl mx-auto">
                <h2 className="font-tenor text-3xl md:text-4xl font-semibold text-foreground">
                  Transparência e confiança
                </h2>

                <div className="space-y-4 text-body-elegant">
                  <p>
                    Neste vídeo exclusivo, Vitória Carinhena compartilha os
                    bastidores do seu processo de curadoria, revelando como
                    cada peça é criteriosamente escolhida.
                  </p>
                  <p>
                    Você verá de perto os métodos de autenticação utilizados,
                    os critérios de qualidade aplicados e a paixão que move
                    cada seleção.
                  </p>
                </div>

                <Button asChild className="btn-gold">
                  <Link to="/catalogo">Ver coleção atual</Link>
                </Button>

                {/* Lista de features */}
                <div className="mt-8 space-y-6">
                  <h3 className="font-tenor text-2xl font-semibold text-foreground">
                    O que você verá no vídeo:
                  </h3>

                  <div className="space-y-4">
                    {[
                      "Processo de autenticação detalhado",
                      "Critérios de seleção de qualidade",
                      "Histórias por trás das peças",
                      "Dicas para identificar autenticidade",
                      "Cuidados e conservação",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                        <span className="text-body-elegant">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-tenor text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pronta para encontrar sua bolsa ideal?
            </h2>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto mb-8">
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
      </main>

      <Footer />
    </div>
  );
};

export default Video;
