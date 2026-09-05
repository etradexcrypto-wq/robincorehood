import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollReveal() {
  const [location] = useLocation();
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("main section:not(.hero-section), main article"));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          node.classList.remove("scroll-reveal-ready");
          node.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(node);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -35px" });
      nodes.forEach((node, index) => {
        if (node.classList.contains("animate__animated")) return;
        node.classList.add("scroll-reveal-ready");
        node.style.setProperty("--animate-delay", `${Math.min(index % 4, 3) * 70}ms`);
        node.style.setProperty("--animate-duration", "650ms");
        observer.observe(node);
      });
      (window as Window & { __revsimplexRevealObserver?: IntersectionObserver }).__revsimplexRevealObserver = observer;
    });
    return () => {
      window.cancelAnimationFrame(frame);
      const target = window as Window & { __revsimplexRevealObserver?: IntersectionObserver };
      target.__revsimplexRevealObserver?.disconnect();
      delete target.__revsimplexRevealObserver;
    };
  }, [location]);
  return null;
}
