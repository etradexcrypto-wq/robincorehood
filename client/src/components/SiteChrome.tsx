import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import GoogleTranslate from "@/components/GoogleTranslate";
import HeaderLoader from "@/components/HeaderLoader";

const navItems = [
  ["Home", "/"],
  ["Market", "/market"],
  ["Approach", "/approach"],
  ["Insights", "/insights"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-pill">
        <Link href="/" className="brand" aria-label="Revsimplex home">
          <span className="leaf-mark" aria-hidden="true"><svg viewBox="0 0 28 28"><path d="M24 4C13 4 5 8 4 21c7 1 14-2 17-8 2-4 2-7 3-9Z" /><path d="M4 21c5-5 10-8 16-11" /></svg></span>
          <span>Revsimplex</span>
        </Link>
        <HeaderLoader />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <GoogleTranslate />
          <a className="header-login" href="https://app.revsimplex.com">Log in</a>
          <a className="button button-dark header-cta" href="https://app.revsimplex.com">Get started <ArrowUpRight size={15} /></a>
        </div>
        <div className="mobile-translator"><GoogleTranslate /></div>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {open && <div className="mobile-nav">
        {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <a href="https://app.revsimplex.com">Log in</a>
        <a className="button button-dark" href="https://app.revsimplex.com">Get started <ArrowUpRight size={15} /></a>
      </div>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <Link href="/" className="brand footer-brand"><span className="leaf-mark" aria-hidden="true"><svg viewBox="0 0 28 28"><path d="M24 4C13 4 5 8 4 21c7 1 14-2 17-8 2-4 3-7 3-9Z" /><path d="M4 21c5-5 10-8 16-11" /></svg></span><span>Revsimplex</span></Link>
      <div className="footer-cta"><p>Make your next move<br /><em>deliberate.</em></p><a className="button button-sand" href="https://app.revsimplex.com">Open your account <ArrowUpRight size={16} /></a></div>
    </div>
    <div className="footer-columns"><div><small>Explore</small><Link href="/market">Markets</Link><Link href="/approach">Our approach</Link><Link href="/about">About Revsimplex</Link></div><div><small>Resources</small><Link href="/market">Stock research</Link><Link href="/approach">Investment education</Link><a href="mailto:support@revsimplex.com">Support</a></div><div><small>Follow along</small><div className="footer-socials"><a href="https://x.com" aria-label="X">𝕏</a><a href="https://tiktok.com" aria-label="TikTok">♪</a><a href="https://facebook.com" aria-label="Facebook">f</a></div></div></div>
<p className="footer-disclaimer">
  <strong>Investment Risk:</strong> Investing involves risk, including the possible loss of principal. Investment values may rise or fall, and past performance does not guarantee future results. Market information is provided for educational and informational purposes only and should not be considered financial, investment, tax, or legal advice.
</p>

<p className="footer-disclaimer">
  <strong>Risk Disclosure:</strong> All investment decisions involve risk and are made at your own discretion. No investment strategy or return is guaranteed, and you should carefully consider your financial circumstances and risk tolerance before investing.
</p>

<p className="footer-disclaimer">
  <strong>Cookie Policy:</strong> This website may use cookies and similar technologies to improve functionality, analyze usage, remember preferences, and enhance your experience. Your continued use of the website is subject to our applicable Cookie Policy.
</p>

<p className="footer-disclaimer">
  <strong>Privacy Policy:</strong> We respect your privacy. Information collected through this website may be processed and used in accordance with our Privacy Policy and applicable requirements. Please review our Privacy Policy for more information.
</p>

<p className="footer-disclaimer">
  <strong>Terms &amp; Conditions:</strong> Your access to and use of this website and its services are subject to our Terms &amp; Conditions. By using the website, you acknowledge and agree to the applicable terms, policies, disclosures, and requirements.
</p>
    <div className="footer-bottom"><span>© 2026 Revsimplex</span><a href="mailto:support@revsimplex.com">support@revsimplex.com</a><span><a href="#privacy">Privacy</a> · <a href="#cookies">Cookies</a> · <a href="#terms">Terms</a></span></div>
  </footer>;
}
