const instantJobs = [
  { title: "Accountant (Construction Company)", deadline: "4 Days" },
  { title: "Crew Member (All-rounder) - Female", deadline: "2 Days" },
];

const hotJobs = [
  { company: "United Mission to Nepal Medical and Development Trust Okhaldhunga Community Hospital", jobs: ["Consultant in General Practice (MDGP-EM) & Obstetrician/Gynaecologist"] },
  { company: "PeaceWin Nepal", jobs: ["Tender Notice", "Annual Audit Proposal Notice"] },
  { company: "Manavsewa Ashram", jobs: ["Sub-Engineer", "Health Person", "Operation Officer", "Supervisor", "International Coordination Assistant", "Legal Officer"] },
  { company: "Oxfam in Nepal", jobs: ["Call for Consultancy Roster", "Framework Agreement for Digital Platform & Services for Cash and Voucher Assistance (CVA)"] },
  { company: "Mercy Corps", jobs: ["Senior Advocacy and Influencing Officer", "Request for Quotation for Consultancy service"] },
  { company: "Heifer International Nepal", jobs: ["Request for Proposal (RFP) for Project Final Evaluation"] },
  { company: "DanChurchAid (DCA)", jobs: ["Trainee (Programme Funding Associate)", "ToR for Youth Innovation Challenge"] },
  { company: "World Vision International Nepal", jobs: ["VACANCY ANNOUNCEMENT: MULTIPLE POSITIONS"] },
  { company: "CARE Nepal", jobs: ["Vacancy Announcement for Various Positions", "REQUEST FOR QUOTATION (RFQ)"] },
];

export default function JobSidebar() {
  return (
    <div className="space-y-6">

      {/* ===== Section 1: Instant Job PLACEMENT ===== */}
      <div>
        <h2 className="text-\[#0261a6] text-sm font-bold uppercase mb-2">
          Instant Job PLACEMENT
        </h2>
        <div className="border border-\[#efefef] rounded overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-\[#0261a6] text-white uppercase text-\[10px]">
                <th className="text-left px-3 py-2 font-semibold">Job Title</th>
                <th className="text-center px-3 py-2 font-semibold w-\[70px]">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {instantJobs.map((job, i) => (
                <tr key={i} className="border-t border-\[#efefef]">
                  <td className="px-3 py-2">
                    <a href="#" className="text-\[#0261a6] hover:underline block truncate max-w-\[180px]" title={job.title}>
                      {job.title}
                    </a>
                  </td>
                  <td className="px-3 py-2 text-center text-gray-500 whitespace-nowrap">{job.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

   
      <div>
        <h2 className="text-\[#0261a6] text-sm font-bold uppercase mb-2">
          Hot Jobs
        </h2>
        <div className="border border-\[#efefef] p-2.5 rounded">
          <div className="max-h-\[500px] overflow-y-auto space-y-1">
            {hotJobs.map((item, i) => (
              <div key={i} className="flex gap-3 py-3 border-b border-\[#f6f6f6] last:border-b-0">
               
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.company)}\&background=0261a6\&color=fff\&size=50\&bold=true`}
                  alt={item.company}
                  className="w-[50px] h-[50px] border border-[#efefef] rounded p-[3px] shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-700 font-semibold truncate leading-tight mb-1">
                    {item.company}
                  </p>
                  {item.jobs.map((job, j) => (
                    <a
                      key={j}
                      href="#"
                      className="block text-sm text-[#0261a6] hover:underline truncate leading-tight mb-0.5 pl-4 relative"
                      title={job}
                    >
                      <span className="absolute left-0 top-\[7px] w-\[5px] h-\[5px] rounded-full border border-gray-400"></span>
                      {job}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


</div>
  )
}