import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoginRegister from "./pages/LoginRegister";

const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/admin";

  return (
    <>
      <ScrollToTop />
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<LoginRegister />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <WhatsAppButton />}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
