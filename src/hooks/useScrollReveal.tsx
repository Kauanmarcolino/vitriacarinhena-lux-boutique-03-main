import { useEffect, useState } from 'react';

export const useScrollReveal = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-scroll-reveal');
            if (id) {
              setAnimatedElements(prev => new Set([...prev, id]));
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-scroll-reveal]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isAnimated = (id: string) => animatedElements.has(id);

  return { isAnimated };
};