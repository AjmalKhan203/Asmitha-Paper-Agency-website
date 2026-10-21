import Layout from "../components/Layout";

const questions = [
  ["What products do you sell?", "We supply brown kraft paper, perforated pattern and packaging paper, and plain catering table roll."],
  ["What type of business is Asmitha Paper Agency?", "We are a Tiruppur-based B2B bulk paper supplier. We sell paper products only; we do not provide tailoring, garment manufacturing, restaurant, or catering services."],
  ["Where do you deliver?", "We deliver across Tiruppur and also serve customers in other districts."],
  ["Are there delivery charges outside Tiruppur?", "Yes. Delivery charges are added for destinations outside Tiruppur district and are confirmed with the quote."],
  ["How do I request a quote?", "Open Request a Quote, enter your customer and product details, review the enquiry, and choose WhatsApp to send it."],
  ["Can I ask for a custom size or quantity?", "Yes. Add the required size, GSM (paper weight), quantity, and any special requirements in the quote form."],
  ["How will I receive the final price?", "We review your requirements and confirm product pricing, availability, delivery timing, and any delivery charges."],
];

export default function HelpPage() {
  return (
    <Layout
      seo={{
        title: "FAQ About Bulk Paper Rolls and Delivery | APA",
        description:
          "Find answers about Asmitha Paper Agency products, GSM, sizes, quantities, B2B quotes, WhatsApp enquiries, and paper roll delivery.",
        path: "/help",
      }}
    >
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">B2B Order Help and Support</p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 leading-8">Find quick answers about our B2B bulk paper products, quotes, and delivery service.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {questions.map(([question, answer]) => (
            <details key={question} className="border border-gray-200 rounded-2xl p-5">
              <summary className="cursor-pointer font-bold text-gray-800">
                <h2 className="inline text-lg">{question}</h2>
              </summary>
              <p className="mt-3 text-gray-600 leading-7">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Layout>
  );
}
