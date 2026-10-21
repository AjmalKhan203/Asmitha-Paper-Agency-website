import { useEffect, useState } from "react";
import { buildWhatsAppUrl, DIRECT_WHATSAPP_MESSAGE } from "../config/whatsapp";

export default function WhatsAppButton({ className = "", children, onClick }) {
  const [whatsAppUrl, setWhatsAppUrl] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setWhatsAppUrl(buildWhatsAppUrl(DIRECT_WHATSAPP_MESSAGE));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <a
       href={whatsAppUrl ?? "#"}
       target="_blank"
       rel="noopener noreferrer"
       className={className}
       onClick={(event) => {
         if (!whatsAppUrl) event.preventDefault();
         onClick?.(event);
       }}
       aria-label="Chat on WhatsApp"
     >
      {children ?? "Chat with APA Manager"}
    </a>
  );
}
