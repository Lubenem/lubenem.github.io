import { Router as WouterRouter, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={basePath || undefined}>
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
