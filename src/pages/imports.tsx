import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import bagProduct1 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.01 (2).jpeg';
import bagProduct2 from '@/assets/b2/WhatsApp Image 2025-09-25 at 16.35.02 (1).jpeg';
import bagProduct3 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.24.jpeg';
import bagProduct4 from '@/assets/b4/WhatsApp Image 2025-09-25 at 16.36.27.jpeg';
import bagProduct5 from '@/assets/b5/WhatsApp Image 2025-09-25 at 16.37.12 (1).jpeg';
import bagProduct6 from '@/assets/b6/WhatsApp Image 2025-09-25 at 16.37.46.jpeg';
import bagProduct7 from '@/assets/b7/WhatsApp Image 2025-09-25 at 16.38.00.jpeg';
import bagProduct8 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.30.jpeg';
import bagProduct9 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.39.57.jpeg';

const products = [
  {
    id: 1,
    name: 'Mala Louis Vuitton Monogram',
    description: 'Mala em canvas Monogram com couro natural e amplo espaço.',
    price: 'R$7.490,00',
    image: bagProduct1,
  },
  {
    id: 2,
    name: 'Louis Vuitton NeoNoé Monogram',
    description: 'Bucket em canvas Monogram com interior rosa e alça trançada.',
    price: 'R$12.990,00',
    image: bagProduct2,
  },
  {
    id: 3,
    name: 'Chanel Top Handle Matelassê',
    description: 'Chanel em couro caviar com quilting clássico e alça estruturada elegante.',
    price: 'R$34.000,00',
    image: bagProduct3,
  },
  {
    id: 4,
    name: 'Bolsa Burberry Crossbody',
    description: 'Bolsa crossbody Burberry em couro preto com detalhe xadrez.',
    price: 'R$2.550,00',
    image: bagProduct4,
  },
  {
    id: 5,
    name: 'Bolsa Prada Saffiano',
    description: 'Bolsa Prada em couro Saffiano com placa triangular dourada.',
    price: 'R$7.000,00',
    image: bagProduct5,
  },
  {
    id: 6,
    name: 'Louis Vuitton Monogram Cardholder',
    description: 'Porta-cartões em canvas Monogram com acabamento em couro preto.',
    price: 'R$12.990,00',
    image: bagProduct6,
  },
  {
    id: 7,
    name: 'Saint Laurent Lou Camera Bag',
    description: 'Bolsa compacta em couro matelassê com monograma YSL dourado.',
    price: 'R$7.990,00',
    image: bagProduct7,
  },
  {
    id: 8,
    name: 'Hermès em couro preto',
    description: 'Bolsa Hermès em couro texturizado com design minimalista.',
    price: 'R$3.490,00',
    image: bagProduct8,
  },
  {
    id: 9,
    name: 'Gucci Dionysus Mini',
    description: 'Bolsa Gucci Dionysus mini em couro envernizado nude.',
    price: 'R$9.990,00',
    image: bagProduct9,
  },
];

const CatalogImportados = () => {
  const handleWhatsAppClick = (productName: string, price: string) => {
    const message = `Olá! Tenho interesse na ${productName} - ${price}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5544998762890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-luxury-title mb-4">
              Catálogo de Importados
            </h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Peças internacionais por encomenda
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 100}>
                  <Card className="card-luxury hover-lift group h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <Link to={`/produto/${product.id}`}>
                        <div className="aspect-square overflow-hidden rounded-t-xl">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </Link>

                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <Link to={`/produto/${product.id}`}>
                          <h3 className="font-tenor text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200 w-full min-h-[48px]">
                            {product.name}
                          </h3>
                        </Link>

                        <p className="text-body-elegant text-sm mb-4 mt-4">
                          {product.description}
                        </p>

                        <div className="mt-auto space-y-4">
                          <span className="font-tenor text-2xl font-semibold text-primary block">
                            {product.price}
                          </span>

                          <Button
                            onClick={() => handleWhatsAppClick(product.name, product.price)}
                            className="w-full btn-gold"
                          >
                            Comprar pelo WhatsApp
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogImportados;
