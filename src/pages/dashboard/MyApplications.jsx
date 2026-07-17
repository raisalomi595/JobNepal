import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import { allJobs } from "../../data/jobs";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";
import ApplicationStatusBadge from "../../components/dashboard/ApplicationStatusBadge";
import ApplicationTimeline from "../../components/applications/ApplicationTimeline";
import Toast from "../../components/Toast";
import { formatDate, formatDateRelative } from "../../utils/helpers";

export default function MyApplications() {
  const { user } = useAuth();
  const { applications, withdrawApplication } = useApp();
  const [expandedId, setExpandedId] = useState(null);
  const [toast, setToast] = useState(null);

  const userApps = applications
    .filter((a) => a.userId === user?.id)
    .sort((a, b) => new Date(b.appliedAt) - new Date(a.appliedAt));

  const handleWithdraw = (appId) => {
    withdrawApplication(appId);
    setToast({ message: "Application withdrawn", type: "success" });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
        <p className="text-sm text-gray-500 mt-1">Track all your job applications</p>
      </div>

      {userApps.length > 0 ? (
        <div className="space-y-3">
          {userApps.map((app) => {
            const job = allJobs.find((j) => j.id === app.jobId);
            const isExpanded = expandedId === app.id;

            return (
              <Card key={app.id}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 min-w-0">
                    <img src={job?.logo || "https://ui-avatars.com/api/?name=J&background=0261a6&color=fff&size=40"} alt="" className="w-10 h-10 rounded shrink-0" />
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900">{job?.title || "Unknown Position"}</h3>
                      <p className="text-xs text-gray-500">{job?.company} • {job?.location}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <ApplicationStatusBadge status={app.status} />
                        <span className="text-xs text-gray-400">Applied {formatDateRelative(app.appliedAt)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button size="sm" variant="ghost" onClick={() => setExpandedId(isExpanded ? null : app.id)}>
                      {isExpanded ? "▲" : "▼"}
                    </Button>
                    {app.status === "applied" && (
                      <Button size="sm" variant="danger" onClick={() => handleWithdraw(app.id)}>
                        Withdraw
                      </Button>
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Application Timeline</h4>
                        <ApplicationTimeline statusHistory={app.statusHistory} />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Details</h4>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between"><dt className="text-gray-500">Applied</dt><dd className="text-gray-900">{formatDate(app.appliedAt)}</dd></div>
                          <div className="flex justify-between"><dt className="text-gray-500">Status</dt><dd><ApplicationStatusBadge status={app.status} /></dd></div>
                          {app.withdrawnAt && <div className="flex justify-between"><dt className="text-gray-500">Withdrawn</dt><dd className="text-gray-900">{formatDate(app.withdrawnAt)}</dd></div>}
                        </dl>
                        <div className="mt-4 space-y-2">
                          <Button size="sm" variant="outline" className="w-full">Download Receipt</Button>
                          <Button size="sm" variant="ghost" className="w-full" onClick={() => window.open(`/job/${app.jobId}`, "_self")}>View Job</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon="📝"
          title="No applications yet"
          description="Start applying to jobs and track them here."
          action={<Button variant="primary" onClick={() => window.location.href = "/find-job"}>Browse Jobs</Button>}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
