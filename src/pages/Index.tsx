import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal"; // 👈 Importado
import heroBackground from "@/assets/hero-background.png";
import fotoVi from "@/assets/fotoVi.jpeg";
import bagProduct1 from "@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.01 (2).jpeg";
import bagProduct2 from "@/assets/b2/WhatsApp Image 2025-09-25 at 16.35.02.jpeg";
import bolsaGrupo from "@/assets/bolsa-grupo.jpg";
import InstagramFeed from "@/components/InstagramFeed";
import VipPopup from "@/components/VipPopup";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Mala Louis Vuitton Monogram",
      price: "R$7.490,00",
      image: bagProduct1,
    },
    {
      id: 2,
      name: "Louis Vuitton NeoNoé Monogram",
      price: "R$12.990,00",
      image: bagProduct2,
    },
  ];

  const handleWhatsAppClick = () => {
    const message =
      "Olá! Gostaria de desapegar minha bolsa de luxo com você Vitoria Carinhena!";
    const whatsappUrl = `https://wa.me/5544998762890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VipPopup />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-background animate-crazy-hero pb-40">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroBackground}
              alt="Bolsas de luxo elegante com padrão VC"
              className="w-full h-full object-cover"
            />

            {/* 🔽 Degradê no final da imagem */}
            <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-b from-transparent to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="font-tenor text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-6">
                <span className="block">Bolsas de luxo autênticas,</span>
                <span className="block text-primary mt-1">
                  selecionadas para você
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <p className="text-luxury-subtitle text-muted-foreground max-w-3xl mx-auto mb-8 text-xl">
                Descubra nossa curadoria exclusiva de bolsas de luxo autênticas.
                Cada peça é cuidadosamente selecionada para refletir elegância e
                sofisticação.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-gold text-lg px-8 py-4">
                  <Link to="/catalogo">
                    Ver catálogo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="btn-outline-gold text-lg px-8 py-4"
                >
                  Desapegue conosco
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="fade-left">
                <div className="space-y-6">
                  <h2 className="font-tenor text-4xl md:text-5xl font-semibold text-foreground">
                    Curadoria exclusiva por
                    <span className="text-primary block">
                      Vitória Carinhena
                    </span>
                  </h2>

                  <p className="text-body-elegant text-lg leading-relaxed">
                    Com sensibilidade, bom gosto e uma verdadeira paixão pelo
                    universo do luxo, Vitória Carinhena dedica-se a escolher
                    pessoalmente cada peça da coleção. Seu olhar atento e
                    apurado garante autenticidade, elegância e uma curadoria
                    criteriosa que valoriza a exclusividade e o estilo atemporal
                    de cada bolsa.
                  </p>

                  <Button asChild className="btn-gold">
                    <Link to="/sobre">
                      Conhecer a história
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#c69296]/50 blur-xl rounded-3xl z-0" />
                  <div className="aspect-[4/6] overflow-hidden rounded-2xl shadow-elegant relative z-10">
                    <img
                      src={fotoVi}
                      alt="Coleção de bolsas de luxo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <ScrollReveal animation="fade-up">
                <h2 className="font-tenor text-4xl md:text-5xl font-semibold text-foreground mb-4">
                  Peças em destaque
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
                  Conheça algumas de nossas peças mais procuradas
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {featuredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  animation="fade-up"
                  delay={(index + 1) * 200}
                >
                  <Card className="card-luxury hover-lift group h-full flex flex-col">
                    <CardContent className="p-0">
                      <Link to={`/produto/${product.id}`}>
                        <div className="aspect-square overflow-hidden rounded-t-xl">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </Link>

                      <div className="p-8 text-center min-h-[260px] flex flex-col justify-between">
                        <Link to={`/produto/${product.id}`}>
                          <h3 className="font-tenor text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                            {product.name}
                          </h3>
                        </Link>

                        <span className="font-tenor text-3xl font-semibold text-primary mb-6 block text-black-400">
                          {product.price}
                        </span>

                        <Button asChild className="w-full">
                          <Link to={`/produto/${product.id}`}>
                            Ver detalhes
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={600}>
              <div className="text-center mt-12">
                <Button
                  asChild
                  variant="outline"
                  className="btn-outline-gold text-lg px-8 py-3"
                >
                  <Link to="/catalogo">
                    Ver todo o catálogo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <ScrollReveal animation="fade-up">
                <h2 className="font-tenor text-4xl md:text-5xl font-semibold text-foreground mb-4">
                  Por que escolher comprar conosco?
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal animation="fade-left">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-tenor text-2xl font-semibold text-foreground">
                    Autenticidade garantida
                  </h3>
                  <p className="text-body-elegant">
                    Cada bolsa passa por rigoroso processo de autenticação.
                    Garantimos a originalidade de todas as nossas peças.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-tenor text-2xl font-semibold text-foreground">
                    Curadoria especializada
                  </h3>
                  <p className="text-body-elegant">
                    Seleção cuidadosa das mais belas e exclusivas bolsas de
                    luxo, com foco em autenticidade e sofisticação.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={400}>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-tenor text-2xl font-semibold text-foreground">
                    Entrega Segura
                  </h3>
                  <p className="text-body-elegant">
                    Atendimento personalizado via WhatsApp. Envio com embalagem
                    de luxo e seguro incluso.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <InstagramFeed />

        {/* WhatsApp Group Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-tenor text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Entre para o nosso Grupo VIP
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto mb-8">
                Receba novidades exclusivas, lançamentos e ofertas especiais
                diretamente no seu WhatsApp.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="max-w-3xl mx-auto mb-10">
                <img
                  src={bolsaGrupo}
                  alt="Grupo VIP no WhatsApp"
                  className="w-full rounded-2xl shadow-elegant object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <a
                href="https://chat.whatsapp.com/BtZVVpyhCJM7RLjS1zdfns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold text-lg px-8 py-4">
                  Entrar no Grupo VIP
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-tenor text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Encontre sua bolsa dos sonhos
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto mb-8">
                Entre em contato conosco e descubra a peça perfeita para
                complementar seu estilo
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  className="btn-gold text-lg px-8 py-4"
                >
                  Falar pelo whatsApp
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="btn-outline-gold text-lg px-8 py-4"
                >
                  <Link to="/catalogo">Ver catálogo completo</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
