import { Link } from "react-router-dom";
import { allJobs } from "../data/jobs";

const instantJobs = allJobs.filter((j) => j.is_active).slice(0, 8);
const hotJobs = allJobs.filter((j) => j.featured).slice(0, 5);

export default function JobSidebar() {
  return (
    <aside className="space-y-6">
      <div className="bg-white border border-[#efefef] rounded">
        <div className="bg-[#0261a6] text-white px-4 py-2.5 rounded-t font-bold text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Instant Jobs
        </div>
        <div className="p-3">
          <table className="w-full text-xs">
            <tbody>
              {instantJobs.map((job) => (
                <tr key={job.id} className="border-b border-[#efefef] last:border-0">
                  <td className="py-2 pr-2">
                    <Link to={`/job/${job.id}`} className="text-[#0261a6] hover:underline font-medium leading-tight block">
                      {job.title}
                    </Link>
                    <span className="text-gray-400">({job.company})</span>
                  </td>
                  <td className="py-2 text-gray-500 text-right whitespace-nowrap">{job.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-[#efefef] rounded">
        <div className="bg-[#fc8b07] text-white px-4 py-2.5 rounded-t font-bold text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Hot Jobs
        </div>
        <div className="p-3">
          <div className="space-y-2">
            {hotJobs.map((job) => (
              <Link
                key={job.id}
                to={`/job/${job.id}`}
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors group"
              >
                <img src={job.logo} alt={job.company} className="w-8 h-8 rounded shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-700 group-hover:text-[#0261a6] truncate leading-tight">{job.title}</p>
                  <p className="text-[10px] text-gray-400 truncate">{job.company}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
