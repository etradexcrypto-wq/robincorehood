import { ArrowDownRight, ArrowUpRight, ChevronRight, Leaf, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import MarketOverview from "@/components/MarketOverview";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ResearchSection from "@/components/ResearchSection";
import { MobileInvesting } from "@/components/MobileInvesting";
import TrustSection from "@/components/TrustSection";
import AssetVisuals from "@/components/AssetVisuals";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroNetwork from "@/components/HeroNetwork";
import HomeCollage from "@/components/HomeCollage";
import PointOfViewShowcase from "@/components/PointOfViewShowcase";
import CryptoFutureSection from "@/components/CryptoFutureSection";
import MarketTicker from "@/components/MarketTicker";
import RotatingHeadline from "@/components/RotatingHeadline";
import GrowthFilm from "@/components/GrowthFilm";

const hero = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/qkTCrLhqjqKZIZkN.jpg";
const growth = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/hiTxoOJcKCQWNaDA.jpg";
const advisor = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/hSubYPbzXkbrUsxU.png";

export default function Home() {
  return <div className="site-shell"><SiteHeader />
    <main>
      <section className="hero-section">
        <div className="hero-image" style={{ backgroundImage: `url(${hero})` }} />
        <HeroNetwork />
        <div className="hero-overlay" />
        <div className="hero-content container" style={{ marginBottom: "11px", marginLeft: "-8px", marginRight: "12px", marginTop: "-4px", opacity: 1, paddingBottom: "177px", paddingLeft: "36px", paddingRight: "45px" }}>
          <p className="eyebrow light"><span className="eyebrow-dot" /> Wealth, made intentional.</p>
          <h1>Invest with<br /><RotatingHeadline /></h1>
          <p className="hero-copy">Explore stocks, research markets, and build a diversified portfolio with tools designed to make long-term investing feel clear.</p>
          <div className="hero-actions"><a className="button button-sand" href="https://app.copyspheretx.com">Start investing <ArrowUpRight size={16} /></a><Link className="button button-ghost" href="/market">Explore markets <ArrowDownRight size={16} /></Link></div>
          <img className="hero-bana" src="https://fxpro-cdn.cloud/repo/website/assets/img/components/ui-platforms/platforms-image-block@1376.webp" alt="copyspheretx digital investing preview" />
        </div>
        <img className="hero-bana-desktop" src="https://fxpro-cdn.cloud/repo/website/assets/img/components/ui-platforms/platforms-image-block@1376.webp" alt="copyspheretx portfolio interface" />
        <div className="hero-note"><span>01</span><span>Long-term thinking<br />for real life.</span></div>
      </section>
      <div className="announcement"><div className="announcement-track"><span>Invest with clarity</span><i>✳</i><span>Designed for the long term</span><i>✳</i><span>Human guidance, always</span><i>✳</i><span>Invest with clarity</span><i>✳</i></div></div>
      <GrowthFilm />
      <MarketTicker />

      <section className="intro-section container section-pad animate__animated animate__fadeInLeft">
        <div className="section-kicker"><span>01 / The new standard</span><span className="line" /></div>
        <div className="intro-grid"><div><h2>More than a portfolio.<br /><em>A point of view.</em></h2></div><div className="intro-body"><p>Markets move quickly. Your goals deserve more patience. copyspheretx brings disciplined research, transparent tools, and a human perspective to stock investing.</p><Link className="text-link" href="/approach">Explore our philosophy <ChevronRight size={16} /></Link></div></div>
        <div className="metric-row"><div><strong><AnimatedCounter value={98.4} suffix="%" decimals={1} /></strong><span>Portfolio transparency</span></div><div><strong><AnimatedCounter value={24} suffix="/7" /></strong><span>Account visibility</span></div><div><strong><AnimatedCounter value={1} suffix=":1" /></strong><span>Human support</span></div></div><div className="point-of-view-row"><p>See how a calmer, clearer investment philosophy becomes a portfolio you can live with.</p><Link className="button button-dark" href="/approach">Our point of view <ChevronRight size={16} /></Link></div>
      </section>

      <PointOfViewShowcase />
      <MarketOverview />

      <section className="feature-section section-pad"><div className="container feature-grid"><div className="feature-copy"><p className="eyebrow"><span className="eyebrow-dot" /> The copyspheretx difference</p><h2>Grow with a plan<br /><em>you can believe in.</em></h2><p>We pair globally diversified portfolios with a calm, human perspective. No noise. No mystery. Just a clear system built around your ambitions.</p><div className="feature-list"><div><ShieldCheck size={20} /><span><strong>Built to last</strong> Strategies designed for decades, not headlines.</span></div><div><LineChart size={20} /><span><strong>Clear by default</strong> See what you own, why you own it, and what it costs.</span></div><div><Leaf size={20} /><span><strong>Considered impact</strong> Your money can compound with purpose.</span></div></div><Link className="text-link" href="/market">View our investment universe <ChevronRight size={16} /></Link></div><div className="feature-visual"><img src={growth} alt="New growth emerging from a forest floor" /><div className="visual-card"><span>Growth mindset</span><strong>Patient capital<br />creates options.</strong><small>01 — copyspheretx Research</small></div></div></div></section>

      <CryptoFutureSection />
      <PortfolioShowcase />
      <ResearchSection />
      <AssetVisuals />
      <HomeCollage />
      <MobileInvesting />
      <section className="people-section section-pad container"><div className="people-copy"><div className="section-kicker"><span>05 / The human layer</span><span className="line" /></div><h2>Smart money.<br /><em>Human touch.</em></h2><p>Your life is not a spreadsheet. Our team is here to translate the markets, pressure-test your plan, and make the next step feel simple.</p><Link className="text-link" href="/about">Meet the people behind the plan <ChevronRight size={16} /></Link></div><div className="people-portrait"><img src={advisor} alt="copyspheretx investment advisor" /><div className="portrait-label"><span>Olivia Mensah</span><small>Wealth strategist</small></div></div></section>
      <TrustSection />

      <section className="dark-cta section-pad"><div className="container cta-inner"><Sparkles size={24} /><h2>Build your<br /><em>next position.</em></h2><p>Explore markets, start investing, and put a clearer plan to work.</p><div className="hero-actions"><a className="button button-sand" href="https://app.copyspheretx.com">Start investing <ArrowUpRight size={16} /></a><a className="button button-ghost" href="https://app.copyspheretx.com">Sign up <ArrowUpRight size={16} /></a></div><div className="cta-ornament">R<br />S</div></div></section>
    </main><SiteFooter />
  </div>;
}
