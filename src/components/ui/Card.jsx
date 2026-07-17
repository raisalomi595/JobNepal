export default function Card({ children, className = "", padding = true, hover = false }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg ${
        padding ? "p-5" : ""
      } ${hover ? "hover:shadow-md transition-shadow" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
