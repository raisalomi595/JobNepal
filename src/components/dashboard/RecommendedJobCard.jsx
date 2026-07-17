import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

export default function RecommendedJobCard({ job, onApply, onSave }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <img src={job.logo} alt={job.company} className="w-10 h-10 rounded shrink-0" />
        <div className="flex-1 min-w-0">
          <Link to={`/job/${job.id}`} className="text-sm font-semibold text-gray-900 hover:text-[#0261a6] line-clamp-1 block">
            {job.title}
          </Link>
          <p className="text-xs text-gray-500 mt-0.5">{job.company}</p>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className="text-xs text-gray-400">{job.location}</span>
            <Badge variant="primary">{job.type}</Badge>
            {job.matchScore && (
              <Badge variant="success">{job.matchScore}% Match</Badge>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <button
          onClick={() => onApply?.(job.id)}
          className="flex-1 bg-[#fc8b07] hover:bg-[#e07d09] text-white text-xs font-semibold py-2 rounded transition-colors cursor-pointer"
        >
          Apply Now
        </button>
        <button
          onClick={() => onSave?.(job.id)}
          className={`px-3 py-2 rounded text-xs font-semibold border transition-colors cursor-pointer ${
            job.isSaved
              ? "bg-[#0261a6] text-white border-[#0261a6]"
              : "border-gray-300 text-gray-600 hover:border-[#0261a6]"
          }`}
        >
          {job.isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}
