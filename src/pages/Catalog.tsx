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
  const [tipoItem, setTipoItem] = useState("Todos");
  const [sortOrder, setSortOrder] = useState("default");

  const handleWhatsAppClick = (productName: string, price: string) => {
    const message = `Olá! Tenho interesse na ${productName} - ${price}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5544998762890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Marcas e tipos disponíveis
 const brands = [
  "Balenciaga",
  "Bottega",
  "Burberry",
  "Celine",
  "Chanel",
  "Dior",
  "Gucci",
  "Hermés",
  "Jacquemus",
  "Loewe",
  "Louis Vuitton",
  "Picotin",
  "Prada",
  "Roman",
  "Saint Laurent",
  "Valentino",
  "YSL",
  "Todos",
];

  const tiposDisponiveis = ["Todos", "Bolsa", "Carteira", "Mala"];

  // 🔍 Filtro principal (busca + marca + tipo)
  let filteredProducts = Object.values(products).filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const brandMatch =
      brandFilter === "Todos" ||
      product.name.toLowerCase().includes(brandFilter.toLowerCase());
    const tipoMatch =
      tipoItem === "Todos" || product.tipoItem === tipoItem;
    return nameMatch && brandMatch && tipoMatch;
  });

  // 🔽 Ordenação por preço
  const parsePrice = (price: string) =>
    parseFloat(price.replace(/[^\d,]/g, "").replace(",", "."));

  if (sortOrder === "menor") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => parsePrice(a.price) - parsePrice(b.price)
    );
  } else if (sortOrder === "maior") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => parsePrice(b.price) - parsePrice(a.price)
    );
  }

  // Separação por condição
  const filteredNovos = filteredProducts.filter((p) => p.condition === "novo");
  const filteredSemiNovos = filteredProducts.filter(
    (p) => p.condition === "seminovo"
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-luxury-title mb-4">Nosso Catálogo</h1>
            <p className="text-luxury-subtitle text-muted-foreground max-w-2xl mx-auto">
              Encontre a bolsa perfeita entre nossas marcas de luxo selecionadas
            </p>
          </div>
        </section>

        {/* 🔍 Barra de busca e filtros */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* Campo de busca */}
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
            />

            {/* Filtro de marcas */}
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="w-full md:w-1/5 border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition text-muted-foreground"
            >
              <option value="Todos">Marcas</option>
              {brands
                .filter((brand) => brand !== "Todos")
                .map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>

            {/* Filtro de tipos */}
            <select
              value={tipoItem}
              onChange={(e) => setTipoItem(e.target.value)}
              className="w-full md:w-1/5 border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition text-muted-foreground"
            >
              <option value="Todos">Tipos</option>
              {tiposDisponiveis
                .filter((tipo) => tipo !== "Todos")
                .map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
            </select>

            {/* Filtro de ordenação */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full md:w-1/5 border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition text-muted-foreground"
            >
              <option value="default">Ordenar por</option>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </div>
        </section>

        {/* Produtos Novos */}
        <section id="produtos-novos" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-tenor text-4xl md:text-5xl text-foreground mb-10">
              Produtos novos
            </h2>

            {filteredNovos.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Nenhum produto encontrado.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredNovos.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 2}>
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
                                handleWhatsAppClick(product.name, product.price)
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

        {/* Produtos Semi-Novos */}
        <section id="produtos-seminovos" className="py-16 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-tenor text-4xl md:text-5xl text-foreground mb-10">
              Second Hand
            </h2>

            {filteredSemiNovos.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Nenhum produto encontrado.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredSemiNovos.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 20}>
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
                                handleWhatsAppClick(product.name, product.price)
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
