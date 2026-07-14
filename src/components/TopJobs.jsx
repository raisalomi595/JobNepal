import { Link } from "react-router-dom";

const companyLogos = {
  "Welthungerhilfe": "https://img.jobsnepal.com/x-small/1FW1a30TFU3Goy3tvf8SNo9u5U66TRHDaJjMbply.jpeg",
  "Action Nepal": "https://img.jobsnepal.com/x-small/1SPimNMMmaMtvjRDjtPwqB94nuZgldT3MgOMmJis.jpeg",
  "JobsNepal.com Direct Recruitment Service": "https://img.nepaljobs.com/x-small/dXNNyUBUNryeFYOrks4eMUBEoxpS1CGwMWlY6eGu.jpeg",
  "dZi Foundation": "https://img.jobsnepal.com/x-small/bDFMNxPBtrQ4FoVm31BWiq6d4XXXlq3DDljP6dAM.jpeg",
  "Doublard Design Pvt. Ltd": "https://img.jobsnepal.com/x-small/uc9bbHYHI2qbmsxfhLp3XoJjsFKzgU2N45xkwruE.png",
  "NGO Federation of Nepal": "https://img.jobsnepal.com/x-small/0DZPIqyOf8GFwp1l6oByNNFAhBnTzcmo0Y0HaIop.jpeg",
  "HERD International": "https://img.jobsnepal.com/x-small/0KQw35oFeE95pLiJbC3ccuH5DSuY5Us5aWfzsaTY.jpeg",
  "Alliance Asia Nepal Private Ltd": "https://img.jobsnepal.com/x-small/yLhdPtOZScb7hYDlnnL6CkbXoImDd4P72UdkbI8E.jpg",
  "Albelo Multi Trading Pvt Ltd": "https://img.jobsnepal.com/x-small/2avHrdA1MfFidXozyELoCss8WutNBZ5LtSy4c2pz.jpg",
  "Forward Looking": "https://img.jobsnepal.com/x-small/TW2nmLETaUvhZUjKfKDDuzp7qejD0zqQ35Mfdhip.jpg",
};

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
                <div className="relative shrink-0">
                  <img
                    src={companyLogos[job.company] || `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=0261a6&color=fff&size=48&bold=true`}
                    alt={job.company}
                    className="w-12 h-12 rounded"
                  />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#fc8b07] text-white text-[9px] font-bold px-1 py-0.5 rounded flex items-center gap-0.5 shadow-sm">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Top
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-sm font-semibold text-[#0261a6] hover:underline line-clamp-2 leading-snug"
                    title={job.title}
                  >
                    {job.title}
                  </p>
                  <p className="text-xs text-gray-600 font-medium mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#0261a6]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    {job.company}
                  </p>
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
