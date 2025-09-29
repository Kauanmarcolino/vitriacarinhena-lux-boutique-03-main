import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBackground from '@/assets/hero-background.png';
import bagCollection1 from '@/assets/bag-collection-1.jpg';
import bagProduct1 from '@/assets/bag-product-1.jpg';
import bagProduct2 from '@/assets/bag-product-2.jpg';

const Index = () => {
  const [animatedElements, setAnimatedElements] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimatedElements(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Tote Elegante Premium',
      price: 'R$ 2.890',
      image: bagProduct1,
    },
    {
      id: 2,
      name: 'Crossbody Luxo',
      price: 'R$ 1.690',
      image: bagProduct2,
    },
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de conhecer mais sobre as bolsas de luxo da Vitória Carinhena.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-background animate-crazy-hero">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroBackground}
              alt="Bolsas de luxo elegante com padrão VC"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className={`text-luxury-title mb-6 text-foreground animate-fade-up ${animatedElements.includes(0) ? 'animate-in' : ''}`} data-index="0" data-delay="200ms">
              Bolsas de Luxo Autênticas,
              <br />
              <span className="text-primary">Selecionadas para Você</span>
            </h1>
            
            <p className={`text-luxury-subtitle text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up ${animatedElements.includes(1) ? 'animate-in' : ''}`} data-index="1" style={{ transitionDelay: '200ms' }}>
              Descubra nossa curadoria exclusiva de bolsas de luxo autênticas. 
              Cada peça é cuidadosamente selecionada para refletir elegância e sofisticação.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-fade-up ${animatedElements.includes(2) ? 'animate-in' : ''}`} data-index="2" style={{ transitionDelay: '400ms' }}>
              <Button asChild className="btn-gold text-lg px-8 py-4">
                <Link to="/catalogo">
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline" 
                className="btn-outline-gold text-lg px-8 py-4"
              >
                Falar Conosco
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`font-tenor text-4xl md:text-5xl font-semibold text-foreground mb-4 animate-fade-up ${animatedElements.includes(3) ? 'animate-in' : ''}`} data-index="3">
                Peças em Destaque
              </h2>
              <p className={`text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto animate-fade-up ${animatedElements.includes(4) ? 'animate-in' : ''}`} data-index="4" style={{ transitionDelay: '200ms' }}>
                Conheça algumas de nossas peças mais procuradas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {featuredProducts.map((product, index) => (
                <Card key={product.id} className={`card-luxury hover-lift group animate-fade-up ${animatedElements.includes(5 + index) ? 'animate-in' : ''}`} data-index={5 + index} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
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
                    
                    <div className="p-8 text-center">
                      <Link to={`/produto/${product.id}`}>
                        <h3 className="font-tenor text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <span className="font-tenor text-3xl font-semibold text-primary mb-6 block">
                        {product.price}
                      </span>
                      
                      <Button asChild className="btn-gold w-full">
                        <Link to={`/produto/${product.id}`}>
                          Ver Detalhes
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className={`text-center mt-12 animate-fade-up ${animatedElements.includes(7) ? 'animate-in' : ''}`} data-index="7" style={{ transitionDelay: '600ms' }}>
              <Button asChild variant="outline" className="btn-outline-gold text-lg px-8 py-3">
                <Link to="/catalogo">
                  Ver Todo o Catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-6 animate-fade-left ${animatedElements.includes(8) ? 'animate-in' : ''}`} data-index="8">
                <h2 className="font-tenor text-4xl md:text-5xl font-semibold text-foreground">
                  Curadoria Exclusiva por
                  <span className="text-primary block">Vitória Carinhena</span>
                </h2>
                
                <p className="text-body-elegant text-lg leading-relaxed">
                  Há mais de uma década dedicada à arte de selecionar as mais belas 
                  e autênticas bolsas de luxo. Cada peça passa por um rigoroso processo 
                  de autenticação e seleção.
                </p>
                
                <Button asChild className="btn-gold">
                  <Link to="/sobre">
                    Conhecer a História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className={`relative animate-fade-right ${animatedElements.includes(9) ? 'animate-in' : ''}`} data-index="9" style={{ transitionDelay: '200ms' }}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={bagCollection1}
                    alt="Coleção de bolsas de luxo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`font-tenor text-4xl md:text-5xl font-semibold text-foreground mb-4 animate-fade-up ${animatedElements.includes(10) ? 'animate-in' : ''}`} data-index="10">
                Por que Escolher a Vitória Carinhena?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`text-center space-y-4 animate-fade-left ${animatedElements.includes(11) ? 'animate-in' : ''}`} data-index="11">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-tenor text-2xl font-semibold text-foreground">
                  Autenticidade Garantida
                </h3>
                <p className="text-body-elegant">
                  Cada bolsa passa por rigoroso processo de autenticação. 
                  Garantimos a originalidade de todas as nossas peças.
                </p>
              </div>

              <div className={`text-center space-y-4 animate-fade-up ${animatedElements.includes(12) ? 'animate-in' : ''}`} data-index="12" style={{ transitionDelay: '200ms' }}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-tenor text-2xl font-semibold text-foreground">
                  Curadoria Especializada
                </h3>
                <p className="text-body-elegant">
                  Mais de 10 anos de experiência na seleção das mais belas 
                  e exclusivas bolsas de luxo do mercado.
                </p>
              </div>

              <div className={`text-center space-y-4 animate-fade-right ${animatedElements.includes(13) ? 'animate-in' : ''}`} data-index="13" style={{ transitionDelay: '400ms' }}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-tenor text-2xl font-semibold text-foreground">
                  Entrega Segura
                </h3>
                <p className="text-body-elegant">
                  Frete grátis para todo o Brasil com embalagem de luxo 
                  e seguro total da mercadoria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`font-tenor text-4xl md:text-5xl font-semibold text-foreground mb-4 animate-fade-up ${animatedElements.includes(14) ? 'animate-in' : ''}`} data-index="14">
              Encontre sua Bolsa dos Sonhos
            </h2>
            <p className={`text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up ${animatedElements.includes(15) ? 'animate-in' : ''}`} data-index="15" style={{ transitionDelay: '200ms' }}>
              Entre em contato conosco e descubra a peça perfeita para complementar seu estilo
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-fade-up ${animatedElements.includes(16) ? 'animate-in' : ''}`} data-index="16" style={{ transitionDelay: '400ms' }}>
              <Button onClick={handleWhatsAppClick} className="btn-gold text-lg px-8 py-4">
                Falar pelo WhatsApp
              </Button>
              
              <Button asChild variant="outline" className="btn-outline-gold text-lg px-8 py-4">
                <Link to="/catalogo">
                  Ver Catálogo Completo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;