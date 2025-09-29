import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, Heart, Share2, Shield, Truck, RefreshCw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import bagProduct1 from '@/assets/bag-product-1.jpg';
import bagProduct2 from '@/assets/bag-product-2.jpg';
import bagProduct3 from '@/assets/bag-product-3.jpg';
import bagProduct4 from '@/assets/bag-product-4.jpg';
import bagProduct5 from '@/assets/bag-product-5.jpg';
import bagProduct6 from '@/assets/bag-product-6.jpg';

const products = {
  '1': {
    id: 1,
    name: 'Tote Elegante Premium',
    price: 'R$ 2.890',
    originalPrice: 'R$ 3.200',
    description: 'Esta magnífica bolsa tote em couro legítimo representa o ápice da elegância e funcionalidade. Confeccionada com couro italiano de primeira qualidade, apresenta acabamento sofisticado e detalhes que demonstram a maestria artesanal.',
    features: [
      'Couro italiano legítimo de alta qualidade',
      'Forro interno em tecido premium',
      'Fechamento com zíper YKK',
      'Alças resistentes e confortáveis',
      'Bolsos internos organizadores',
      'Pés metálicos protetores na base'
    ],
    dimensions: '40cm x 30cm x 15cm',
    color: 'Bege Clássico',
    material: 'Couro Italiano',
    images: [bagProduct1, bagProduct2, bagProduct3, bagProduct4, bagProduct5, bagProduct6],
  },
  '2': {
    id: 2,
    name: 'Crossbody Luxo',
    price: 'R$ 1.690',
    originalPrice: 'R$ 1.890',
    description: 'Bolsa transversal sofisticada com design contemporâneo e funcionalidade excepcional. Os detalhes dourados conferem elegância extra, enquanto a alça ajustável garante conforto durante todo o dia.',
    features: [
      'Design contemporâneo e versátil',
      'Detalhes em hardware dourado',
      'Alça ajustável e removível',
      'Compartimento principal espaçoso',
      'Bolso frontal com zíper',
      'Couro macio ao toque'
    ],
    dimensions: '25cm x 18cm x 8cm',
    color: 'Caramelo',
    material: 'Couro Nappa',
    images: [bagProduct2, bagProduct1, bagProduct3, bagProduct4, bagProduct5, bagProduct6],
  },
};

const Product = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair mb-4">Produto não encontrado</h1>
          <Button asChild>
            <Link to="/catalogo">Voltar ao Catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Olá! Tenho interesse na ${product.name} - ${product.price}. Gostaria de mais informações e fotos adicionais.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link to="/catalogo" className="hover:text-primary transition-colors">
                Catálogo
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedImageIndex(0)}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {product.images.slice(1, 3).map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedImageIndex(index + 1)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - vista ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                  {product.images.length > 3 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-square overflow-hidden rounded-lg cursor-pointer relative bg-black/20">
                          <img
                            src={product.images[2]}
                            alt={`${product.name} - vista 3`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="text-white font-playfair text-lg font-semibold">
                              +{product.images.length - 2}
                            </span>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {product.images.map((image, index) => (
                              <CarouselItem key={index}>
                                <div className="aspect-square overflow-hidden rounded-xl">
                                  <img
                                    src={image}
                                    alt={`${product.name} - vista ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="font-playfair text-3xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-body-elegant text-lg leading-relaxed">
                  {product.description}
                </p>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="card-luxury">
                    <CardContent className="p-4">
                      <h4 className="font-playfair font-semibold text-foreground mb-2">
                        Dimensões
                      </h4>
                      <p className="text-body-elegant text-sm">{product.dimensions}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-luxury">
                    <CardContent className="p-4">
                      <h4 className="font-playfair font-semibold text-foreground mb-2">
                        Material
                      </h4>
                      <p className="text-body-elegant text-sm">{product.material}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                    Características
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-body-elegant">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-6">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full btn-gold text-lg py-4"
                  >
                    Comprar pelo WhatsApp
                  </Button>
                  
                  <div className="flex space-x-4">
                    <Button variant="outline" className="flex-1 btn-outline-gold">
                      <Heart className="mr-2 h-4 w-4" />
                      Favoritar
                    </Button>
                    
                    <Button variant="outline" className="flex-1 btn-outline-gold">
                      <Share2 className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Autenticidade Garantida</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Frete Grátis</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Troca Garantida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Catalog */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="outline" className="btn-outline-gold">
              <Link to="/catalogo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Catálogo
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;