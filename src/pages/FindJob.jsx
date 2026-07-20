import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { allJobs } from "../data/jobs";
import { CATEGORIES } from "../utils/constants";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";
import LoginPromptModal from "../components/auth/LoginPromptModal";
import Badge from "../components/ui/Badge";
import Toast from "../components/Toast";

const sortJobs = (jobs, sortBy) => {
  if (!sortBy) return jobs;
  const copy = [...jobs];
  if (sortBy === "recent") {
    copy.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else if (sortBy === "popular") {
    copy.sort((a, b) => (b.apply_count || 0) - (a.apply_count || 0));
  }
  return copy;
};

export default function FindJob() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAuthenticated } = useAuth();
  const { applyToJob, toggleSaveJob, savedJobs } = useApp();
  const [promptModal, setPromptModal] = useState(null);
  const [promptAction, setPromptAction] = useState("");
  const [toast, setToast] = useState(null);
  const [applyingId, setApplyingId] = useState(null);

  const [filters, setFilters] = useState({
    keyword: searchParams.get("keyword") || "",
    location: searchParams.get("location") || "",
    category: searchParams.get("category") || "",
    type: searchParams.get("type") || "",
    featured: searchParams.get("featured") || "",
    sort: searchParams.get("sort") || "",
  });

  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setFilters({
      keyword: searchParams.get("keyword") || "",
      location: searchParams.get("location") || "",
      category: searchParams.get("category") || "",
      type: searchParams.get("type") || "",
      featured: searchParams.get("featured") || "",
      sort: searchParams.get("sort") || "",
    });
    setVisibleCount(12);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setVisibleCount(12);
  };

  const filteredJobs = useMemo(() => {
    let jobs = allJobs.filter((job) => {
      if (filters.keyword && !job.title.toLowerCase().includes(filters.keyword.toLowerCase()) &&
          !job.company.toLowerCase().includes(filters.keyword.toLowerCase()))
        return false;
      if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase()))
        return false;
      if (filters.category && job.category !== filters.category) return false;
      if (filters.type && job.type !== filters.type) return false;
      if (filters.featured === "true" && !job.featured) return false;
      if (filters.featured === "false" && job.featured) return false;
      return job.is_active;
    });
    jobs = sortJobs(jobs, filters.sort);
    return jobs;
  }, [filters]);

  const displayedJobs = filteredJobs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredJobs.length;

  const handleAction = (action, jobId) => {
    if (!isAuthenticated) {
      setPromptAction(action === "apply" ? "Apply for this Job" : "Save this Job");
      setPromptModal(jobId);
      return;
    }
    if (action === "apply") {
      setApplyingId(jobId);
      setTimeout(() => {
        const result = applyToJob("current", jobId);
        setApplyingId(null);
        if (result.success) {
          setToast({ message: "Application submitted!", type: "success" });
        } else {
          setToast({ message: result.error, type: "error" });
        }
      }, 300);
    } else if (action === "save") {
      toggleSaveJob("current", jobId);
      setToast({ message: "Job saved!", type: "success" });
    }
  };

  const savedJobIds = new Set(savedJobs.map((s) => s.jobId));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0261a6] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Find Your Dream Job</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <input
              name="keyword"
              value={filters.keyword}
              onChange={handleFilterChange}
              placeholder="Job title, keyword, company"
              className="w-full border border-white/30 rounded px-4 py-3 text-sm bg-white/10 text-white placeholder-white/60 focus:outline-none focus:bg-white/20"
            />
            <input
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              placeholder="Location"
              className="w-full border border-white/30 rounded px-4 py-3 text-sm bg-white/10 text-white placeholder-white/60 focus:outline-none focus:bg-white/20"
            />
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full border border-white/30 rounded px-4 py-3 text-sm bg-white/10 text-white focus:outline-none focus:bg-white/20"
            >
              <option value="" className="text-gray-700">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.name} className="text-gray-700">{cat.name}</option>
              ))}
            </select>
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="w-full border border-white/30 rounded px-4 py-3 text-sm bg-white/10 text-white focus:outline-none focus:bg-white/20"
            >
              <option value="" className="text-gray-700">All Types</option>
              <option value="Full-time" className="text-gray-700">Full-time</option>
              <option value="Part-time" className="text-gray-700">Part-time</option>
              <option value="Contract" className="text-gray-700">Contract</option>
              <option value="Internship" className="text-gray-700">Internship</option>
              <option value="Remote" className="text-gray-700">Remote</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">{filteredJobs.length} jobs found</p>

        {displayedJobs.length > 0 ? (
          <div className="space-y-3">
            {displayedJobs.map((job) => {
              const isSaved = savedJobIds.has(job.id);
              return (
                <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <Link to={`/job/${job.id}`} className="text-base font-semibold text-gray-900 hover:text-[#0261a6] block truncate">
                            {job.title}
                          </Link>
                          <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleAction("save", job.id)}
                            className="hover:scale-110 transition-transform cursor-pointer p-1"
                            title={isSaved ? "Remove from saved" : "Save job"}
                          >
                            {isSaved ? (
                              <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-300 hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <Badge variant="primary">{job.type}</Badge>
                        <span className="text-xs text-gray-400">{job.salary}</span>
                        <span className="text-xs text-gray-400">{job.category}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{job.description}</p>
                      {job.skills?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {job.skills.slice(0, 4).map((skill) => (
                            <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{skill}</span>
                          ))}
                          {job.skills.length > 4 && <span className="text-xs text-gray-400">+{job.skills.length - 4} more</span>}
                        </div>
                      )}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => handleAction("apply", job.id)}
                          disabled={applyingId === job.id}
                          className="bg-[#fc8b07] hover:bg-[#e07d09] text-white text-xs font-semibold px-5 py-2 rounded transition-colors cursor-pointer disabled:opacity-50"
                        >
                          {applyingId === job.id ? "Applying..." : isAuthenticated ? "Apply Now" : "Login to Apply"}
                        </button>
                        <Link to={`/job/${job.id}`} className="text-xs text-[#0261a6] hover:underline font-medium">View Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-sm text-gray-500">Try adjusting your search filters.</p>
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="bg-white border border-gray-300 text-gray-700 px-8 py-2.5 rounded font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Load More Jobs
            </button>
          </div>
        )}
      </div>

      <LoginPromptModal
        isOpen={!!promptModal}
        onClose={() => { setPromptModal(null); setPromptAction(""); }}
        action={promptAction}
      />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
