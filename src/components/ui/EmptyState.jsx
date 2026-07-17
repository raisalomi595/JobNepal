export default function EmptyState({ icon = "📭", title, description, action }) {
  return (
    <div className="text-center py-12 px-4">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title || "Nothing here yet"}</h3>
      {description && <p className="text-sm text-gray-500 mb-4 max-w-sm mx-auto">{description}</p>}
      {action && action}
    </div>
  );
}
