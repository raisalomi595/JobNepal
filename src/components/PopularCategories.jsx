import { Link } from "react-router-dom";
import { CATEGORIES } from "../utils/constants";
import { allJobs } from "../data/jobs";

export default function PopularCategories() {
  const getCount = (catName) =>
    allJobs.filter((j) => j.is_active && j.category === catName).length;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0261a6]">Popular Categories</h2>
          <p className="mt-2 text-gray-500">Browse jobs by category to find your perfect role</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/find-job?category=${encodeURIComponent(cat.name)}`}
              className="group bg-gray-50 border border-gray-100 rounded-lg p-5 text-center hover:bg-[#0261a6] hover:text-white hover:border-[#0261a6] transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto mb-2 bg-[#0261a6]/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#0261a6] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-800 group-hover:text-white">{cat.name}</p>
              <p className="text-xs text-gray-400 group-hover:text-blue-200 mt-0.5">{getCount(cat.name)} jobs</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
