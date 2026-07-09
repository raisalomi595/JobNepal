import { Link } from "react-router-dom";

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
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.company)}&background=0261a6&color=fff&size=50&bold=true`}
                  alt={item.company}
                  className="w-[50px] h-[50px] border border-[#efefef] rounded p-[3px] shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-700 font-semibold truncate leading-tight mb-1">
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
