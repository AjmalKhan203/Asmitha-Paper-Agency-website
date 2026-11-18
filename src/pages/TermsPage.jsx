import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function TermsPage() {
  return (
    <Layout
      seo={{
        title:
          "B2B Bulk Paper & Poly Roll Order Terms | Asmitha Paper Agency Tiruppur",
        description:
          "Review B2B order, specification, pricing, and delivery terms for bulk garment cutting underlay paper, CAD plotter rolls, duplex pattern rolls, and HM poly rolls from Asmitha Paper Agency.",
        path: "/terms",
      }}
    >
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">Customer Information</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            B2B Paper &amp; Poly Roll Order Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 leading-8">
            These terms explain how quotes, bulk orders, specifications, and
            deliveries for garment, CAD/CAM, and packaging paper and poly rolls
            are handled by Asmitha Paper Agency.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 leading-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Quotes and orders
            </h2>
            <p>
              Product availability, GSM grades, roll widths, bulk pricing, and
              delivery timelines are confirmed for each enquiry. A quote is not
              a binding order until specifications and quantities are accepted
              and confirmed by Asmitha Paper Agency.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Product specifications
            </h2>
            <p>
              Please provide accurate product type (such as garment cutting
              underlay, perforated kraft lay, CAD plotter, duplex pattern
              board, or HM poly roll), roll width (24&quot; to 96&quot;), GSM
              (60 to 400 GSM), order quantity, and delivery address. Custom
              widths, GSM grades, or machine-specific core requirements may
              affect final pricing and dispatch lead times.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Delivery</h2>
            <p>
              Local Tiruppur dispatch and statewide Tamil Nadu lorry/freight
              arrangements and charges are confirmed before finalizing an
              order. See our{" "}
              <Link
                to="/delivery"
                className="font-semibold text-sky-700 hover:underline"
              >
                Delivery Information
              </Link>{" "}
              page for full details.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Changes and cancellations
            </h2>
            <p>
              Order modifications or cancellations must be requested as soon as
              possible. Acceptance depends on current order status and whether
              slitting, conversion, or vehicle dispatch has already started.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact</h2>
            <p>
              For questions regarding an active bulk order or these terms,
              reach out to Asmitha Paper Agency using the phone number or
              details listed on our{" "}
              <Link
                to="/contact"
                className="font-semibold text-sky-700 hover:underline"
              >
                Contact
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
