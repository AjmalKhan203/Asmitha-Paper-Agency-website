import Navbar from "./Navbar";
import Footer from "./Footer";
import Seo from "./Seo";

export default function Layout({ children, seo }) {
  return (
    <div
      className="font-sans bg-white text-gray-800 min-h-screen flex flex-col"
      data-prerender-root="true"
    >
      <Seo {...seo} />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
