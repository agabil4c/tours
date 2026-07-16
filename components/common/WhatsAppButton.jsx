import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const router = useRouter();
  const [tourName, setTourName] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const formatTourName = (slug) => {
    if (!slug) return "";
    return slug
      .split("-")
      .map(word => {
        if (word.toLowerCase() === "and" || word === "&") return "&";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  useEffect(() => {
    if (router.query.SafariName) {
      setTourName(formatTourName(router.query.SafariName));
    } else {
      setTourName("");
    }
  }, [router.query.SafariName]);

  useEffect(() => {
    // Show the custom prompt helper tooltip after 2 seconds
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const getWhatsAppUrl = () => {
    const baseMessage = tourName
      ? `Hi Riverwide! I'm interested in booking the ${tourName} safari. Can you help me customize it?`
      : "Hi Riverwide! I'm interested in booking a safari. Can you help me customize it?";

    const encodedText = encodeURIComponent(baseMessage);
    return `https://wa.me/256702791899?text=${encodedText}`;
  };

  return (
    <div 
      className="whatsapp-container"
      style={{
        position: "fixed",
        bottom: "95px",
        right: "30px",
        zIndex: 999,
        display: "flex",
        alignItems: "center"
      }}
    >
      {showPrompt && (
        <div 
          className="whatsapp-prompt bg-white px-15 py-8 rounded-8 shadow-4 text-12 text-dark-1 fw-600 d-flex items-center"
          style={{
            position: "absolute",
            right: "60px",
            whiteSpace: "nowrap",
            border: "1px solid rgba(37, 211, 102, 0.2)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            animation: "fade-in-left 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards"
          }}
        >
          <span>Need help? Chat to customize your safari!</span>
          <div 
            style={{
              position: "absolute",
              right: "-5px",
              top: "50%",
              transform: "translateY(-50%) rotate(45deg)",
              width: "10px",
              height: "10px",
              backgroundColor: "#ffffff",
              borderRight: "1px solid rgba(37, 211, 102, 0.2)",
              borderTop: "1px solid rgba(37, 211, 102, 0.2)"
            }}
          />
        </div>
      )}

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn shadow-4 d-flex items-center justify-center transition"
        title="Chat with us on WhatsApp"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          cursor: "pointer",
          display: "flex",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="#ffffff"
          style={{ display: "block" }}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45h.005c5.312 0 9.632-4.314 9.636-9.627a9.554 9.554 0 0 0-2.822-6.816A9.558 9.558 0 0 0 12.008 1.34c-5.316 0-9.637 4.315-9.64 9.63-.001 1.706.452 3.373 1.312 4.83l.142.242-1.01 3.69 3.774-.99.232.138zm11.236-4.99c-.27-.135-1.602-.79-1.85-.88-.248-.09-.43-.135-.61.135-.18.27-.7 1.01-.88 1.1-.18.09-.36.1-.63-.035-1.082-.54-1.862-1.022-2.587-2.277-.18-.31.18-.288.52-.96.09-.18.045-.34-.02-.48-.067-.137-.61-1.474-.837-2.013-.22-.53-.44-.457-.61-.466-.157-.008-.337-.01-.518-.01a1 1 0 0 0-.723.337c-.248.27-.95.93-.95 2.27s.972 2.637 1.108 2.82c.135.18 1.91 2.92 4.63 4.1 2.72 1.18 2.72.79 3.21.745.49-.045 1.6-.653 1.83-1.284.23-.63.23-1.17.16-1.284-.07-.11-.25-.2-.52-.335z"/>
        </svg>
      </a>

      <style jsx global>{`
        .whatsapp-floating-btn {
          animation: whatsapp-pulse 2s infinite;
        }
        .whatsapp-floating-btn:hover {
          transform: scale(1.1);
          background-color: #20ba5a !important;
        }
        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        @keyframes fade-in-left {
          0% {
            opacity: 0;
            transform: translateX(15px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
