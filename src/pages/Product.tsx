import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, Heart, Share2, Shield, Truck, RefreshCw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import bagProduct1 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.34.14.jpeg';
import bagProduct2 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.34.59 (1).jpeg';
import bagProduct3 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.34.59 (2).jpeg';
import bagProduct4 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.34.59.jpeg';
import bagProduct5 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.00 (1).jpeg';
import bagProduct6 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.00 (2).jpeg';
import bagProduct7 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.00 (3).jpeg';
import bagProduct8 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.00.jpeg';
import bagProduct9 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.01 (1).jpeg';
import bagProduct10 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.01 (2).jpeg';
import bagProduct11 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.01 (3).jpeg';
import bagProduct12 from '@/assets/b1/WhatsApp Image 2025-09-25 at 16.35.01.jpeg';

import bagProduct21 from '@/assets/b2/WhatsApp Image 2025-09-25 at 16.35.02 (1).jpeg';
import bagProduct22 from '@/assets/b2/WhatsApp Image 2025-09-25 at 16.35.02.jpeg';
import bagProduct23 from '@/assets/b2/WhatsApp Image 2025-09-25 at 16.35.03 (1).jpeg';
import bagProduct24 from '@/assets/b2/WhatsApp Image 2025-09-25 at 16.35.03.jpeg';
import bagProduct25 from '@/assets/b2/WhatsApp Image 2025-09-25 at 16.35.04.jpeg';

import bagProduct31 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.17.jpeg';
import bagProduct32 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.19 (1).jpeg';
import bagProduct33 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.19.jpeg';
import bagProduct34 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.20.jpeg';
import bagProduct35 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.23 (1).jpeg';
import bagProduct36 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.23 (2).jpeg';
import bagProduct37 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.23.jpeg';
import bagProduct38 from '@/assets/b3/WhatsApp Image 2025-09-25 at 16.35.24.jpeg';

import bagProduct41 from '@/assets/b4/WhatsApp Image 2025-09-25 at 16.36.18.jpeg';
import bagProduct42 from '@/assets/b4/WhatsApp Image 2025-09-25 at 16.36.25.jpeg';
import bagProduct43 from '@/assets/b4/WhatsApp Image 2025-09-25 at 16.36.27 (1).jpeg';
import bagProduct44 from '@/assets/b4/WhatsApp Image 2025-09-25 at 16.36.27.jpeg';

import bagProduct51 from '@/assets/b5/WhatsApp Image 2025-09-25 at 16.37.12 (1).jpeg';
import bagProduct52 from '@/assets/b5/WhatsApp Image 2025-09-25 at 16.37.12.jpeg';
import bagProduct53 from '@/assets/b5/WhatsApp Image 2025-09-25 at 16.37.13.jpeg';

import bagProduct61 from '@/assets/b6/WhatsApp Image 2025-09-25 at 16.37.46.jpeg';
import bagProduct62 from '@/assets/b6/WhatsApp Image 2025-09-25 at 16.37.47 (1).jpeg';
import bagProduct63 from '@/assets/b6/WhatsApp Image 2025-09-25 at 16.37.47 (2).jpeg';
import bagProduct64 from '@/assets/b6/WhatsApp Image 2025-09-25 at 16.37.47.jpeg';

import bagProduct71 from '@/assets/b7/WhatsApp Image 2025-09-25 at 16.38.00.jpeg';
import bagProduct72 from '@/assets/b7/WhatsApp Image 2025-09-25 at 16.38.02 (1).jpeg';
import bagProduct73 from '@/assets/b7/WhatsApp Image 2025-09-25 at 16.38.02.jpeg';
import bagProduct74 from '@/assets/b7/WhatsApp Image 2025-09-25 at 16.38.10.jpeg';
import bagProduct75 from '@/assets/b7/WhatsApp Image 2025-09-25 at 16.38.11 (1).jpeg';
import bagProduct76 from '@/assets/b7/WhatsApp Image 2025-09-25 at 16.38.11.jpeg';

import bagProduct81 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.30.jpeg';
import bagProduct82 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.51 (1).jpeg';
import bagProduct83 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.51 (2).jpeg';
import bagProduct84 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.51 (3).jpeg';
import bagProduct85 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.51.jpeg';
import bagProduct86 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.52 (1).jpeg';
import bagProduct87 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.52 (2).jpeg';
import bagProduct88 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.52.jpeg';
import bagProduct89 from '@/assets/b8/WhatsApp Image 2025-09-25 at 16.39.53.jpeg';

import bagProduct91 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.39.57.jpeg';
import bagProduct92 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.39.58 (1).jpeg';
import bagProduct93 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.39.58.jpeg';
import bagProduct94 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.39.59.jpeg';
import bagProduct95 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.40.00.jpeg';
import bagProduct96 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.40.01 (1).jpeg';
import bagProduct97 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.40.01.jpeg';
import bagProduct98 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.40.07.jpeg';
import bagProduct99 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.40.09 (1).jpeg';
import bagProduct910 from '@/assets/b9/WhatsApp Image 2025-09-25 at 16.40.09.jpeg';




const products = {
  '1': {
    id: 1,
    name: 'Mala Louis Vuitton Monogram',
    price: 'R$7.490,00 (10x de R$817,00)',
    originalPrice: 'R$9.990',
    description: 'Combinação perfeita de elegância e funcionalidade: confeccionada em canvas Monogram com detalhes e alças em couro natural, possui amplo espaço interno e fecho com zíper para viagens de fim de semana ou escapadas rápidas. Um clássico atemporal para quem viaja com estilo.',
    features: [
  'Canvas Monogram icônico',
  'Detalhes em couro natural',
  'Amplo espaço interno',
  'Fechamento seguro com zíper',
  'Alças resistentes e confortáveis',
  'Bolsos internos organizadores',
  'Pés metálicos protetores na base'
],

    dimensions: '55cm × 31cm × 24 cm',
    color: 'Marrom com detalhes caramelo',
    material: 'Canvas Monogram e couro natural',
    images: [bagProduct1, bagProduct2, bagProduct3, bagProduct4, bagProduct5, bagProduct6, bagProduct7, bagProduct8, bagProduct9, bagProduct10, bagProduct11, bagProduct12],
  },
  '2': {
    id: 2,
    name: 'Louis Vuitton NeoNoé Monogram',
    price: 'R$12.990,00 (10x de R$1.415,00)',
    originalPrice: 'R$ 14.990',
    description: 'Confeccionada em canvas Monogram icônico com interior em couro rosa, alça superior trançada e fecho em cordão de couro natural, esta bolsa bucket une tradição e modernidade. Espaçosa e versátil, transita do casual ao elegante com o charme atemporal da maison.',
    features: [
      'Design contemporâneo e versátil',
      'Detalhes em hardware dourado',
      'Alça ajustável e removível',
      'Compartimento principal espaçoso',
      'Bolso frontal com zíper',
      'Couro macio ao toque'
    ],
    dimensions: '26cm × 26cm × 17,5cm',
    color: 'Marrom com interior rosa',
    material: 'Canvas Monogram e couro natural',
    images: [bagProduct21, bagProduct22, bagProduct23, bagProduct24, bagProduct25],
  },
  '3': {
    id: 3,
    name: 'Chanel Top Handle Matelassê',
    price: 'R$34.000,00 (10x de R$3.707,00)',
    originalPrice: 'R$ 39.990',
    description: 'Feita em couro caviar branco com o clássico quilting em losangos, apresenta alça superior estruturada e corrente dourada com entrelaçamento em couro. O fecho com o icônico CC torna esta peça atemporal e sofisticada, perfeita para elevar qualquer look.',
    features: [
      'Couro caviar de alta durabilidade',
      'Quilting em losangos',
      'Alça superior trançada',
      'Corrente dourada com couro entrelaçado',
      'Fecho CC icônico',
      'Elegância atemporal'
    ],
    dimensions: '25cm × 18cm × 8cm',
    color: 'Branco',
    material: 'Couro caviar',
    images: [bagProduct31, bagProduct32, bagProduct33, bagProduct34, bagProduct35, bagProduct36, bagProduct37, bagProduct38],
  },
  '4': {
    id: 4,
    name: 'Bolsa Burberry Crossbody',
    price: 'R$2.550 (10x de R$278,00)',
    originalPrice: 'R$ 3.500',
    description: 'Elegância e tradição se encontram nesta bolsa: combinação de couro preto e o clássico xadrez da marca, com fechamento em aba e alça ajustável. Compacta e versátil, é perfeita para adicionar um toque atemporal aos looks do dia a dia.',
    features: [
      'Couro preto resistente',
      'Detalhe icônico em xadrez',
      'Fechamento em aba prática',
      'Alça ajustável para conforto',
      'Compacta e versátil',
      'Ideal para uso diário'
    ],
    dimensions: '24cm × 17cm × 8cm',
    color: 'Preto com detalhe xadrez',
    material: 'Couro e tecido xadrez Burberry',
    images: [bagProduct41, bagProduct42, bagProduct43, bagProduct44],
  },
  '5': {
    id: 5,
    name: 'Bolsa Prada Saffiano',
    price: 'R$7.000 (10x de R$763,00)',
    originalPrice: 'R$ 3.500',
    description: 'Elegância em versão compacta: confeccionada em couro Saffiano preto com a emblemática placa triangular Prada em metal dourado, e alça em corrente que permite uso como clutch ou crossbody. Ideal para quem busca sofisticação discreta e atemporal em qualquer ocasião.',
    features: [
      'Couro Saffiano texturizado',
      'Placa Prada triangular dourada',
      'Alça em corrente metálica',
      'Pode ser usada como clutch',
      'Formato compacto e elegante',
      'Sofisticação discreta'
    ],
    dimensions: '22cm × 14cm × 6cm',
    color: 'Preto',
    material: 'Couro Saffiano',
    images: [bagProduct51, bagProduct52, bagProduct53],
  },
  '6': {
    id: 6,
    name: 'Louis Vuitton Monogram Cardholder',
    price: 'R$12.990,00 (10x de R$1415,00)',
    originalPrice: 'R$ 15.000',
    description: 'Sofisticação em formato compacto: confeccionada em canvas Monogram Eclipse com acabamento em couro preto, reúne elegância e funcionalidade no dia a dia. Possui slots para cartões e bolso central, perfeito para quem busca praticidade sem abrir mão do estilo clássico da maison.',
    features: [
      'Canvas Monogram Eclipse',
      'Detalhes em couro preto',
      'Slots para cartões',
      'Bolso central funcional',
    ],
    dimensions: '11cm × 8cm × 1cm',
    color: 'Preto e cinza',
    material: 'Canvas Monogram e couro',
    images: [bagProduct61, bagProduct62, bagProduct63, bagProduct64],
  },
  '7': {
    id: 7,
    name: 'Saint Laurent Lou Camera Bag',
    price: 'R$7.990,00 (10x de R$870,00)',
    originalPrice: 'R$9.990',
    description: 'Clássica e versátil, feita em couro matelassê com o icônico monograma YSL em metal dourado e tassel lateral que dá movimento e charme extra. Uma bolsa compacta e funcional, perfeita para usar no dia a dia ou em produções mais sofisticadas.',
    features: [
      'Couro matelassê elegante',
      'Monograma YSL dourado',
      'Tassel lateral decorativo',
      'Formato compacto e funcional',
    ],
    dimensions: '23cm × 16cm × 6cm',
    color: 'Preto',
    material: 'Couro matelassê',
    images: [bagProduct71, bagProduct72, bagProduct73, bagProduct74, bagProduct75, bagProduct76],
  },
  '8': {
    id: 8,
    name: 'Hermès em couro preto',
    price: 'R$3.490,00 (10x de R$380,00)',
    originalPrice: 'R$5.990',
    description: 'Sofisticação em cada detalhe: couro texturizado de altíssima qualidade, costura contrastante, fecho em botão de pressão e compartimento removível com zíper. Uma peça prática e atemporal, que carrega a essência da maison em sua forma mais minimalista.',
    features: [
      'Couro texturizado premium',
      'Costura contrastante',
      'Fecho em botão de pressão',
      'Design minimalista',
    ],
    dimensions: '27cm × 20cm × 8cm',
    color: 'Preto',
    material: 'Couro texturizado',
    images: [bagProduct81, bagProduct82, bagProduct83, bagProduct84, bagProduct85, bagProduct86, bagProduct87, bagProduct88, bagProduct89],
  },
  '9': {
    id: 9,
    name: 'Gucci Dionysus Mini',
    price: 'R$3.490,00 (10x de R$380,00)',
    originalPrice: 'R$5.990',
    description: 'Sofisticação em cada detalhe: couro texturizado de altíssima qualidade, costura contrastante, fecho em botão de pressão e compartimento removível com zíper. Uma peça prática e atemporal, que carrega a essência da maison em sua forma mais minimalista.',
    features: [
      'Fivela Dionysus icônica',
      'Cabeça dupla de tigre em metal',
      'Corrente em metal envelhecido',
      'Interior organizado',
    ],
    dimensions: '20cm × 14cm × 5cm',
    color: 'nude/bege sofisticado',
    material: 'couro com acabamento envernizado',
    images: [bagProduct91, bagProduct92, bagProduct93, bagProduct94, bagProduct95, bagProduct96, bagProduct97, bagProduct98, bagProduct99, bagProduct910],
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