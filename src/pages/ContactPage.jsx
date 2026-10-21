import Layout from "../components/Layout";
import WhatsAppButton from "../components/WhatsAppButton";
import ObfuscatedEmail from "../components/ObfuscatedEmail";
import {
  BUSINESS_ADDRESS,
  BUSINESS_GSTIN,
  BUSINESS_PHONE_NUMBERS,
  PRIMARY_PHONE_NUMBER,
} from "../config/business";

export default function ContactPage() {
  return (
    <Layout
      seo={{
        title: "Contact a Bulk Paper Supplier in Tiruppur | APA",
        description:
          "Contact Asmitha Paper Agency for wholesale paper roll prices, sizes, quantities, delivery, and B2B supply across Tiruppur and Tamil Nadu.",
        path: "/contact",
      }}
    >
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">B2B Bulk Orders</p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Contact Our Bulk Paper Roll Supplier
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Contact Asmitha Paper Agency for bulk paper prices, sizes,
            quantities, and delivery options across Tiruppur and other
            districts.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div>
            <h2 className="text-3xl font-bold mb-8">Business Details</h2>

            <div className="space-y-5 text-gray-600 leading-8">
              <p>📞 {BUSINESS_PHONE_NUMBERS}</p>
              <ObfuscatedEmail />
              <p>📍 {BUSINESS_ADDRESS}</p>
              <p>GSTIN: {BUSINESS_GSTIN}</p>
              <p>State: Tamil Nadu (Code 33)</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${PRIMARY_PHONE_NUMBER}`}
                className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Call Now
              </a>
              <WhatsAppButton className="border px-6 py-3 rounded-full hover:bg-gray-100" />
            </div>
          </div>

          </div>
      </section>
    </Layout>
  );
}
