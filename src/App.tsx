import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home";
import SpareParts from "./pages/SpareParts";
import Cart from "./pages/Cart";
import PanelBeating from "./pages/PanelBeating";
import Diagnostics from "./pages/Diagnostics";
import EngineServices from "./pages/EngineServices";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parts" element={<SpareParts />} />
            <Route path="/parts/:brand" element={<SpareParts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/panel-beating" element={<PanelBeating />} />
            <Route path="/spray-painting" element={<PanelBeating />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/engine-services" element={<EngineServices />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
