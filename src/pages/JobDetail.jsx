import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { allJobs } from "../data/jobs";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";
import LoginPromptModal from "../components/auth/LoginPromptModal";
import Badge from "../components/ui/Badge";
import Toast from "../components/Toast";

const skillsList = ["React", "TypeScript", "Python", "Laravel", "PHP", "SQL", "AWS", "Docker", "Figma", "SEO", "Excel", "Communication", "Project Management", "Leadership"];

export default function JobDetail() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const { applyToJob, toggleSaveJob, toggleFollowCompany, savedJobs, trackRecentlyViewed } = useApp();
  const [promptModal, setPromptModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  const job = allJobs.find((j) => j.id === Number(id));

  useEffect(() => {
    if (job && isAuthenticated) {
      trackRecentlyViewed("current", job.id);
    }
  }, [job?.id, isAuthenticated, trackRecentlyViewed]);

  const handleAction = (action) => {
    if (!isAuthenticated) {
      setPromptModal(action);
      return;
    }
    if (action === "apply") {
      setIsApplying(true);
      setTimeout(() => {
        const result = applyToJob("current", job.id);
        setIsApplying(false);
        if (result.success) {
          setToast({ message: "Application submitted successfully!", type: "success" });
        } else {
          setToast({ message: result.error, type: "error" });
        }
      }, 300);
    } else if (action === "save") {
      toggleSaveJob("current", job.id);
      setToast({ message: "Job saved!", type: "success" });
    } else if (action === "follow") {
      toggleFollowCompany("current", job.company);
      setToast({ message: `Following ${job.company}`, type: "success" });
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-500 mb-8">The job you are looking for does not exist or has been removed.</p>
          <Link to="/" className="bg-[#0261a6] text-white px-6 py-2.5 rounded font-medium hover:bg-[#015c9e] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const isSaved = savedJobs.some((s) => s.jobId === job.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#0261a6]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/find-job" className="hover:text-[#0261a6]">Jobs</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Job Detail</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#efefef] rounded p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 rounded shrink-0"
                />
                <div className="flex-1">
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-gray-600 font-medium">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">{job.type}</span>
                    <span className="font-medium text-gray-700">{job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#efefef] pt-6 space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Job Description</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Requirements</h2>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                {job.skills?.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="primary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-[#efefef] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleAction("apply")}
                  disabled={isApplying}
                  className="bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold px-8 py-3 rounded transition-colors text-center cursor-pointer disabled:opacity-50"
                >
                  {isApplying ? "Applying..." : isAuthenticated ? "Apply Now" : "Login to Apply"}
                </button>
                <button
                  onClick={() => handleAction("save")}
                  className={`font-semibold px-8 py-3 rounded transition-colors text-center cursor-pointer ${
                    isSaved
                      ? "bg-[#0261a6] text-white"
                      : "border border-[#0261a6] text-[#0261a6] hover:bg-[#0261a6] hover:text-white"
                  }`}
                >
                  {isSaved ? "Saved" : "Save Job"}
                </button>
                {!isAuthenticated && (
                  <button
                    onClick={() => handleAction("follow")}
                    className="border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded transition-colors text-center cursor-pointer"
                  >
                    Follow Company
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white border border-[#efefef] rounded p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Job Overview</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-gray-500">Category</dt><dd className="text-gray-700 font-medium">{job.category}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Type</dt><dd className="text-gray-700 font-medium">{job.type}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Salary</dt><dd className="text-gray-700 font-medium">{job.salary}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Location</dt><dd className="text-gray-700 font-medium">{job.location}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Applicants</dt><dd className="text-gray-700 font-medium">{job.apply_count}</dd></div>
              </dl>
            </div>

            {isAuthenticated && (
              <div className="bg-white border border-[#efefef] rounded p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleAction("save")}
                    className={`w-full py-2.5 rounded text-sm font-semibold transition-colors cursor-pointer ${
                      isSaved ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
                    }`}
                  >
                    {isSaved ? "Remove from Saved" : "Save Job"}
                  </button>
                  <button
                    onClick={() => handleAction("follow")}
                    className="w-full bg-blue-50 text-[#0261a6] py-2.5 rounded text-sm font-semibold hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    Follow Company
                  </button>
                  <Link to="/dashboard/applications" className="block w-full text-center bg-gray-50 text-gray-600 py-2.5 rounded text-sm font-semibold hover:bg-gray-100 transition-colors">
                    View My Applications
                  </Link>
                </div>
              </div>
            )}

            <div className="bg-white border border-[#efefef] rounded p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Share This Job</h3>
              <div className="flex gap-2">
                {["Facebook", "Twitter", "LinkedIn", "WhatsApp"].map((platform) => (
                  <button key={platform} aria-label={`Share on ${platform}`} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500 hover:bg-[#0261a6] hover:text-white transition-colors cursor-pointer">
                    {platform[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/" className="text-sm text-[#0261a6] hover:underline font-medium">&larr; Back to Jobs</Link>
        </div>
      </div>

      <LoginPromptModal
        isOpen={!!promptModal}
        onClose={() => setPromptModal(null)}
        action={promptModal === "apply" ? "Apply for this Job" : promptModal === "save" ? "Save this Job" : "Follow this Company"}
      />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
