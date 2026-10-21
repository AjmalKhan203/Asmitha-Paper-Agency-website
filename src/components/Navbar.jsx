import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const navClass = ({ isActive }) =>
    `capitalize transition ${isActive ? "text-sky-600 font-semibold" : "hover:text-sky-600"}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 md:px-6 flex justify-between items-center gap-4">
        <Link to="/home" className="flex items-center gap-3 shrink-0" onClick={() => setMenu(false)}>
          <div className="text-3xl font-black leading-none" aria-hidden="true">
            <span className="text-lime-500">A</span>
            <span className="text-sky-500">P</span>
            <span className="text-pink-500">A</span>
          </div>
          <span className="font-bold text-sm md:text-base text-gray-800">
            Asmitha Paper Agency
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Main">
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={navClass}>
              {item.label}
            </NavLink>
          ))}

          <WhatsAppButton className="border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 text-sm" />

          <Link
            to="/quote"
            className="bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-sky-700 font-semibold"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-2xl"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-controls="mobile-nav"
          aria-label={menu ? "Close menu" : "Open menu"}
        >
          {menu ? "✕" : "☰"}
        </button>
      </div>

      {menu && (
        <div id="mobile-nav" className="lg:hidden bg-white px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={navClass}
                onClick={() => setMenu(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <WhatsAppButton
              className="text-left"
              onClick={() => setMenu(false)}
            />

            <Link
              to="/quote"
              onClick={() => setMenu(false)}
              className="bg-sky-600 text-white px-5 py-2 rounded-full text-center font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
