import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const questions = [
  [
    "What products do you sell?",
    "We supply bulk brown and white garment cutting underlay paper, perforated kraft lay paper, 60 GSM CAD plotter rolls, 220–400 GSM CAD/CAM duplex pattern rolls, and 92\"–96\" auto-cutter HM open-width poly rolls.",
  ],
  [
    "What type of business is Asmitha Paper Agency?",
    "We are a Tiruppur-based B2B bulk paper and poly roll supplier. We focus strictly on supplying industrial paper and poly rolls to garment factories, export houses, CAD/CAM pattern studios, and packaging units—we do not provide tailoring, garment manufacturing, or retail services.",
  ],
  [
    "Where do you deliver?",
    "We provide direct bulk delivery across Tiruppur and dispatch B2B orders to Coimbatore, Erode, Salem, Karur, Chennai, and other industrial hubs across Tamil Nadu.",
  ],
  [
    "Are there delivery charges outside Tiruppur?",
    "Yes. Transport and freight charges apply for destinations outside Tiruppur district based on order tonnage and distance, and are confirmed clearly with your quote before dispatch.",
  ],
  [
    "How do I request a quote?",
    <>
      Open{" "}
      <Link to="/quote" className="font-semibold text-sky-700 hover:underline">
        Request a Quote
      </Link>
      , enter your company details along with your required product grade, roll
      width, GSM, and quantity, review the enquiry, and send it directly via
      WhatsApp.
    </>,
  ],
  [
    "Can I ask for a custom size or quantity?",
    "Yes. Standard roll widths range from 24\" to 96\" and paper weights range from 60 GSM up to 400 GSM. Add your required width, GSM grade, order quantity, or specific auto-cutter/plotter machine requirements in the quote form.",
  ],
  [
    "How will I receive the final price?",
    "Our Tiruppur team reviews your specifications and confirms bulk pricing, stock availability, dispatch timelines, and any applicable delivery charges via WhatsApp or phone.",
  ],
];

export default function HelpPage() {
  return (
    <Layout
      seo={{
        title:
          "FAQ: Bulk Garment, CAD Plotter & Kraft Paper Rolls | APA Tiruppur",
        description:
          "Answers to common B2B questions about bulk garment cutting underlay paper, perforated kraft lay paper, 60–400 GSM CAD/CAM plotter & pattern rolls, HM poly rolls, quotes, and Tamil Nadu delivery.",
        path: "/help",
      }}
    >
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">
            B2B Order Help and Support
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 leading-8">
            Find quick answers about our B2B bulk garment, CAD/CAM, and
            packaging paper rolls, GSM specifications, quotes, and Tamil Nadu
            delivery service.
          </p>
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
