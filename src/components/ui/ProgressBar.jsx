export default function ProgressBar({ value = 0, size = "md", showLabel = true, color = "bg-[#0261a6]" }) {
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500">Profile Completion</span>
          <span className="text-xs font-semibold text-gray-700">{value}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${heights[size] || heights.md}`}>
        <div
          className={`${color} rounded-full transition-all duration-500 ease-out ${heights[size] || heights.md}`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );
}
