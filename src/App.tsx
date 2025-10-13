import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import { FavoritesProvider } from "./context/FavoritesContext";
import Favorites from "./pages/Favorites";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FavoritesProvider> {/* <-- envolve aqui */}
          <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/catalogo" element={<Catalog />} />
  <Route path="/sobre" element={<About />} />
  <Route path="/video" element={<Video />} />
  <Route path="/contato" element={<Contact />} />
  <Route path="/produto/:id" element={<Product />} />
  <Route path="/favoritos" element={<Favorites />} />
  <Route path="*" element={<NotFound />} />
</Routes>
        </FavoritesProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
