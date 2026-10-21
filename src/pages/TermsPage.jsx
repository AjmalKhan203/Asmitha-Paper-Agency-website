import Layout from "../components/Layout";

export default function TermsPage() {
  return (
    <Layout
      seo={{
        title: "Terms and Conditions | Asmitha Paper Agency",
        description:
          "Review the terms for quotes, B2B paper roll orders, product specifications, payments, delivery, changes, and cancellations.",
        path: "/terms",
      }}
    >
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">Customer Information</p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            B2B Paper Order Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 leading-8">These terms explain how quotes, orders, payments, and deliveries are handled by Asmitha Paper Agency.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 leading-8">
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Quotes and orders</h2><p>Product availability, specifications, prices, and delivery estimates are confirmed for each enquiry. A quote is not an order until it is accepted and confirmed by Asmitha Paper Agency.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Product specifications</h2><p>Please provide accurate product, size, GSM (paper weight), quantity, and delivery details. Custom requirements may affect the final price and delivery time.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Delivery</h2><p>Delivery arrangements and charges are confirmed before completion of an order. See the Delivery Information page for more details.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Changes and cancellations</h2><p>Changes or cancellations should be requested as soon as possible. Acceptance depends on the order status and whether processing or dispatch has started.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Contact</h2><p>For questions about an order or these terms, contact Asmitha Paper Agency using the phone number or email shown on our Contact page.</p></div>
        </div>
      </section>
    </Layout>
  );
}
