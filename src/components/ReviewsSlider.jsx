import { useEffect, useState } from "react";

const REVIEWS = [
  {
    quote:
      "We receive the paper in the sizes we need for our apparel production. The team is responsive and delivery coordination is clear.",
    name: "Priya S",
    business: "Textile Production Manager",
    location: "Erode, Tamil Nadu",
  },
  {
    quote:
      "great quality paper and timely delivery. APA has been our trusted supplier for our packaging needs.",
    name: "Ravi K",
    business: "Packaging Business Owner", 
    location: "Coimbatore, Tamil Nadu",
  },
  {
    quote:
      "APA is a dependable paper supplier for our packaging and garment-related requirements. Their quote process makes repeat ordering easy.",
    name: "Meena V",
    business: "Wholesale Business Owner",
    location: "Salem, Tamil Nadu",
  },
];

export default function ReviewsSlider() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((current) => (current + 1) % REVIEWS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const review = REVIEWS[activeReview];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm flex flex-col text-center">
        <div
          key={activeReview}
          className="animate-fade-up min-h-[190px] flex flex-col items-center justify-center"
          aria-live="polite"
        >
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-9">
            {review.quote}
          </blockquote>
          <div className="mt-8">
            <p className="text-lg font-bold text-gray-900">{review.name}</p>
            <p className="text-gray-600 mt-1">{review.business}</p>
            <p className="text-sm text-sky-700 mt-1">{review.location}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3" aria-label="Customer reviews">
        {REVIEWS.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveReview(index)}
            aria-label={`Show review from ${item.name}`}
            aria-current={index === activeReview ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeReview ? "w-8 bg-sky-600" : "w-2 bg-gray-300"
            }`}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
