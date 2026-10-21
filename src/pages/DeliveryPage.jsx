import Layout from "../components/Layout";

export default function DeliveryPage() {
  return (
    <Layout
      seo={{
        title: "Bulk Paper Roll Delivery in Tamil Nadu | APA",
        description:
          "Learn about Asmitha Paper Agency delivery for B2B paper roll orders across Tiruppur and other Tamil Nadu districts.",
        path: "/delivery",
      }}
    >
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">B2B Bulk Order Delivery</p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Bulk Paper Delivery Across Tamil Nadu</h1>
          <p className="text-lg text-gray-600 leading-8">
            We arrange delivery for B2B bulk orders of brown kraft paper, perforated packaging paper, and plain catering table roll based on your order and destination.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 leading-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Tiruppur delivery</h2>
            <p>We deliver across Tiruppur. Delivery timing depends on product availability, quantity, and the delivery location.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Doorstep delivery</h2>
            <p>Request delivery to your business address when you enquire. We will confirm doorstep delivery availability and any related charges for your full address, order quantity, and transport route before finalizing the order.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Tamil Nadu delivery</h2>
            <p>We also serve customers outside Tiruppur district. Delivery charges are calculated after enquiry based on destination distance, order weight, and available transport options. The delivery cost is confirmed before the order is completed.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Delivery quotation</h2>
            <p>To provide an accurate delivery estimate, please share your complete delivery location, required quantity, and preferred product when requesting a quote.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Need a delivery estimate?</h2>
            <p>Send your requirements through the quote form or contact Asmitha Paper Agency directly. We will confirm product availability and delivery charges with you.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
