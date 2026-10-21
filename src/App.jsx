import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import DeliveryPage from "./pages/DeliveryPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import HelpPage from "./pages/HelpPage";
import IntroPage from "./pages/IntroPage";
import ProductDetailPage from "./pages/ProductDetailPage";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/quote" element={<QuotePage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
