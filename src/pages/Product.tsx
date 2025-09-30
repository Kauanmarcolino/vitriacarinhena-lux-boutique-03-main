import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from "@/data/products";
import { useFavorites } from "@/context/FavoritesContext";

const Product = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(product.id);

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
    const whatsappUrl = `https://wa.me/554498762890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Confira este produto incrível: ${product.name} - ${product.price}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Compartilhado com sucesso!");
      } catch (err) {
        console.log("Compartilhamento cancelado:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copiado para a área de transferência!");
      } catch (err) {
        alert("Não foi possível compartilhar ou copiar o link.");
      }
    }
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
                  
                  <div className="flex flex-col mb-6">
  <span className="font-playfair text-3xl font-bold text-primary">
    {product.price.split("(")[0].trim()}
  </span>
  {product.price.includes("(") && (
    <span className="text-sm text-green-600 mt-1">
      {product.price.match(/\((.*?)\)/)?.[1]}
    </span>
  )}
  {product.originalPrice && (
  <span className="text-xl text-stone-600 line-through">
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
                    <Button
  variant="outline"
  className={`flex-1 btn-outline-gold ${
    favorited ? "bg-primary/10 border-primary" : ""
  }`}
  onClick={() => toggleFavorite(product.id)}
>
  <Heart
    className={`mr-2 h-4 w-4 ${
      favorited ? "fill-primary text-primary" : ""
    }`}
  />
  {favorited ? "Favoritado" : "Favoritar"}
</Button>
    
                    <Button 
                      variant="outline" 
                      className="flex-1 btn-outline-gold"
                      onClick={handleShare}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
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