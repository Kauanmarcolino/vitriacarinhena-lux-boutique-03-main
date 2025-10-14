import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 🖼️ Imagens (coloque-as em src/assets/instagram/)
import insta1 from "@/assets/post1.png";
import insta2 from "@/assets/post2.png";
import insta3 from "@/assets/post3.png";
import insta4 from "@/assets/post4.png";
import insta5 from "@/assets/post5.png";
import insta6 from "@/assets/post6.png";

// 📸 Lista de posts
const posts = [
  { src: insta1, link: "https://www.instagram.com/p/DOwffWOj8rr/?img_index=1", alt: "Bolsa Louis Vuitton Monogram" },
  { src: insta2, link: "https://www.instagram.com/p/DOBhR6kjfVU/?img_index=1", alt: "Bolsa Prada Rosa em destaque" },
  { src: insta3, link: "https://www.instagram.com/p/DPXgUGwDfiS/?img_index=2", alt: "Detalhe em couro legítimo" },
  { src: insta4, link: "https://www.instagram.com/p/DOwffWOj8rr/?img_index=2", alt: "Coleção exclusiva Vitória Carinhena" },
  { src: insta5, link: "https://www.instagram.com/p/DO6soM_Erk0/?img_index=1", alt: "Nova coleção de luxo 2025" },
  { src: insta6, link: "https://www.instagram.com/p/DOJUbDdDeBN/?img_index=1", alt: "Destaques da coleção outono" },
];

// Util: divide em pedaços
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const InstagramFeed: React.FC = () => {
  // Desktop: 3 por slide / Mobile: 1 por slide
  const desktopSlides = useMemo(() => chunk(posts, 3), []);
  const mobileSlides = useMemo(() => chunk(posts, 1), []);

  const [deskIdx, setDeskIdx] = useState(0);
  const [mobIdx, setMobIdx] = useState(0);

  const deskTotal = desktopSlides.length;
  const mobTotal = mobileSlides.length;

  const prevDesk = () => setDeskIdx((i) => (i - 1 + deskTotal) % deskTotal);
  const nextDesk = () => setDeskIdx((i) => (i + 1) % deskTotal);

  const prevMob  = () => setMobIdx((i) => (i - 1 + mobTotal) % mobTotal);
  const nextMob  = () => setMobIdx((i) => (i + 1) % mobTotal);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <h2 className="font-tenor text-4xl md:text-5xl font-semibold text-foreground text-center mb-4">
            Do nosso Instagram
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Acompanhe as novidades, lançamentos e bastidores do universo
            <span className="font-semibold text-primary"> Vitória Carinhena</span>.
          </p>
        </ScrollReveal>

        {/* === DESKTOP CAROUSEL (md+) === */}
        <div className="relative hidden md:flex overflow-hidden justify-center">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${deskIdx * 100}%)`,
              width: `${desktopSlides.length * 100}%`,
            }}
          >
            {desktopSlides.map((slide, sIdx) => (
              <div key={sIdx} className="flex-shrink-0 w-full flex justify-center">
                <div className="grid grid-cols-3 gap-6 max-w-5xl w-full justify-items-center">
                  {slide.map((post, idx) => (
                    <a
                      key={idx}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-xl relative w-full"
                    >
                      <img
                        src={post.src}
                        alt={post.alt}
                        className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 opacity-90"
                        >
                          <path d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9A5.25 5.25 0 0 1 16.5 21.75h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25Zm9 2.25h-9A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-4.5 3.75a4.125 4.125 0 1 1 0 8.25 4.125 4.125 0 0 1 0-8.25Zm0 1.5a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm4.875-.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Setas (desktop) */}
          <button
            onClick={prevDesk}
            aria-label="Anterior"
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow hover:scale-105 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextDesk}
            aria-label="Próximo"
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow hover:scale-105 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

       {/* Dots desktop (pill compacto) */}
<div className="hidden md:flex items-center justify-center gap-1 mt-6">
  {desktopSlides.map((_, i) => {
    const active = deskIdx === i;
    return (
      <button
        key={`desk-dot-${i}`}
        type="button"
        onClick={() => setDeskIdx(i)}
        aria-label={`Ir ao slide ${i + 1}`}
        className="relative h-2.5 w-5"
      >
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      h-2 rounded-full transition-all
                      ${active ? "w-5 bg-primary" : "w-2 bg-foreground/20"}`}
        />
      </button>
    );
  })}
</div>

        {/* === MOBILE CAROUSEL (<md) === */}
<div className="relative md:hidden overflow-hidden mt-10">
  <div
    className="flex transition-transform duration-500 ease-out"
    style={{
      // move exatamente 1 slide por vez
      transform: `translateX(-${(mobIdx * 100) / mobTotal}%)`,
      // trilho = soma das larguras de todos os slides
      width: `${mobTotal * 100}%`,
    }}
  >
    {mobileSlides.map((slide, sIdx) => (
      // cada slide ocupa 1/mobTotal do TRILHO
      <div
        key={sIdx}
        className="flex-shrink-0 flex justify-center"
        style={{ width: `${100 / mobTotal}%` }}
      >
        {slide.map((post, idx) => (
          <a
  key={idx}
  href={post.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group block w-full overflow-hidden rounded-xl border border-border relative"
>
  <img
    src={post.src}
    alt={post.alt}
    className="block w-full aspect-square object-cover"
  />
</a>
        ))}
      </div>
    ))}
  </div>

  {/* setas mobile sobre a imagem (sem mudar nada nelas) */}
  <button
    type="button"
    onClick={prevMob}
    aria-label="Anterior"
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20
               bg-background/80 backdrop-blur border border-border rounded-full p-2
               shadow hover:scale-105 transition"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>
  <button
    type="button"
    onClick={nextMob}
    aria-label="Próximo"
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20
               bg-background/80 backdrop-blur border border-border rounded-full p-2
               shadow hover:scale-105 transition"
  >
    <ChevronRight className="w-5 h-5" />
  </button>
</div>

{/* Dots MOBILE (pill compacto, fora do overflow) */}
<div className="md:hidden flex w-full items-center justify-center gap-1 mt-6">
  {mobileSlides.map((_, i) => {
    const active = mobIdx === i;
    return (
      <button
        key={`mob-dot-${i}`}
        type="button"
        onClick={() => setMobIdx(i)}
        aria-label={`Ir ao slide ${i + 1}`}
        className="relative h-2.5 w-5"
      >
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      h-2 rounded-full transition-all
                      ${active ? "w-5 bg-primary" : "w-2 bg-foreground/20"}`}
        />
      </button>
    );
  })}
</div>


        <div className="text-center mt-12">
          <Button asChild className="btn-gold px-8 py-3 text-lg">
            <a
              href="https://instagram.com/viccarinhena"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver nosso Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;