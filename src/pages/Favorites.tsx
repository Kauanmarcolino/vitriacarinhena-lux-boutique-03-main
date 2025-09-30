import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFavorites } from "@/context/FavoritesContext";

// importa os produtos do mesmo jeito que no Product.tsx
import bagProduct1 from "@/assets/bag-product-1.jpg";
import bagProduct2 from "@/assets/bag-product-2.jpg";
import bagProduct3 from "@/assets/bag-product-3.jpg";
import bagProduct4 from "@/assets/bag-product-4.jpg";

const products = {
  1: {
    id: 1,
    name: "Tote Elegante Premium",
    price: "R$ 2.890",
    images: [bagProduct1, bagProduct2, bagProduct3],
  },
  2: {
    id: 2,
    name: "Crossbody Luxo",
    price: "R$ 1.690",
    images: [bagProduct2, bagProduct4],
  },
  // adicione os outros produtos do mesmo jeito que você já tem no Product.tsx
};

const Favorites = () => {
  const { favorites } = useFavorites();

  const favoriteProducts = favorites
    .map((id) => products[id as keyof typeof products])
    .filter(Boolean);

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
                    <div className="p-4">
                      <h2 className="font-playfair text-xl mb-2">
                        {product.name}
                      </h2>
                      <p className="text-primary font-semibold mb-4">
                        {product.price}
                      </p>
                      <Button asChild className="btn-gold w-full">
                        <Link to={`/produto/${product.id}`}>Ver Produto</Link>
                      </Button>
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
