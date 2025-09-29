import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import vcLogo from '@/assets/vc-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={vcLogo} alt="VC Logo" className="h-8 w-8" />
              <span className="font-tenor text-lg font-semibold text-foreground">
                Vitória Carinhena
              </span>
            </Link>
            <p className="text-body-elegant max-w-sm">
              Bolsas de luxo autênticas, cuidadosamente selecionadas para mulheres que valorizam elegância e sofisticação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-tenor text-lg font-medium text-foreground">
              Links Rápidos
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/catalogo"
                className="text-body-elegant hover:text-primary transition-colors duration-200"
              >
                Catálogo
              </Link>
              <Link
                to="/sobre"
                className="text-body-elegant hover:text-primary transition-colors duration-200"
              >
                Sobre
              </Link>
              <Link
                to="/contato"
                className="text-body-elegant hover:text-primary transition-colors duration-200"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-tenor text-lg font-medium text-foreground">
              Siga-nos
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/viccarinhena"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-all duration-200 hover-lift"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/554498762890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-all duration-200 hover-lift"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Vitória Carinhena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;