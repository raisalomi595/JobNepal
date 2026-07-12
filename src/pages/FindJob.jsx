import { Link, useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";

const allJobs = [
  { id: 1, title: "Accountant (Construction Company)", company: "JobsNepal.com Direct Recruitment Service", location: "Kupondole, Lalitpur", type: "Full-time", category: "Accounting / Finance" },
  { id: 2, title: "Crew Member (All-rounder) - Female", company: "JobsNepal.com Direct Recruitment Service", location: "Lalitpur", type: "Full-time", category: "Hospitality / Tourism" },
  { id: 101, title: "Infrastructure Development Officer", company: "Human Practice Foundation", location: "Panchthar District", type: "Full-time", category: "Engineering" },
  { id: 102, title: "Terms of Reference for Statutory Audit", company: "Welthungerhilfe", location: "Lalitpur", type: "Contract", category: "Accounting / Finance" },
  { id: 103, title: "Senior Communication and Monitoring Officer", company: "HERD International", location: "Lalitpur", type: "Full-time", category: "NGO / INGO" },
  { id: 104, title: "Laravel Developer - Proprietary CMS & ERP Integration", company: "Doublard Design Pvt. Ltd", location: "Kathmandu", type: "Full-time", category: "Information Technology" },
  { id: 105, title: "Registration Notice", company: "Action Nepal", location: "Kathmandu", type: "Contract", category: "NGO / INGO" },
  { id: 106, title: "Request for Proposals (RFP): Video Production Company", company: "Alliance Asia Nepal Private Ltd", location: "Lalitpur", type: "Contract", category: "Marketing / Advertising" },
  { id: 107, title: "CALL FOR EXPRESSION OF INTEREST (EOI) For Project Partners", company: "Welthungerhilfe", location: "Lalitpur", type: "Contract", category: "NGO / INGO" },
  { id: 108, title: "Executive Assistant to Country Representative", company: "WWF Nepal", location: "Kathmandu", type: "Full-time", category: "NGO / INGO" },
  { id: 109, title: "Accountant (Construction Company)", company: "JobsNepal.com Direct Recruitment Service", location: "Kupondole, Lalitpur", type: "Full-time", category: "Accounting / Finance" },
  { id: 110, title: "Textile & General Sourcing", company: "Albelo Multi Trading Pvt Ltd", location: "Lalitpur", type: "Full-time", category: "Sales / Business Development" },
  { id: 111, title: "EoI for EPC services for Peanut Processing & Pilgrim Market Hub", company: "dZi Foundation", location: "Lalitpur", type: "Contract", category: "Engineering" },
  { id: 112, title: "FARM HOUSE WORKER REQUIRED", company: "GAU FARKA AGRO FARM", location: "Pokhara", type: "Full-time", category: "Hospitality / Tourism" },
  { id: 113, title: "Vacancy Announcement for Various Positions", company: "CARE Nepal", location: "Madhesh Province", type: "Full-time", category: "NGO / INGO" },
  { id: 114, title: "Call for Proposal Publication Notice", company: "NGO Federation of Nepal", location: "Kathmandu", type: "Contract", category: "NGO / INGO" },
  { id: 115, title: "UDL (Universal Design for Learning) Training Trainer/Consultant", company: "Forward Looking", location: "Rukum West", type: "Contract", category: "Education" },
  { id: 116, title: "Sales Executive", company: "NIP HOLDINGS PVT LTD", location: "Kathmandu", type: "Full-time", category: "Sales / Business Development" },
  { id: 201, title: "Senior Frontend Developer", company: "TechCorp Nepal", location: "Kathmandu", type: "Full-time", category: "Information Technology" },
  { id: 202, title: "Data Analyst", company: "CloudMiner Pvt. Ltd.", location: "Lalitpur", type: "Full-time", category: "Information Technology" },
  { id: 203, title: "UX/UI Designer", company: "DesignStudio Nepal", location: "Remote", type: "Contract", category: "Information Technology" },
  { id: 204, title: "Python Backend Engineer", company: "InnovateTech", location: "Pokhara", type: "Full-time", category: "Information Technology" },
  { id: 205, title: "Product Manager", company: "GrowthLab", location: "Kathmandu", type: "Full-time", category: "Information Technology" },
  { id: 206, title: "DevOps Engineer", company: "CloudBase", location: "Lalitpur", type: "Full-time", category: "Information Technology" },
];

const jobCategories = [
  "Information Technology", "Accounting / Finance", "Engineering",
  "Healthcare", "Education", "Marketing / Advertising",
  "Hospitality / Tourism", "NGO / INGO", "Banking / Financial",
  "Sales / Business Development", "Human Resources", "Administration",
];

export default function FindJob() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [form, setForm] = useState({
    keyword: searchParams.get("keyword") || "",
    location: searchParams.get("location") || "",
    category: searchParams.get("category") || "",
    type: searchParams.get("type") || "",
  });
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(form).forEach(([key, val]) => {
      if (val.trim()) params.set(key, val.trim());
    });
    setSearchParams(params);
  };

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const kw = form.keyword.toLowerCase();
      if (kw && !job.title.toLowerCase().includes(kw) && !job.company.toLowerCase().includes(kw)) return false;
      if (form.location && !job.location.toLowerCase().includes(form.location.toLowerCase())) return false;
      if (form.category && job.category !== form.category) return false;
      if (form.type && job.type !== form.type) return false;
      return true;
    });
  }, [form]);

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
            {(form.keyword || form.location || form.category || form.type) ? (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Search Results ({filteredJobs.length})
                </h2>
                {filteredJobs.length === 0 ? (
                  <div className="bg-white border border-[#efefef] rounded p-8 text-center">
                    <p className="text-gray-500 mb-2">No jobs found matching your criteria.</p>
                    <p className="text-sm text-gray-400">Try adjusting your search terms.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredJobs.map((job) => (
                      <Link
                        key={job.id}
                        to={`/job/${job.id}`}
                        className="border border-[#efefef] rounded p-4 hover:shadow-md hover:border-gray-300 transition-all duration-200 bg-white block"
                      >
                        <div className="flex gap-3">
                          <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=0261a6&color=fff&size=48&bold=true`}
                            alt={job.company}
                            className="w-12 h-12 rounded shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-[#0261a6] hover:underline line-clamp-2 leading-snug" title={job.title}>
                              {job.title}
                            </p>
                            <p className="text-xs text-gray-600 font-medium mt-1 truncate">{job.company}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{job.location}</p>
                            <span className="inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">{job.type}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Job Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {jobCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setForm(prev => ({ ...prev, category: cat })); }}
                      className="flex items-center gap-3 p-4 bg-white border border-[#efefef] rounded hover:shadow-md hover:border-[#0261a6] transition-all duration-200 group text-left w-full"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#0261a6] transition-colors">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0261a6] transition-colors">{cat}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
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
