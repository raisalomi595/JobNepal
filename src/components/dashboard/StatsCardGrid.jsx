export default function StatsCardGrid({ stats }) {
  const cards = [
    { label: "Applications", value: stats.totalApplications, color: "bg-blue-50 text-blue-600" },
    { label: "Interviews", value: stats.interviews, color: "bg-purple-50 text-purple-600" },
    { label: "Saved Jobs", value: stats.savedJobs, color: "bg-yellow-50 text-yellow-600" },
    { label: "Profile Views", value: stats.profileViews, color: "bg-green-50 text-green-600" },
    { label: "Resume Downloads", value: stats.resumeDownloads, color: "bg-indigo-50 text-indigo-600" },
    { label: "Following", value: stats.companiesFollowing, color: "bg-teal-50 text-teal-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card) => (
        <div key={card.label} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${card.color}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{card.value}</p>
          <p className="text-xs text-gray-500 mt-0.5">{card.label}</p>
        </div>
      ))}
    </div>
  );
}
