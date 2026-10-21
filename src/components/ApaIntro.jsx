export default function ApaIntro() {
  return (
    <section className="apa-intro bg-white" aria-label="Asmitha Paper Agency introduction">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-8" aria-label="APA">
          <span className="apa-letter apa-letter-green">A</span>
          <span className="apa-letter apa-letter-blue">P</span>
          <span className="apa-letter apa-letter-pink">A</span>
        </div>
        <p className="mt-5 text-sm md:text-base font-semibold tracking-[0.28em] text-gray-500 uppercase apa-intro-caption">
          Asmitha Paper Agency
        </p>
      </div>
    </section>
  );
}
