import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    document.documentElement.classList.add("is-preloading");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("is-preloading");
    }, reducedMotion ? 650 : 2750);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("is-preloading");
    };
  }, []);
  if (!visible) return null;
  return <div className="organic-preloader" role="status" aria-label="Opening copyspheretx">
    <div className="organic-blob" aria-hidden="true" />
    <div className="organic-brand"><span className="organic-brand-leaf"><svg viewBox="0 0 28 28"><path d="M24 4C13 4 5 8 4 21c7 1 14-2 17-8 2-4 2-7 3-9Z" /><path d="M4 21c5-5 10-8 16-11" /></svg></span><strong>copyspheretx</strong></div>
  </div>;
}
