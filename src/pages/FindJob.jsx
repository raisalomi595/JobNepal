import { Link } from "react-router-dom";
import { useState } from "react";

const jobCategories = [
  "Information Technology", "Accounting / Finance", "Engineering",
  "Healthcare", "Education", "Marketing / Advertising",
  "Hospitality / Tourism", "NGO / INGO", "Banking / Financial",
  "Sales / Business Development", "Human Resources", "Administration",
];

export default function FindJob() {
  const [form, setForm] = useState({
    keyword: "", location: "", category: "", type: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0261a6] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center mb-8">Find Your Dream Job</h1>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  name="keyword"
                  value={form.keyword}
                  onChange={handleChange}
                  placeholder="Job title, keyword, company"
                  className="w-full h-[50px] border-none rounded px-4 text-sm text-gray-700 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, province or region"
                  className="w-full h-[50px] border-none rounded px-4 text-sm text-gray-700 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold h-[50px] px-8 rounded transition-colors shrink-0"
              >
                Search Jobs
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Job Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {jobCategories.map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white border border-[#efefef] rounded hover:shadow-md hover:border-[#0261a6] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#0261a6] transition-colors">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#0261a6] transition-colors">{cat}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#efefef] rounded p-6 h-fit">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Tips</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-[#0261a6] font-bold shrink-0">1.</span>
                <span>Create a complete profile with your latest experience and skills.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#0261a6] font-bold shrink-0">2.</span>
                <span>Upload an updated resume to increase your chances of getting hired.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#0261a6] font-bold shrink-0">3.</span>
                <span>Set up job alerts to get notified about new matching positions.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#0261a6] font-bold shrink-0">4.</span>
                <span>Apply to jobs directly through our platform for faster processing.</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-[#efefef]">
              <Link to="/signup" className="block text-center bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-2.5 rounded transition-colors text-sm">
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
