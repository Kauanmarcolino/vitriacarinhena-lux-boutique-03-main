import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Catalog = () => {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("Todos");
  const [category, setCategory] = useState("Bolsas");

  const handleWhatsAppClick = (productName: string, price: string) => {
    const message = `Olá! Tenho interesse na ${productName} - ${price}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5544998762890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Lista de marcas detectadas automaticamente
  const brands = [
    "Todos",
    "Louis Vuitton",
    "Chanel",
    "Burberry",
    "Prada",
    "Hermès",
    "Saint Laurent",
    "Gucci",
  ];

  // Filtro principal
  const filteredProducts = Object.values(products).filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const brandMatch =
      brandFilter === "Todos" ||
      product.name.toLowerCase().includes(brandFilter.toLowerCase());
    return nameMatch && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Header do Catálogo */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-luxury-title mb-4">Nosso Catálogo</h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Encontre a bolsa perfeita entre nossas marcas de luxo selecionadas
            </p>
          </div>
        </section>

        {/* Barra de busca e filtros */}
        <section className="py-10 border-b border-border">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Busca */}
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
            />

            {/* Filtro de marca */}
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="w-full md:w-1/4 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            {/* Aba de categoria (placeholder) */}
            <div className="flex justify-center md:justify-end gap-2">
              <Button
                variant={category === "Bolsas" ? "default" : "outline"}
                className={`px-5 py-2 text-sm ${
                  category === "Bolsas"
                    ? "btn-gold"
                    : "btn-outline-gold text-primary"
                }`}
                onClick={() => setCategory("Bolsas")}
              >
                Bolsas
              </Button>
              <Button
                variant={category === "Carteiras" ? "default" : "outline"}
                className={`px-5 py-2 text-sm ${
                  category === "Carteiras"
                    ? "btn-gold"
                    : "btn-outline-gold text-primary"
                }`}
                onClick={() => setCategory("Carteiras")}
              >
                Carteiras
              </Button>
            </div>
          </div>
        </section>

        {/* Grid de produtos */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Nenhum produto encontrado.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 100}>
                    <Card className="card-luxury hover-lift group h-full">
                      <CardContent className="p-0 flex flex-col h-full">
                        <Link to={`/produto/${product.id}`}>
                          <div className="aspect-square overflow-hidden rounded-t-xl">
                            <img
                              src={product.images[0]}
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
                          <p
  className="text-body-elegant text-xs leading-snug mb-3 mt-3 line-clamp-3 text-muted-foreground"
  title={product.description}
>
  {product.description}
</p>


                          <div className="mt-auto space-y-4">
                            <span className="font-tenor text-2xl font-semibold text-primary block">
                              {product.price.split("(")[0].trim()}
                            </span>

                            <Button
                              onClick={() =>
                                handleWhatsAppClick(
                                  product.name,
                                  product.price
                                )
                              }
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
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
