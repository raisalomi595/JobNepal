import { Link } from "react-router-dom";

const companyLogos = {
  "PeaceWin Nepal": "https://img.jobsnepal.com/x-small/UV6YeSOBRNwOTnETyW367sO4ZJa243BLDiUEmhG1.jpeg",
  "Oxfam in Nepal": "https://img.jobsnepal.com/x-small/k2kloZJJHk1hQRYcDDp5WwGxJ3P2kGzkQCk2gs8L.jpeg",
  "Mercy Corps": "https://img.jobsnepal.com/x-small/10XPWKgfE3nSDBDA1ZUUcPLtkGplgRM3Cyy5YjEO.jpg",
};

const instantJobs = [
  { id: 1, title: "Accountant (Construction Company)", deadline: "4 Days" },
  { id: 2, title: "Crew Member (All-rounder) - Female", deadline: "2 Days" },
];

const hotJobs = [
  { id: 3, company: "United Mission to Nepal Medical and Development Trust Okhaldhunga Community Hospital", jobs: ["Consultant in General Practice (MDGP-EM) & Obstetrician/Gynaecologist"] },
  { id: 4, company: "PeaceWin Nepal", jobs: ["Tender Notice", "Annual Audit Proposal Notice"] },
  { id: 5, company: "Manavsewa Ashram", jobs: ["Sub-Engineer", "Health Person", "Operation Officer", "Supervisor", "International Coordination Assistant", "Legal Officer"] },
  { id: 6, company: "Oxfam in Nepal", jobs: ["Call for Consultancy Roster", "Framework Agreement for Digital Platform & Services for Cash and Voucher Assistance (CVA)"] },
  { id: 7, company: "Mercy Corps", jobs: ["Senior Advocacy and Influencing Officer", "Request for Quotation for Consultancy service"] },
  { id: 8, company: "Heifer International Nepal", jobs: ["Request for Proposal (RFP) for Project Final Evaluation"] },
  { id: 9, company: "DanChurchAid (DCA)", jobs: ["Trainee (Programme Funding Associate)", "ToR for Youth Innovation Challenge"] },
  { id: 10, company: "World Vision International Nepal", jobs: ["VACANCY ANNOUNCEMENT: MULTIPLE POSITIONS"] },
  { id: 11, company: "CARE Nepal", jobs: ["Vacancy Announcement for Various Positions", "REQUEST FOR QUOTATION (RFQ)"] },
];

export default function JobSidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[#0261a6] text-sm font-bold uppercase mb-2">
          Instant Job PLACEMENT
        </h2>
        <div className="border border-[#efefef] rounded overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#0261a6] text-white uppercase text-[10px]">
                <th className="text-left px-3 py-2 font-semibold">Job Title</th>
                <th className="text-center px-3 py-2 font-semibold w-[70px]">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {instantJobs.map((job) => (
                <tr key={job.id} className="border-t border-[#efefef]">
                  <td className="px-3 py-2">
                    <Link to={`/job/${job.id}`} className="text-[#0261a6] hover:underline block truncate max-w-[180px]" title={job.title}>
                      {job.title}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-center text-gray-500 whitespace-nowrap">{job.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-[#0261a6] text-sm font-bold uppercase mb-2">
          Hot Jobs
        </h2>
        <div className="border border-[#efefef] p-2.5 rounded">
          <div className="max-h-[500px] overflow-y-auto space-y-1">
            {hotJobs.map((item) => (
              <div key={item.id} className="flex gap-3 py-3 border-b border-[#f6f6f6] last:border-b-0">
                <div className="relative shrink-0">
                  <img
                    src={companyLogos[item.company] || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.company)}&background=0261a6&color=fff&size=50&bold=true`}
                    alt={item.company}
                    className="w-[50px] h-[50px] border border-[#efefef] rounded p-[3px]"
                  />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 rounded flex items-center gap-0.5 shadow-sm">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    HOT
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-700 font-semibold truncate leading-tight mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0 text-[#0261a6]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    {item.company}
                  </p>
                  {item.jobs.map((job, j) => (
                    <Link
                      key={j}
                      to={`/job/${item.id}`}
                      className="block text-sm text-[#0261a6] hover:underline truncate leading-tight mb-0.5 pl-4 relative"
                      title={job}
                    >
                      <span className="absolute left-0 top-[7px] w-[5px] h-[5px] rounded-full border border-gray-400"></span>
                      {job}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
