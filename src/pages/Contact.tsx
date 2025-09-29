import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre as bolsas de luxo da Vitória Carinhena.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-luxury-title mb-4">
              Entre em Contato
            </h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar você a encontrar a bolsa perfeita
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Cards */}
              <ScrollReveal animation="fade-left">
                <div className="space-y-6">
                  <h2 className="font-tenor text-3xl font-semibold text-foreground mb-8">
                    Fale Conosco
                  </h2>

                  {/* WhatsApp Card */}
                  <Card className="card-luxury hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-tenor text-xl font-semibold text-foreground">
                            WhatsApp
                          </h3>
                          <p className="text-body-elegant">
                            Atendimento personalizado e compras diretas
                          </p>
                        </div>
                        <Button 
                          onClick={handleWhatsAppClick}
                          className="btn-gold"
                        >
                          Conversar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email Card */}
                  <Card className="card-luxury hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-tenor text-xl font-semibold text-foreground">
                            E-mail
                          </h3>
                          <p className="text-body-elegant">
                            contato@vitoriacarinhena.com.br
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone Card */}
                  <Card className="card-luxury hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-tenor text-xl font-semibold text-foreground">
                            Telefone
                          </h3>
                          <p className="text-body-elegant">
                            (11) 99999-9999
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>

              {/* Social Media & Info */}
              <ScrollReveal animation="fade-right" delay={200}>
                <div className="space-y-6">
                  <h2 className="font-tenor text-3xl font-semibold text-foreground mb-8">
                    Redes Sociais
                  </h2>

                  {/* Social Media Cards */}
                  <Card className="card-luxury hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Instagram className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-tenor text-xl font-semibold text-foreground">
                            Instagram
                          </h3>
                          <p className="text-body-elegant">
                            @vitoriacarinhena
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          className="btn-outline-gold"
                          onClick={() => window.open('https://instagram.com/vitoriacarinhena', '_blank')}
                        >
                          Seguir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-luxury hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Facebook className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-tenor text-xl font-semibold text-foreground">
                            Facebook
                          </h3>
                          <p className="text-body-elegant">
                            Vitória Carinhena Bolsas
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          className="btn-outline-gold"
                          onClick={() => window.open('https://facebook.com/vitoriacarinhena', '_blank')}
                        >
                          Curtir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Hours Card */}
                  <Card className="card-luxury">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <h3 className="font-tenor text-xl font-semibold text-foreground">
                          Horário de Atendimento
                        </h3>
                        <div className="space-y-2 text-body-elegant">
                          <div className="flex justify-between">
                            <span>Segunda a Sexta:</span>
                            <span>9h às 18h</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sábado:</span>
                            <span>9h às 14h</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Domingo:</span>
                            <span>Fechado</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-tenor text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pronta para Sua Nova Bolsa?
            </h2>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto mb-8">
              Entre em contato conosco agora e descubra nossa coleção exclusiva
            </p>
            
            <Button onClick={handleWhatsAppClick} className="btn-gold text-lg px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;