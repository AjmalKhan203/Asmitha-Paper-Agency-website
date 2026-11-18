import Layout from "../components/Layout";
import WhatsAppButton from "../components/WhatsAppButton";
import ObfuscatedEmail from "../components/ObfuscatedEmail";
import {
  BUSINESS_ADDRESS,
  BUSINESS_GSTIN,
  BUSINESS_PHONE_NUMBERS,
  BUSINESS_STATE,
  BUSINESS_STATE_CODE,
  PRIMARY_PHONE_NUMBER,
} from "../config/business";

export default function ContactPage() {
  return (
    <Layout
      seo={{
        title:
          "Contact Garment & CAD Paper Roll Supplier in Tiruppur | Asmitha Paper Agency",
        description:
          "Contact Asmitha Paper Agency in Tiruppur for bulk garment cutting underlay paper, perforated kraft lay paper, CAD plotter rolls (60–400 GSM), and HM poly rolls across Tamil Nadu.",
        path: "/contact",
      }}
    >
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">
            B2B Bulk Garment &amp; Packaging Paper Orders
          </p>

          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Contact Our Bulk Garment &amp; CAD Paper Supplier in Tiruppur
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Contact Asmitha Paper Agency for bulk pricing, GSM grades, roll
            widths (24&quot; to 96&quot;), and delivery schedules for garment
            cutting underlay paper, perforated kraft lay paper, CAD/CAM plotter
            &amp; duplex pattern rolls, and open-width HM poly rolls across
            Tiruppur and Tamil Nadu.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div>
            <h2 className="text-3xl font-bold mb-8">Business Details</h2>

            <div className="space-y-5 text-gray-600 leading-8">
              <p>
                <strong>Phone:</strong> {BUSINESS_PHONE_NUMBERS}
              </p>
              <ObfuscatedEmail />
              <p>
                <strong>Address:</strong> {BUSINESS_ADDRESS}
              </p>
              <p>
                <strong>GSTIN:</strong> {BUSINESS_GSTIN}
              </p>
              <p>
                <strong>State:</strong> {BUSINESS_STATE} (Code{" "}
                {BUSINESS_STATE_CODE})
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${PRIMARY_PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
                className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Call Now
              </a>
              <WhatsAppButton className="border px-6 py-3 rounded-full hover:bg-gray-100">
                Chat with APA Manager
              </WhatsAppButton>
            </div>
          </div>

          </div>
      </section>
    </Layout>
  );
}
