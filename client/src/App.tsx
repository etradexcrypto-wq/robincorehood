import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Approach from "./pages/Approach";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import CookieNotice from "./components/CookieNotice";
import { MobileCTA } from "./components/MobileInvesting";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import ScrollReveal from "./components/ScrollReveal";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/market"} component={Market} />
      <Route path={"/approach"} component={Approach} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/insights"} component={Insights} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Preloader />
          <CookieNotice />
          <MobileCTA />
          <ScrollToTop />
          <ScrollReveal />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
