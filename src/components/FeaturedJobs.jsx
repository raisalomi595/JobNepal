import { Link } from "react-router-dom";
import { allJobs } from "../data/jobs";

const jobs = allJobs.filter((j) => j.featured && j.is_active).slice(0, 6);

const typeColors = {
  "Full-time": "bg-green-100 text-green-700",
  "Part-time": "bg-blue-100 text-blue-700",
  "Contract": "bg-orange-100 text-orange-700",
  "Internship": "bg-purple-100 text-purple-700",
  "Remote": "bg-teal-100 text-teal-700",
  "Freelance": "bg-pink-100 text-pink-700",
};

export default function FeaturedJobs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0261a6]">Featured Jobs</h2>
          <p className="mt-2 text-gray-500">Explore the latest opportunities from Nepal's top companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/job/${job.id}`}
              className="bg-white border border-[#efefef] rounded p-5 hover:shadow-md hover:border-gray-300 transition-all duration-300 group block"
            >
              <div className="flex items-start justify-between mb-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-11 h-11 border border-[#efefef] rounded object-contain p-1"
                />
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[job.type] || "bg-gray-100 text-gray-700"}`}>
                  {job.type}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#0261a6] transition-colors mb-0.5">{job.title}</h3>
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
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/find-job" className="inline-block text-sm font-semibold text-[#0261a6] border border-[#0261a6] hover:bg-[#0261a6] hover:text-white px-6 py-2.5 rounded transition-colors">
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
