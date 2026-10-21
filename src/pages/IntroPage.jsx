import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApaIntro from "../components/ApaIntro";
import Seo from "../components/Seo";

export default function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Seo
        title="Asmitha Paper Agency | Bulk Paper Roll Supplier in Tiruppur"
        description="Asmitha Paper Agency supplies bulk brown kraft, perforated pattern, and plain catering table rolls for B2B buyers in Tiruppur and Tamil Nadu."
        path="/home/"
        products
      />
      <main
      className="apa-splash"
      data-prerender-root="true"
      onClick={() => navigate("/home")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") navigate("/home");
      }}
      role="button"
      tabIndex={0}
      aria-label="Enter Asmitha Paper Agency website"
    >
      <ApaIntro />
    <h1 className="sr-only">Asmitha Paper Agency bulk paper roll supplier</h1>
      <p className="apa-splash-hint">Click to enter</p>
      </main>
    </>
  );
}
