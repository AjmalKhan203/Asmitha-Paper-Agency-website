import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function DeliveryPage() {
  return (
    <Layout
      seo={{
        title:
          "Bulk Garment, CAD Plotter & Kraft Paper Delivery in Tamil Nadu | APA",
        description:
          "B2B bulk delivery of garment cutting underlay paper, perforated kraft lay paper, CAD plotter rolls, duplex pattern rolls, and HM poly rolls across Tiruppur and Tamil Nadu.",
        path: "/delivery",
      }}
    >
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">
            B2B Bulk Order Delivery
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Bulk Garment, CAD &amp; Packaging Paper Roll Delivery Across Tamil
            Nadu
          </h1>
          <p className="text-lg text-gray-600 leading-8">
            We arrange B2B bulk delivery of brown and white garment cutting
            underlay paper, perforated kraft lay paper, CAD plotter rolls,
            duplex pattern rolls, and open-width HM poly rolls based on your
            order volume and destination.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 leading-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Tiruppur delivery</h2>
            <p>
              We provide direct bulk dispatch across Tiruppur for garment
              units, cutting floors, CAD/CAM studios, and packaging businesses.
              Delivery timelines depend on product grade availability, roll
              quantity, and your factory location.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Doorstep delivery</h2>
            <p>
              Request doorstep delivery to your manufacturing unit or warehouse
              when you submit an enquiry. We confirm vehicle access, doorstep
              delivery availability, and any applicable transport charges based
              on your full address, roll specifications, and order weight
              before finalizing the order.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Tamil Nadu delivery</h2>
            <p>
              We also supply B2B orders outside Tiruppur district, including
              Coimbatore, Erode, Salem, Karur, Chennai, and other industrial
              hubs. Transport charges are calculated upon enquiry based on
              destination distance, order tonnage, and freight options, and
              are confirmed before dispatch.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Delivery quotation</h2>
            <p>
              To receive an accurate delivery estimate, please share your
              complete delivery address, required paper or poly grade (GSM and
              roll width), and order quantity when requesting a quote.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Need a delivery estimate?</h2>
            <p>
              Send your requirements through the{" "}
              <Link to="/quote" className="font-semibold text-sky-700 hover:underline">
                Request a Quote
              </Link>{" "}
              form or contact{" "}
              <Link to="/contact" className="font-semibold text-sky-700 hover:underline">
                Asmitha Paper Agency
              </Link>{" "}
              directly. Our team will confirm stock availability, dispatch
              timelines, and delivery charges.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
