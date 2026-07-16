import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const popularMarkets = [
  { name: "Kathmandu", to: "/find-job?location=Kathmandu" },
  { name: "Pokhara", to: "/find-job?location=Pokhara" },
  { name: "Lalitpur", to: "/find-job?location=Lalitpur" },
  { name: "Remote", to: "/find-job?type=Remote" },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("keyword", keyword.trim());
    navigate(`/find-job?${params.toString()}`);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0261a6] via-[#0261a6] to-[#015c9e] text-white pt-[70px] pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Find Jobs in Nepal
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Find jobs, career tools, and hiring solutions for professionals and employers across Nepal — remote and on-site.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex items-stretch gap-2">
            <div className="flex-1 flex items-stretch bg-white rounded-xl overflow-hidden shadow-lg">
              <span className="flex items-center justify-center w-[52px] text-gray-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title, company, or keyword"
                className="flex-1 h-[52px] pr-4 text-sm text-gray-700 outline-none border-none bg-transparent placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold px-6 h-[52px] rounded-xl transition-colors shrink-0 flex items-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="text-sm text-white/60">Popular locations:</span>
            {popularMarkets.map((m) => (
              <Link
                key={m.name}
                to={m.to}
                className="text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
              >
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4 text-sm">
          <span className="text-white/60">Trusted by thousands of job seekers and employers across Nepal</span>
          <Link to="/hire" className="text-white/90 hover:text-white font-medium flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  );
}
