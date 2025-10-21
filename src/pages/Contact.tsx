import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phone = "5544998762890"; // DDI + DDD + número, sem espaços nem traços
  const message = "Olá! Gostaria de saber mais sobre as bolsas de luxo da Vitória Carinhena.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-luxury-title mb-4">
              Entre em contato
            </h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar você a encontrar a bolsa perfeita
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Contact Cards */}
              <ScrollReveal animation="fade-left">
                <div className="space-y-6 flex flex-col h-full">
                  <h2 className="font-tenor text-4xl text-foreground mb-3">
                    Fale conosco
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
                            carinhenavitoria@gmail.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone Card */}
                  <Card className="card-luxury hover-lift flex-1">
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
                            (44) 99876-2890
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>

              {/* Social Media & Info */}
              <ScrollReveal animation="fade-right" delay={200}>
                <div className="space-y-6 flex flex-col h-full">
                  <h2 className="font-tenor text-4xl text-foreground mb-3">
                    Redes Sociais
                  </h2>

                  {/* Social Media Card */}
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
                            @viccarinhena
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          className="btn-outline-gold"
                          onClick={() => window.open('https://instagram.com/viccarinhena', '_blank')}
                        >
                          Seguir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Hours Card ocupa todo o restante */}
                  <Card className="card-luxury flex-1 flex flex-col">
                    <CardContent className="p-6 flex-1">
                      <div className="space-y-4">
                        <h3 className="font-tenor text-xl font-semibold text-foreground">
                          Horário de atendimento
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

        {/* Contact Form Section */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollReveal animation="fade-up">
      <h2 className="font-tenor text-3xl md:text-5xl text-foreground mb-6 text-center pb-5">
        Envie uma mensagem
      </h2>
    </ScrollReveal>

    <ScrollReveal animation="fade-up" delay={200}>
      <Card className="card-luxury max-w-2xl mx-auto p-8">
        <CardContent>
          <form
  onSubmit={(e) => {
    e.preventDefault();

    const nome = (e.target as any).nome.value.trim();
    const email = (e.target as any).email.value.trim();
    const whatsapp = (e.target as any).whatsapp.value.trim();
    const mensagem = (e.target as any).mensagem.value.trim();

    // Cria a mensagem formatada
    const texto = `Olá! Meu nome é ${nome}.\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\n${mensagem}`;

    // Usa o domínio da API oficial (melhor compatibilidade com o app)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5544998762890&text=${encodeURIComponent(texto)}`;

    // Abre no navegador (ou app, dependendo do dispositivo)
    window.open(whatsappUrl, "_blank");
  }}
  className="space-y-6"
>
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Nome</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full border border-border rounded-lg px-4 py-3 bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-border rounded-lg px-4 py-3 bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Número de WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                required
                className="w-full border border-border rounded-lg px-4 py-3 bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="(44) 99999-9999"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Mensagem</label>
              <textarea
                name="mensagem"
                required
                rows={5}
                className="w-full border border-border rounded-lg px-4 py-3 bg-card resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Escreva sua mensagem..."
              />
            </div>

            <Button type="submit" className="btn-gold w-full text-lg py-4">
              Enviar via whatsApp
            </Button>
          </form>
        </CardContent>
      </Card>
    </ScrollReveal>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-tenor text-3xl md:text-5xl  text-foreground mb-4">
              Pronta para sua nova bolsa?
            </h2>
            <p className="text-luxury-subtitle text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Entre em contato conosco agora e descubra nossa coleção exclusiva
            </p>
            
            <Button onClick={handleWhatsAppClick} className="btn-gold text-lg px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no whatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
