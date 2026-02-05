import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import heroBackground from "@/assets/hero-background.png";
import fotoVi from "@/assets/fotoVi.jpeg";
import b1251 from "@/assets/b125/f34ab3da-ac26-48e5-bef7-eafc6ee38ed1.jpg";

import b1261 from "@/assets/b126/a595eaff-464e-4719-9850-5469d1fde59a.jpg";

import b1271 from "@/assets/b127/8350fc83-0810-48e0-aa16-5218509eac4c.jpg";

import b1291 from "@/assets/b129/b129.jfif";

import b1301 from "@/assets/b130/ce81349e-bbc5-4cb6-826e-cba5dd412a35.jfif";

import b1311 from "@/assets/b131/ca61cd79-4121-4025-91aa-146a69509918.jfif";

import b1321 from "@/assets/b132/a0962640-6dd7-46ab-908f-54de0d9fa0d3.jfif";

import b1331 from "@/assets/b133/90d82199-a6ab-4a56-a7c9-6c22f4386ce4.jfif";

import b1341 from "@/assets/b134/dc149f61-45cc-4f73-9e1e-209d29b2fa36.jfif";

import b1351 from "@/assets/b135/c1ed6adf-49f6-4463-8df6-1717d7964331.jfif";

import b1361 from "@/assets/b136/1a31e6ee-749d-495b-be51-075a49381e3c.jfif";

import b1371 from "@/assets/b137/d2ea129a-0b63-45bf-8547-0c891af72a92.jfif";

import b1381 from "@/assets/b138/04d53dda-0df1-429c-9ecd-02dd56e590be.jfif";

import b1391 from "@/assets/b139/00148ed8-c1b5-4f29-85ee-85829640cf90.jfif";

import b1401 from "@/assets/b140/3f71af08-4270-4d5d-a1d3-5ee81e4abf91.jfif";

import b1411 from "@/assets/b141/2c75adc8-7969-4713-93f2-d5d46159551b.jfif";

import b1421 from "@/assets/b142/58ceb0dd-016d-4ed9-b57a-431a1a005611.jfif";

import b1431 from "@/assets/b143/a762de5e-1337-4081-9666-250b155eeab6.jfif";

import b1441 from "@/assets/b144/acf8c245-318b-48ae-8714-cb4c05dfcd0d.jfif";

import b1451 from "@/assets/b145/3d1e23fe-989d-4618-9e7f-50a22d78a3f6.jfif";

import b1461 from "@/assets/b146/3a53b056-5763-4319-915b-d8472d8f45b1.jfif";

import b1471 from "@/assets/b147/1db34eea-7e4f-4a24-ae29-e1b597b797b3.jfif";

import b1481  from "@/assets/b148/0d1c7115-4f4f-4ed7-9969-37f37752b534.jfif";

import b1491 from "@/assets/b149/46a342d9-34cb-488c-9959-6ddb671358a8.jfif";
import InstagramFeed from "@/components/InstagramFeed";
import VipPopup from "@/components/VipPopup";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const featuredProducts = [
  { id: 125, name: "Chanel WOC Azul Royal", price: "R$13.900,00", image: b1251 },
  { id: 126, name: "YSL Lou Camera Bag", price: "R$8.990,00", image: b1261 },
  { id: 127, name: "Louis Vuitton Speedy", price: "R$8.490,00", image: b1271 },
  { id: 129, name: "Tênis Gucci Ace", price: "R$2.500,00", image: b1291 },
  { id: 130, name: "Gucci Demetra Green", price: "R$2.000,00", image: b1301 },
  { id: 131, name: "Gucci Sneaker GG Canvas", price: "R$4.200,00", image: b1311 },
  { id: 132, name: "Prada Monolith Loafer", price: "R$3.500,00", image: b1321 },
  { id: 133, name: "Louis Vuitton LV Trainer", price: "R$5.500,00", image: b1331 },
  { id: 134, name: "Jacquemus Le Bambino", price: "R$4.990,00", image: b1341 },
  { id: 135, name: "Valentino Wallet on Chain", price: "R$4.990,00", image: b1351 },
  { id: 136, name: "Gucci Ophidia Round Floral", price: "R$5.990,00", image: b1361 },
  { id: 137, name: "Valentino Rockstud Spike", price: "R$6.990,00", image: b1371 },
  { id: 138, name: "Chanel Gabrielle", price: "R$16.000,00", image: b1381 },
  { id: 139, name: "Chanel Classic Flap", price: "R$16.000,00", image: b1391 },
  { id: 140, name: "Louis Vuitton Tivoli PM", price: "R$8.590,00", image: b1401 },
  { id: 141, name: "Prada Re-Edition 2005", price: "R$7.200,00", image: b1411 },
  { id: 142, name: "Burberry Lola Floral", price: "R$6.990,00", image: b1421 },
  { id: 143, name: "Óculos Gucci", price: "R$990,00", image: b1431 },
  { id: 144, name: "Óculos Christian Dior", price: "R$1.890,00", image: b1441 },
  { id: 145, name: "Óculos Celine", price: "R$2.990,00", image: b1451 },
  { id: 146, name: "Louis Vuitton Capucines MM", price: "R$21.990,00", image: b1461 },
  { id: 147, name: "Coach MM", price: "R$1.190,00", image: b1471 },
  { id: 148, name: "Coach Cassie 19", price: "R$2.490,00", image: b1481 },
  { id: 149, name: "Coach Swinger", price: "R$1.990,00", image: b1491 },
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <VipPopup />

      <main>
        {/* Hero Section */}
        <section className="relative flex items-center justify-center bg-background overflow-hidden h-screen sm:h-[90vh] md:h-screen">
          {/* Imagem de fundo cobrindo tudo */}
          <img
            src={heroBackground}
            alt="Bolsas de luxo elegante com padrão VC"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Conteúdo centralizado */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center mt-[-4%] sm:mt-[-6%] md:mt-[-8%] lg:mt-[-10%]">
            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="font-tenor text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] leading-tight text-foreground mb-4 max-w-[22rem] sm:max-w-3xl mx-auto">
                <span className="block">Bolsas de luxo</span>
                <span className="block text-primary mt-1">autênticas</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto mb-8 text-sm sm:text-lg md:text-xl px-2">
                Explore nossa curadoria exclusiva de bolsas de luxo selecionadas com elegância.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  className="btn-gold text-base sm:text-lg px-8 py-3 sm:py-4"
                >
                  <Link to="/catalogo">
                    Ver catálogo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="btn-outline-gold text-base sm:text-lg px-8 py-3 sm:py-4"
                >
                  Desapegue conosco
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-12 sm:py-16 md:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <ScrollReveal animation="fade-left">
                <div className="space-y-6 text-center md:text-left px-2 sm:px-0">
                  <h2 className="font-tenor text-3xl sm:text-4xl md:text-5xl text-foreground">
                    Curadoria exclusiva por
                    <span className="text-primary block">
                      Vitória Carinhena
                    </span>
                  </h2>

                  <p className="text-body-elegant text-base sm:text-lg leading-relaxed">
                    Com sensibilidade, bom gosto e uma verdadeira paixão pelo
                    universo do luxo, Vitória Carinhena dedica-se a escolher
                    pessoalmente cada peça da coleção. Seu olhar atento garante
                    autenticidade e elegância atemporal.
                  </p>

                  <Button asChild className="btn-gold text-base sm:text-lg">
                    <Link to="/sobre">
                      Conhecer a história
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={200}>
                <div className="relative mx-auto max-w-[85%] sm:max-w-md md:max-w-none">
                  <div className="absolute -inset-4 bg-[#c69296]/50 blur-xl rounded-3xl z-0" />
                  <div className="aspect-[4/6] overflow-hidden rounded-2xl shadow-elegant relative z-10">
                    <img
                      src={fotoVi}
                      alt="Vitória Carinhena"
                      className="w-full h-full object-cover max-w-full"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <ScrollReveal animation="fade-up">
                <h2 className="font-tenor text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 leading-snug">
                  Peças em destaque
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
                  Conheça algumas de nossas peças mais procuradas
                </p>
              </ScrollReveal>
            </div>

            <div className="max-w-5xl mx-auto">
  <Carousel className="w-full">
    <CarouselContent>
      {featuredProducts.map((product, index) => (
        <CarouselItem key={product.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
          <ScrollReveal animation="fade-up" delay={(index + 1) * 10}>
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

                <div className="p-6 sm:p-8 text-center flex flex-col justify-between min-h-[200px] sm:min-h-[240px]">
                  <Link to={`/produto/${product.id}`}>
                    <h3 className="font-tenor text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                      {product.name}
                    </h3>
                  </Link>

                  <span className="font-tenor text-2xl sm:text-3xl text-primary mb-6 block font-bold">
                    {product.price}
                  </span>

                  <Button asChild className="w-full text-base sm:text-lg">
                    <Link to={`/produto/${product.id}`}>Ver detalhes</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </CarouselItem>
      ))}
    </CarouselContent>

    {/* Setas laterais */}
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
            </div>


            <ScrollReveal animation="fade-up" delay={600}>
              <div className="text-center mt-12">
                <Button
                  asChild
                  variant="outline"
                  className="btn-outline-gold text-base sm:text-lg px-8 py-3"
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
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-center mb-12 sm:mb-16">
              <ScrollReveal animation="fade-up">
                <h2 className="font-tenor text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                  Por que escolher comprar conosco?
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              <ScrollReveal animation="fade-left">
                <div className="text-center space-y-4">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-primary" />
                  </div>
                  <h3 className="font-tenor text-xl sm:text-2xl text-foreground">
                    Autenticidade garantida
                  </h3>
                  <p className="text-body-elegant text-sm sm:text-base">
                    Cada bolsa passa por rigoroso processo de autenticação.
                    Garantimos a originalidade de todas as nossas peças.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="text-center space-y-4">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-8 sm:h-10 w-8 sm:w-10 text-primary" />
                  </div>
                  <h3 className="font-tenor text-xl sm:text-2xl text-foreground">
                    Curadoria especializada
                  </h3>
                  <p className="text-body-elegant text-sm sm:text-base">
                    Seleção cuidadosa das mais belas e exclusivas bolsas de
                    luxo, com foco em autenticidade e sofisticação.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={400}>
                <div className="text-center space-y-4">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-8 sm:h-10 w-8 sm:w-10 text-primary" />
                  </div>
                  <h3 className="font-tenor text-xl sm:text-2xl text-foreground">
                    Entrega segura
                  </h3>
                  <p className="text-body-elegant text-sm sm:text-base">
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
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-tenor text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Entre para o nosso Grupo VIP
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto mb-8 text-base sm:text-lg md:text-xl">
                Receba novidades exclusivas, lançamentos e ofertas especiais
                diretamente no seu WhatsApp.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <a
                href="https://chat.whatsapp.com/BtZVVpyhCJM7RLjS1zdfns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold text-base sm:text-lg px-8 py-3 sm:py-4">
                  Entrar no Grupo VIP
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
