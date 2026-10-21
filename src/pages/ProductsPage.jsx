import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsPage() {
  return (
    <Layout
      seo={{
        title: "Bulk Paper Rolls for B2B Buyers | Asmitha Paper Agency",
        description:
          "Explore brown kraft paper, perforated paper rolls, and plain catering table rolls for wholesale B2B supply across Tiruppur and Tamil Nadu.",
        path: "/products",
        products: true,
      }}
    >
      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">
            B2B bulk paper supply in Tiruppur
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Bulk Paper Rolls for B2B Supply
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Choose from brown kraft paper, perforated pattern and packaging
            paper, and plain catering table roll. We handle wholesale
            B2B orders and delivery across Tiruppur and Tamil Nadu.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-sky-600 rounded-3xl text-white p-10 md:p-14 text-center animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">Need Bulk Paper Supply?</h2>

            <p className="text-lg opacity-90 mb-6">
              Contact Asmitha Paper Agency for pricing, sizes, quantities, and
              delivery options for your location.
            </p>

            <Link
              to="/quote"
              className="inline-block bg-white text-sky-700 px-6 py-3 rounded-full font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
