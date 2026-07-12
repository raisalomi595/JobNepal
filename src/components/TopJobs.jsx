import { Link } from "react-router-dom";

const topJobs = [
  { id: 101, title: "Infrastructure Development Officer", company: "Human Practice Foundation", location: "Panchthar District" },
  { id: 102, title: "Terms of Reference for Statutory Audit", company: "Welthungerhilfe", location: "Lalitpur" },
  { id: 103, title: "Senior Communication and Monitoring Officer", company: "HERD International", location: "Lalitpur" },
  { id: 104, title: "Laravel Developer - Proprietary CMS & ERP Integration", company: "Doublard Design Pvt. Ltd", location: "Kathmandu" },
  { id: 105, title: "Registration Notice", company: "Action Nepal", location: "Kathmandu" },
  { id: 106, title: "Request for Proposals (RFP): Video Production Company", company: "Alliance Asia Nepal Private Ltd", location: "Lalitpur" },
  { id: 107, title: "CALL FOR EXPRESSION OF INTEREST (EOI) For Project Partners", company: "Welthungerhilfe", location: "Lalitpur" },
  { id: 108, title: "Executive Assistant to Country Representative", company: "WWF Nepal", location: "Kathmandu" },
  { id: 109, title: "Accountant (Construction Company)", company: "JobsNepal.com Direct Recruitment Service", location: "Kupondole, Lalitpur" },
  { id: 110, title: "Textile & General Sourcing", company: "Albelo Multi Trading Pvt Ltd", location: "Lalitpur" },
  { id: 111, title: "EoI for EPC services for Peanut Processing & Pilgrim Market Hub", company: "dZi Foundation", location: "Lalitpur" },
  { id: 112, title: "FARM HOUSE WORKER REQUIRED", company: "GAU FARKA AGRO FARM", location: "Pokhara" },
  { id: 113, title: "Vacancy Announcement for Various Positions", company: "CARE Nepal", location: "Madhesh Province" },
  { id: 114, title: "Call for Proposal Publication Notice", company: "NGO Federation of Nepal", location: "Kathmandu" },
  { id: 115, title: "UDL (Universal Design for Learning) Training Trainer/Consultant", company: "Forward Looking", location: "Rukum West" },
  { id: 116, title: "Sales Executive", company: "NIP HOLDINGS PVT LTD", location: "Kathmandu" },
];

export default function TopJobs() {
  return (
    <div>
      <h2 className="text-[#0261a6] text-lg font-bold mb-4">Top Jobs</h2>

      {topJobs.length === 0 ? (
        <p className="text-gray-400 text-sm">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topJobs.map((job) => (
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
                  <p
                    className="text-sm font-semibold text-[#0261a6] hover:underline line-clamp-2 leading-snug"
                    title={job.title}
                  >
                    {job.title}
                  </p>
                  <p className="text-xs text-gray-600 font-medium mt-1 truncate">{job.company}</p>
                  <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6 pt-3 border-t border-[#efefef]">
        <Link to="/find-job" className="text-sm text-[#0261a6] hover:underline font-medium">
          See more jobs by types &rarr;
        </Link>
      </div>
    </div>
  );
}
