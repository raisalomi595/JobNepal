export default function StatsCardGrid({ stats }) {
  const cards = [
    { label: "Applications", value: stats.totalApplications, icon: "📝", color: "bg-blue-50 text-blue-600" },
    { label: "Interviews", value: stats.interviews, icon: "🎯", color: "bg-purple-50 text-purple-600" },
    { label: "Saved Jobs", value: stats.savedJobs, icon: "⭐", color: "bg-yellow-50 text-yellow-600" },
    { label: "Profile Views", value: stats.profileViews, icon: "👁️", color: "bg-green-50 text-green-600" },
    { label: "Resume Downloads", value: stats.resumeDownloads, icon: "📄", color: "bg-indigo-50 text-indigo-600" },
    { label: "Following", value: stats.companiesFollowing, icon: "🏢", color: "bg-teal-50 text-teal-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card) => (
        <div key={card.label} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-2 ${card.color}`}>
            {card.icon}
          </div>
          <p className="text-2xl font-bold text-gray-900">{card.value}</p>
          <p className="text-xs text-gray-500 mt-0.5">{card.label}</p>
        </div>
      ))}
    </div>
  );
}
