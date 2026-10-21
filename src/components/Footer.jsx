import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-center md:text-left">
          © 2026 Asmitha Paper Agency. All Rights Reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/home" className="hover:text-sky-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-sky-300">
            Products
          </Link>
          <Link to="/about" className="hover:text-sky-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-sky-300">
            Contact
          </Link>
          <Link to="/quote" className="hover:text-sky-300">
            Request a Quote
          </Link>
          <Link to="/delivery" className="hover:text-sky-300">
            Delivery Information
          </Link>
          <Link to="/help" className="hover:text-sky-300">
            Help / FAQ
          </Link>
          <Link to="/terms" className="hover:text-sky-300">
            Terms and Conditions
          </Link>
          <Link to="/privacy" className="hover:text-sky-300">
            Privacy Policy
          </Link>
          <WhatsAppButton className="hover:text-sky-300" />
        </div>
      </div>
    </footer>
  );
}
