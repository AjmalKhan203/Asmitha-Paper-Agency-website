import { buildWhatsAppUrl } from "../config/whatsapp";

export default function FloatingWhatsApp() {
  const defaultMessage =
    "Hello Asmitha Paper Agency, I would like to enquire about bulk paper / poly rolls.";

  return (
    <a
      href={buildWhatsAppUrl(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Asmitha Paper Agency on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6 shrink-0"
        aria-hidden="true"
      >
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.404L3.1 28.8l6.58-1.726a12.74 12.74 0 0 0 6.324 1.676h.006c7.058 0 12.796-5.74 12.796-12.8 0-3.42-1.332-6.634-3.75-9.052A12.714 12.714 0 0 0 16.004 3.2zm0 23.384h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-3.904 1.024 1.042-3.806-.252-.402a10.576 10.576 0 0 1-1.622-5.64c0-5.864 4.772-10.636 10.64-10.636 2.842 0 5.512 1.108 7.52 3.118a10.568 10.568 0 0 1 3.114 7.524c0 5.866-4.774 10.628-10.642 10.628zm5.836-7.966c-.32-.16-1.892-.934-2.186-1.04-.294-.108-.506-.16-.72.16-.214.32-.826 1.04-1.012 1.254-.186.214-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.494.14-.652.144-.144.32-.374.48-.56.16-.186.214-.32.32-.534.106-.214.054-.4-.026-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.614-.01c-.214 0-.56.08-.854.4-.294.32-1.12 1.094-1.12 2.668s1.146 3.094 1.306 3.308c.16.214 2.256 3.444 5.466 4.83.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.128.616-.092 1.892-.774 2.158-1.52.266-.748.266-1.388.186-1.52-.08-.134-.294-.214-.614-.374z" />
      </svg>
      <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
    </a>
  );
}