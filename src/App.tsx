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
import AdminDashboard from "./pages/AdminDashboard";
import AdminHeader from "./components/AdminHeader";
import ServicesList from "./pages/ServicesList";
import ServicesDetailsList from "./pages/ServicesDetailsList";
import { useEffect } from "react";
import ServicesDetails from "./pages/ServicesDetails";


const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation();





  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {/* Admin Header */}
      {isAdminRoute}

      {/* Default Header */}
      {!isAdminRoute && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/details" element={<ServicesDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminHeader />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="services" element={<ServicesList />} />
            <Route path="services-details" element={<ServicesDetailsList />} />
            {/* other nested admin routes */}
        </Route>

        </Routes>
      </main>

      {/* WhatsApp button and footer only on non-admin pages */}
      {!isAdminRoute && <WhatsAppButton />}
      {!isAdminRoute && <Footer />}
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
