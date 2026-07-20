import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import { allJobs } from "../../data/jobs";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";
import Badge from "../../components/ui/Badge";
import Toast from "../../components/Toast";

export default function SavedJobs() {
  const { user } = useAuth();
  const { savedJobs, toggleSaveJob, applyToJob } = useApp();
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  const savedJobIds = useMemo(
    () => new Set(savedJobs.filter((s) => s.userId === user?.id).map((s) => s.jobId)),
    [savedJobs, user?.id]
  );

  const savedJobList = useMemo(
    () => allJobs.filter((j) => savedJobIds.has(j.id)),
    [savedJobIds]
  );

  const handleRemove = (jobId) => {
    toggleSaveJob(user?.id, jobId);
    setToast({ message: "Job removed from saved", type: "success" });
  };

  const handleApply = (jobId) => {
    const result = applyToJob(user?.id, jobId);
    if (result.success) {
      setToast({ message: "Application submitted!", type: "success" });
    } else {
      setToast({ message: result.error, type: "error" });
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Saved Jobs</h1>
        <p className="text-sm text-gray-500 mt-1">Jobs you've bookmarked for later</p>
      </div>

      {savedJobList.length > 0 ? (
        <div className="space-y-3">
          {savedJobList.map((job) => (
            <Card key={job.id}>
              <div className="flex items-start gap-3">
                <img src={job.logo} alt={job.company} className="w-12 h-12 rounded shrink-0" />
                <div className="flex-1 min-w-0">
                  <Link to={`/job/${job.id}`} className="text-sm font-semibold text-gray-900 hover:text-[#0261a6] block truncate">
                    {job.title}
                  </Link>
                  <p className="text-xs text-gray-500">{job.company} • {job.location}</p>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <Badge variant="primary">{job.type}</Badge>
                    <span className="text-xs text-gray-400">{job.salary}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button size="sm" variant="primary" onClick={() => handleApply(job.id)}>Apply</Button>
                  <Button size="sm" variant="ghost" onClick={() => handleRemove(job.id)}>Remove</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No saved jobs"
          description="Save jobs you're interested in to review them later."
          action={<Button variant="primary" onClick={() => navigate("/find-job")}>Browse Jobs</Button>}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
