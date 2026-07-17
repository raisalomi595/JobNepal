import { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import { useProfile } from "../../hooks/useProfile";
import { allJobs } from "../../data/jobs";
import StatsCardGrid from "../../components/dashboard/StatsCardGrid";
import RecommendedJobCard from "../../components/dashboard/RecommendedJobCard";
import ApplicationStatusBadge from "../../components/dashboard/ApplicationStatusBadge";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import ProgressBar from "../../components/ui/ProgressBar";
import EmptyState from "../../components/ui/EmptyState";
import { formatDateRelative } from "../../utils/helpers";

export default function DashboardHome() {
  const { user } = useAuth();
  const {
    applications, savedJobs, notifications, toggleSaveJob,
    applyToJob, getRecommendedJobs, getDashboardStats,
    addNotification, trackRecentlyViewed,
  } = useApp();
  const { profile } = useProfile(user?.id);
  const navigate = useNavigate();

  const stats = useMemo(() => getDashboardStats(user?.id), [user?.id, getDashboardStats]);
  const recommendedJobs = useMemo(() => getRecommendedJobs(user?.id), [user?.id, getRecommendedJobs]);

  const userApplications = applications.filter((a) => a.userId === user?.id);
  const recentApps = userApplications.slice(0, 4);
  const savedJobIds = new Set(savedJobs.filter((s) => s.userId === user?.id).map((s) => s.jobId));

  const handleApply = (jobId) => {
    const result = applyToJob(user?.id, jobId);
    if (result.success) {
      addNotification(user?.id, "application_update", "Application Submitted", "Your application has been submitted successfully.");
      navigate("/dashboard/applications");
    }
  };

  const handleSave = (jobId) => {
    toggleSaveJob(user?.id, jobId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.firstName}! 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Here's what's happening with your job search today.
          </p>
        </div>
      </div>

      <StatsCardGrid stats={stats} />

      <Card>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Profile Completion</h3>
          <Button size="sm" variant="secondary" onClick={() => navigate("/dashboard/profile")}>
            Complete Profile
          </Button>
        </div>
        <ProgressBar value={profile.completionPct || 0} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            <span className={profile.headline ? "text-green-500" : "text-gray-300"}>✓</span> Headline
          </div>
          <div className="flex items-center gap-1.5">
            <span className={profile.skills?.length > 0 ? "text-green-500" : "text-gray-300"}>✓</span> Skills
          </div>
          <div className="flex items-center gap-1.5">
            <span className={profile.education?.length > 0 ? "text-green-500" : "text-gray-300"}>✓</span> Education
          </div>
          <div className="flex items-center gap-1.5">
            <span className={profile.experience?.length > 0 ? "text-green-500" : "text-gray-300"}>✓</span> Experience
          </div>
          <div className="flex items-center gap-1.5">
            <span className={profile.resume_url ? "text-green-500" : "text-gray-300"}>✓</span> Resume
          </div>
          <div className="flex items-center gap-1.5">
            <span className={profile.languages?.length > 0 ? "text-green-500" : "text-gray-300"}>✓</span> Languages
          </div>
          <div className="flex items-center gap-1.5">
            <span className={profile.certificates?.length > 0 ? "text-green-500" : "text-gray-300"}>✓</span> Certificates
          </div>
          <div className="flex items-center gap-1.5">
            <span className={profile.projects?.length > 0 ? "text-green-500" : "text-gray-300"}>✓</span> Projects
          </div>
        </div>
      </Card>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-900">Recommended for You</h2>
          <Link to="/find-job" className="text-sm text-[#0261a6] hover:underline font-medium">View All</Link>
        </div>
        {recommendedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedJobs.slice(0, 6).map((job) => (
              <RecommendedJobCard
                key={job.id}
                job={{ ...job, isSaved: savedJobIds.has(job.id) }}
                onApply={handleApply}
                onSave={handleSave}
              />
            ))}
          </div>
        ) : (
          <EmptyState icon="🔍" title="No recommendations yet" description="Start applying to jobs to get personalized recommendations." />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Recent Applications</h3>
            <Link to="/dashboard/applications" className="text-xs text-[#0261a6] hover:underline font-medium">View All</Link>
          </div>
          {recentApps.length > 0 ? (
            <div className="space-y-3">
              {recentApps.map((app) => {
                const job = allJobs.find((j) => j.id === app.jobId);
                return (
                  <div key={app.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{job?.title || "Unknown Job"}</p>
                      <p className="text-xs text-gray-500">{job?.company} • {formatDateRelative(app.appliedAt)}</p>
                    </div>
                    <ApplicationStatusBadge status={app.status} />
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-6">No applications yet. Start applying to jobs!</p>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Saved Jobs</h3>
            <Link to="/dashboard/saved-jobs" className="text-xs text-[#0261a6] hover:underline font-medium">View All</Link>
          </div>
          {savedJobIds.size > 0 ? (
            <div className="space-y-3">
              {[...savedJobIds].slice(0, 5).map((jobId) => {
                const job = allJobs.find((j) => j.id === jobId);
                if (!job) return null;
                return (
                  <div key={jobId} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="min-w-0">
                      <Link to={`/job/${job.id}`} className="text-sm font-medium text-gray-900 hover:text-[#0261a6] truncate block">
                        {job.title}
                      </Link>
                      <p className="text-xs text-gray-500">{job.company} • {job.location}</p>
                    </div>
                    <button onClick={() => toggleSaveJob(user?.id, jobId)} className="text-xs text-red-500 hover:underline cursor-pointer shrink-0">Remove</button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-6">No saved jobs yet.</p>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold text-gray-900 mb-3">Application Statistics</h3>
          {userApplications.length > 0 ? (
            <div className="space-y-3">
              {["applied", "under_review", "shortlisted", "interview", "rejected", "selected"].map((status) => {
                const count = userApplications.filter((a) => a.status === status).length;
                if (count === 0) return null;
                return (
                  <div key={status} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 capitalize">{status.replace("_", " ")}</span>
                    <span className="font-semibold text-gray-900">{count}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-6">No data yet.</p>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Resume Status</h3>
            <Button size="sm" variant="secondary" onClick={() => navigate("/dashboard/profile")}>
              {profile.resume_url ? "Update" : "Upload"}
            </Button>
          </div>
          {profile.resume_url ? (
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-2xl">📄</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{profile.resume_name || "Resume"}</p>
                <p className="text-xs text-green-600">Uploaded</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-4">No resume uploaded. Upload your resume to get discovered by employers.</p>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold text-gray-900 mb-3">Upcoming Interviews</h3>
          {userApplications.filter((a) => a.status === "interview").length > 0 ? (
            userApplications.filter((a) => a.status === "interview").slice(0, 3).map((app) => {
              const job = allJobs.find((j) => j.id === app.jobId);
              return (
                <div key={app.id} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                  <span className="text-xl">🎯</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">{job?.title}</p>
                    <p className="text-xs text-gray-500">{job?.company} • Schedule TBD</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-gray-400 text-center py-4">No upcoming interviews.</p>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            <Link to="/dashboard/notifications" className="text-xs text-[#0261a6] hover:underline font-medium">View All</Link>
          </div>
          {notifications.filter((n) => n.userId === user?.id).slice(0, 4).length > 0 ? (
            <div className="space-y-2">
              {notifications.filter((n) => n.userId === user?.id).slice(0, 4).map((n) => (
                <div key={n.id} className={`p-2.5 rounded-lg text-sm ${n.isRead ? "text-gray-600" : "bg-blue-50 text-gray-900 font-medium"}`}>
                  <p className="text-xs">{n.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{formatDateRelative(n.createdAt)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-4">No notifications yet.</p>
          )}
        </Card>
      </div>
    </div>
  );
}
