
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StockTracker from "./pages/StockTracker";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import ContactFormSuccess from "./pages/ContactFormSuccess";
import AdminCalendar from "./pages/AdminCalendar";

const queryClient = new QueryClient();

// Component to track route changes
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view on route change
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_location: window.location.href,
    });
  }, [location]);
  
  return null;
};

const AdminLink = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link 
        to="/admin/calendar" 
        className="bg-valoraBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center"
      >
        Admin Calendar
      </Link>
    </div>
  );
};

const AppRoutes = () => (
  <>
    <RouteTracker />
    <AdminLink />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/stock-tracker" element={<StockTracker />} />
      <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
      <Route path="/terminos-servicio" element={<TermsOfService />} />
      <Route path="/politica-cookies" element={<CookiesPolicy />} />
      <Route path="/contacto-enviado" element={<ContactFormSuccess />} />
      <Route path="/admin/calendar" element={<AdminCalendar />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
