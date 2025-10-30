import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import bolsapopup from "@/assets/bolsa-popup.jpg";

const VipPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
  setTimeout(() => setShow(true), 1200);
}, []);


  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-background rounded-2xl shadow-elegant max-w-lg w-[90%] relative overflow-hidden">
        {/* Botão Fechar */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition"
        >
          <X size={22} />
        </button>

        {/* Imagem */}
        <img
          src={bolsapopup}
          alt="Grupo VIP"
          className="w-full h-56 object-cover rounded-t-2xl"
        />

        {/* Conteúdo */}
        <div className="p-6 text-center">
          <h2 className="font-tenor text-3xl text-foreground mb-2">
            💎 Grupo VIP de Descontos
          </h2>
          <p className="text-muted-foreground mb-6">
            Entre no grupo VIP e ganhe{" "}
            <span className="text-primary font-semibold">10% de desconto</span>{" "}
            na sua primeira compra.
          </p>

          <a
            href="https://chat.whatsapp.com/BtZVVpyhCJM7RLjS1zdfns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-gold w-full text-lg py-4">
              Entrar no Grupo VIP
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VipPopup;
