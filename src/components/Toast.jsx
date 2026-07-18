import { useState, useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 right-5 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg text-white font-medium text-sm ${
          type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <span>{type === "success" ? "✓" : "✕"}</span>
        <span>{message}</span>
        <button onClick={() => { setVisible(false); if (onClose) onClose(); }} aria-label="Close notification" className="ml-4 text-white/80 hover:text-white">
          ✕
        </button>
      </div>
    </div>
  );
}
