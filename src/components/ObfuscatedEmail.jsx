import { useState } from "react";

const emailUser = "asmithapapers";
const emailDomain = "gmail.com";

export default function ObfuscatedEmail({ className = "" }) {
  const [revealed, setRevealed] = useState(false);

  const openEmail = () => {
    const email = `${emailUser}@${emailDomain}`;
    setRevealed(true);
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      type="button"
      className={`text-left hover:text-sky-600 hover:underline ${className}`}
      onClick={openEmail}
      aria-label="Email Asmitha Paper Agency"
    >
      {revealed ? "✉️ asmithapapers@gmail.com" : "✉️ Email APA"}
    </button>
  );
}
