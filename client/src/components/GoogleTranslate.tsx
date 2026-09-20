import { useEffect, useState } from "react";
import { GB, ES, FR, DE, PT } from "country-flag-icons/react/3x2";

declare global { interface Window { googleTranslateElementInit?: () => void; } }
const languages = [
  { label: "English", code: "en", Flag: GB },
  { label: "Español", code: "es", Flag: ES },
  { label: "Français", code: "fr", Flag: FR },
  { label: "Deutsch", code: "de", Flag: DE },
  { label: "Português", code: "pt", Flag: PT },
] as const;
export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  useEffect(() => {
    window.googleTranslateElementInit = () => { const TranslateElement = (window as any).google?.translate?.TranslateElement; if (TranslateElement) new TranslateElement({ pageLanguage: "en", includedLanguages: "en,es,fr,de,pt", autoDisplay: false }, "google_translate_element"); };
    if (!document.querySelector("script[data-robincorehood-translate]")) { const script = document.createElement("script"); script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; script.async = true; script.dataset.robincorehoodTranslate = "true"; document.body.appendChild(script); }
    return () => { delete window.googleTranslateElementInit; };
  }, []);
  const choose = (language: string) => { const select = document.querySelector<HTMLSelectElement>(".goog-te-combo"); if (select) { select.value = language; select.dispatchEvent(new Event("change")); } setCurrent(language); setOpen(false); };
  const ActiveFlag = languages.find((item) => item.code === current)?.Flag ?? GB;
  return <div className="translate-control"><button type="button" className="translate-trigger" aria-label="Choose language" aria-expanded={open} onClick={() => setOpen(!open)}><ActiveFlag /><span>{current.toUpperCase()}</span><i>⌄</i></button>{open && <div className="translate-menu">{languages.map(({ label, code, Flag }) => <button type="button" key={code} onClick={() => choose(code)}><Flag /><span>{label}</span></button>)}</div>}<div id="google_translate_element" /></div>;
}
