export default function Button({ children, variant = "primary", size = "md", className = "", disabled, onClick, type = "button", ...props }) {
  const base = "inline-flex items-center justify-center font-semibold rounded transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#fc8b07] hover:bg-[#e07d09] text-white",
    secondary: "border border-[#0261a6] text-[#0261a6] hover:bg-[#0261a6] hover:text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "text-gray-600 hover:bg-gray-100",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
