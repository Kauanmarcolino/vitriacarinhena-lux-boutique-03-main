import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFavorites } from "@/context/FavoritesContext";
import { X, Share2 } from "lucide-react";

// importa os produtos do mesmo jeito que no Product.tsx
import bagProduct1 from "@/assets/bag-product-1.jpg";
import bagProduct2 from "@/assets/bag-product-2.jpg";
import bagProduct3 from "@/assets/bag-product-3.jpg";
import bagProduct4 from "@/assets/bag-product-4.jpg";
import { products } from "@/data/products";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

const favoriteProducts = favorites
  .map((id) => products[id.toString()])
  .filter(Boolean);

  const handleShareWhatsApp = (productName: string, productId: number) => {
    const url = `https://vitriacarinhena.com/produto/${productId}`;
    const message = `✨ Olha essa bolsa incrível que encontrei na Vitória Carinhena Luxury Handbags!\n\n${productName}\n${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-playfair font-semibold mb-8">
              Meus Favoritos
            </h1>

            {favoriteProducts.length === 0 ? (
              <p className="text-muted-foreground">
                Você ainda não adicionou produtos aos favoritos.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {favoriteProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 flex flex-col gap-3">
                      <h2 className="font-playfair text-xl">{product.name}</h2>
                      <p className="text-primary font-semibold">
                        {product.price}
                      </p>

                      <Button asChild className="btn-gold w-full">
                        <Link to={`/produto/${product.id}`}>Ver Produto</Link>
                      </Button>

                      <div className="flex gap-2">
                        {/* Botão de compartilhar */}
                        <Button
                          onClick={() =>
                            handleShareWhatsApp(product.name, product.id)
                          }
                          variant="outline"
                          className="btn-outline-gold w-1/2 flex items-center justify-center gap-2"
                        >
                          <Share2 className="w-4 h-4" />
                          Compartilhar
                        </Button>

                        {/* Botão de remover */}
                        <Button
                          onClick={() => toggleFavorite(product.id)}
                          variant="outline"
                          className="w-1/2 border-destructive text-destructive hover:bg-destructive hover:text-white transition"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>  
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
