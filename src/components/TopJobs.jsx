const topJobs = [
  { title: "Infrastructure Development Officer", company: "Human Practice Foundation", location: "Panchthar District" },
  { title: "Terms of Reference for Statutory Audit", company: "Welthungerhilfe", location: "Lalitpur" },
  { title: "Senior Communication and Monitoring Officer", company: "HERD International", location: "Lalitpur" },
  { title: "Laravel Developer - Proprietary CMS & ERP Integration", company: "Doublard Design Pvt. Ltd", location: "Kathmandu" },
  { title: "Registration Notice", company: "Action Nepal", location: "Kathmandu" },
  { title: "Request for Proposals (RFP): Video Production Company", company: "Alliance Asia Nepal Private Ltd", location: "Lalitpur" },
  { title: "CALL FOR EXPRESSION OF INTEREST (EOI) For Project Partners", company: "Welthungerhilfe", location: "Lalitpur" },
  { title: "Executive Assistant to Country Representative", company: "WWF Nepal", location: "Kathmandu" },
  { title: "Accountant (Construction Company)", company: "JobsNepal.com Direct Recruitment Service", location: "Kupondole, Lalitpur" },
  { title: "Textile & General Sourcing", company: "Albelo Multi Trading Pvt Ltd", location: "Lalitpur" },
  { title: "EoI for EPC services for Peanut Processing & Pilgrim Market Hub", company: "dZi Foundation", location: "Lalitpur" },
  { title: "FARM HOUSE WORKER REQUIRED", company: "GAU FARKA AGRO FARM", location: "Pokhara" },
  { title: "Vacancy Announcement for Various Positions", company: "CARE Nepal", location: "Madhesh Province" },
  { title: "Call for Proposal Publication Notice", company: "NGO Federation of Nepal", location: "Kathmandu" },
  { title: "UDL (Universal Design for Learning) Training Trainer/Consultant", company: "Forward Looking", location: "Rukum West" },
  { title: "Sales Executive", company: "NIP HOLDINGS PVT LTD", location: "Kathmandu" },
];

export default function TopJobs() {
  return (
    <div>
      {/* -------- Section heading (original: #0261a6) -------- */}
      <h2 className="text-\\\\\\\[#0261a6] text-lg font-bold mb-4">Top Jobs</h2>

      {/* -------- 2-column job card grid -------- */}
      {topJobs.length === 0 ? (
        <p className="text-gray-400 text-sm">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topJobs.map((job, i) => (
            <div
              key={i}
              className="border border-[#efefef] rounded p-4 hover:shadow-md hover:border-gray-300 transition-all duration-200 bg-white"
            >
              <div className="flex gap-3">
                {/* Company logo */}
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}\\\\\\\&background=0261a6\\\\\\\&color=fff\\\\\\\&size=48\\\\\\\&bold=true`}
                  alt={job.company}
                  className="w-12 h-12 rounded shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#0261a6] hover:underline line-clamp-2 leading-snug"
                    title={job.title}
                  >
                    {job.title}
                  </a>
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
            </div>
          ))}
        </div>
      )}

      {/* -------- See more jobs by types -------- */}
      <div className="mt-6 pt-3 border-t border-\\\\\\\[#efefef]">
        <a href="#" className="text-sm text-\\\\\\\[#0261a6] hover:underline font-medium">
          See more jobs by types &rarr;
        </a>
      </div>
    </div>
  );
}