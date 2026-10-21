import Layout from "../components/Layout";

export default function PrivacyPage() {
  return (
    <Layout
      seo={{
        title: "Privacy Policy | Asmitha Paper Agency",
        description:
          "Read how Asmitha Paper Agency handles contact details and B2B paper quote information shared through this website and WhatsApp.",
        path: "/privacy",
      }}
    >
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">Your Information</p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Privacy Policy for B2B Enquiries
          </h1>
          <p className="text-lg text-gray-600 leading-8">This page explains how Asmitha Paper Agency uses information shared through this website.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 leading-8">
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Information we receive</h2><p>We may receive your name, company name, phone number, email address, location, delivery location, and product requirements when you contact us or request a quote.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">How we use it</h2><p>We use this information to answer enquiries, prepare quotations, confirm product requirements, arrange delivery, and communicate about your order.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">WhatsApp enquiries</h2><p>When you submit a quote, the website prepares a WhatsApp message for you to review. WhatsApp handles the message according to its own privacy policy. You choose whether to send it.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Sharing information</h2><p>We do not sell your personal information. We share details only when needed to respond to your request, process an order, or arrange delivery.</p></div>
          <div><h2 className="text-2xl font-bold text-gray-800 mb-3">Questions</h2><p>Contact us if you want to ask about the information you have shared with Asmitha Paper Agency.</p></div>
        </div>
      </section>
    </Layout>
  );
}
