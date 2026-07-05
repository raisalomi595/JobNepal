const jobs = [
  { title: "Senior Frontend Developer", company: "TechCorp Nepal", location: "Kathmandu", type: "Full-time", salary: "Rs. 120k - 150k", posted: "2 days ago", logo: "TN", color: "bg-blue-500" },
  { title: "Data Analyst", company: "CloudMiner Pvt. Ltd.", location: "Lalitpur", type: "Full-time", salary: "Rs. 80k - 100k", posted: "3 days ago", logo: "CM", color: "bg-green-500" },
  { title: "UX/UI Designer", company: "DesignStudio Nepal", location: "Remote", type: "Contract", salary: "Rs. 70k - 90k", posted: "1 day ago", logo: "DS", color: "bg-purple-500" },
  { title: "Python Backend Engineer", company: "InnovateTech", location: "Pokhara", type: "Full-time", salary: "Rs. 100k - 130k", posted: "5 days ago", logo: "IT", color: "bg-orange-500" },
  { title: "Product Manager", company: "GrowthLab", location: "Kathmandu", type: "Full-time", salary: "Rs. 150k - 200k", posted: "1 week ago", logo: "GL", color: "bg-pink-500" },
  { title: "DevOps Engineer", company: "CloudBase", location: "Lalitpur", type: "Full-time", salary: "Rs. 130k - 160k", posted: "4 days ago", logo: "CB", color: "bg-teal-500" },
];

const typeColors = {
  "Full-time": "bg-green-100 text-green-700",
  "Contract": "bg-orange-100 text-orange-700",
};

export default function FeaturedJobs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-\\\[#0261a6]">Featured Jobs</h2>
          <p className="mt-2 text-gray-500">Explore the latest opportunities from Nepal's top companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white border border-\\\[#efefef] rounded-lg p-5 hover:shadow-md hover:border-gray-300 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 ${job.color} rounded flex items-center justify-center text-white font-bold text-sm`}>{job.logo}</div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors\\\[job.type]}`}>{job.type}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-\\\[#0261a6] transition-colors mb-0.5">{job.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{job.company}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="font-medium text-gray-600">{job.salary}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">{job.posted}</span>
                <button className="text-xs font-medium text-\\\[#0261a6] hover:underline">Apply Now &rarr;</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-block text-sm font-semibold text-\\\[#0261a6] border border-\\\[#0261a6] hover:bg-\\\[#0261a6] hover:text-white px-6 py-2 rounded transition-colors">View All Jobs</a>
        </div>
      </div>
    </section>
  );
}   