import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vcLogo from '@/assets/vc-logo.png';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { favorites, toggleFavorite } = useFavorites();

  const isHome = location.pathname === "/";

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Importados', href: '/imports' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Vídeo', href: '/video' },
    { name: 'Contato', href: '/contato' },

  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔄 Reutilizável nos dois lugares
  const renderFavorites = () => (
    favorites.length === 0 ? (
      <p className="text-muted-foreground mt-4">
        Nenhum produto favoritado ainda.
      </p>
    ) : (
      <div className="mt-4 space-y-4">
        {favorites.map((id) => {
          const product = products[id.toString()];
          if (!product) return null;
          return (
            <div key={product.id} className="flex items-center justify-between border rounded-lg p-2 hover:shadow-md transition">
              <Link to={`/produto/${product.id}`} className="flex items-center space-x-4 flex-1">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <span className="font-semibold text-primary text-sm block">
                    {product.price.split("(")[0].trim()}
                  </span>
                  {product.price.includes("(") && (
                    <span className="text-xs text-green-600">
                      {product.price.match(/\((.*?)\)/)?.[1]}
                    </span>
                  )}
                </div>
              </Link>
              <button
                onClick={() => toggleFavorite(product.id)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                Remover
              </button>
            </div>
          );
        })}
      </div>
    )
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        ${isHome ? 'animate-crazy-header' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={vcLogo} alt="VC Logo" className="h-10 w-10" />
            <span className="font-tenor text-xl text-black">
              Vitória Carinhena
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-inter text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-primary'
                    : scrolled
                      ? 'text-black hover:text-gray-700'
                      : 'text-black hover:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Favoritos Desktop */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative p-2 hover:text-primary transition-colors">
                  <Heart className="h-6 w-6" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Meus Favoritos</SheetTitle>
                </SheetHeader>
                {renderFavorites()}
              </SheetContent>
            </Sheet>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-5 w-5 ${scrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`h-5 w-5 ${scrolled ? 'text-black' : 'text-black'}`} />
            )}

            {/* 🔴 bolinha de notificação no botão de menu */}
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-secondary'
                      : 'text-gray-700 hover:text-black hover:bg-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Favoritos Mobile */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors relative">
                    <Heart className="h-5 w-5 mr-2" />
                    Favoritos
                    {favorites.length > 0 && (
                      <span className="absolute top-1 right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {favorites.length}
                      </span>
                    )}
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[350px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Meus Favoritos</SheetTitle>
                  </SheetHeader>
                  {renderFavorites()}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
