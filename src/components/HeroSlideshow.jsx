import { useEffect, useState } from "react";
import brownPaperImage from "../assets/brown2.png";
import patternPaperImage from "../assets/pattern paper .jpg";
import cateringRollImage from "../assets/white1.png";


const SLIDES = [
  { src: cateringRollImage, alt: "Plain catering table roll" },
  { src: brownPaperImage, alt: "Brown kraft paper" },
  { src: patternPaperImage, alt: "Perforated pattern paper roll" },
];

export default function HeroSlideshow() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % SLIDES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl bg-gray-200 aspect-[4/3] md:aspect-[16/10]"
      role="region"
      aria-label="Paper roll image slideshow"
    >
      {SLIDES.map((slideItem, index) => (
        <img
          key={slideItem.src}
          src={slideItem.src}
          alt={slideItem.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            index === slide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {SLIDES.map((slideItem, index) => (
          <button
            key={slideItem.src}
            type="button"
            aria-label={`Show paper photo ${index + 1}`}
            onClick={() => setSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === slide ? "w-6 bg-white" : "w-2 bg-white/55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
