import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import bagProduct1 from '@/assets/bag-product-1.jpg';
import bagProduct2 from '@/assets/bag-product-2.jpg';

const products = [
  {
    id: 1,
    name: 'Tote Elegante Premium',
    description: 'Bolsa tote em couro legítimo com acabamento sofisticado',
    price: 'R$ 2.890',
    image: bagProduct1,
  },
  {
    id: 2,
    name: 'Crossbody Luxo',
    description: 'Bolsa transversal com detalhes dourados e alça ajustável',
    price: 'R$ 1.690',
    image: bagProduct2,
  },
  {
    id: 3,
    name: 'Clutch Sofisticada',
    description: 'Clutch minimalista para ocasiões especiais',
    price: 'R$ 890',
    image: bagProduct1,
  },
  {
    id: 4,
    name: 'Bolsa Estruturada',
    description: 'Design estruturado com linhas clean e elegantes',
    price: 'R$ 2.490',
    image: bagProduct2,
  },
];

const Catalog = () => {
  const handleWhatsAppClick = (productName: string, price: string) => {
    const message = `Olá! Tenho interesse na ${productName} - ${price}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
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
              Nosso Catálogo
            </h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa seleção exclusiva de bolsas de luxo autênticas
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 100}>
                  <Card className="card-luxury hover-lift group">
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
                      
                      <div className="p-6 space-y-4">
                        <Link to={`/produto/${product.id}`}>
                          <h3 className="font-tenor text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <p className="text-body-elegant text-sm">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-tenor text-2xl font-semibold text-primary">
                            {product.price}
                          </span>
                        </div>
                        
                        <Button
                          onClick={() => handleWhatsAppClick(product.name, product.price)}
                          className="w-full btn-gold"
                        >
                          Comprar pelo WhatsApp
                        </Button>
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

export default Catalog;