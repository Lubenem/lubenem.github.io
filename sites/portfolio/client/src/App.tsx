import { useEffect } from "react";
import { Router as WouterRouter, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Home from "@/pages/Home";
import RefundPolicy from "@/pages/RefundPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";
import AOS from "aos";
import "aos/dist/aos.css";

const basePath = (() => {
  const raw = import.meta.env.VITE_BASE_PATH ?? "";
  if (!raw || raw === "/") return "";
  const normalized = raw.startsWith("/") ? raw : `/${raw}`;
  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
})();

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 50,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <WouterRouter base={basePath || undefined}>
              <AppRoutes />
            </WouterRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
