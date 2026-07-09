import { useParams, Link } from "react-router-dom";

const allJobs = [
  { id: 1, title: "Accountant (Construction Company)", company: "JobsNepal.com Direct Recruitment Service", location: "Kupondole, Lalitpur", type: "Full-time", salary: "Negotiable", description: "We are looking for an experienced Accountant to join our construction company. The ideal candidate will have at least 3 years of experience in accounting, preferably in the construction industry.", requirements: ["Bachelor's degree in Accounting or Finance", "Minimum 3 years of experience", "Knowledge of accounting software", "Strong analytical skills"] },
  { id: 2, title: "Crew Member (All-rounder) - Female", company: "JobsNepal.com Direct Recruitment Service", location: "Lalitpur", type: "Full-time", salary: "Negotiable", description: "We are hiring female crew members for various roles. This position requires flexibility and willingness to learn different aspects of the business.", requirements: ["Minimum SLC passed", "Good communication skills", "Team player", "Willing to work in shifts"] },
  { id: 101, title: "Infrastructure Development Officer", company: "Human Practice Foundation", location: "Panchthar District", type: "Full-time", salary: "Negotiable", description: "Human Practice Foundation is seeking an Infrastructure Development Officer to oversee infrastructure projects in Panchthar District.", requirements: ["Bachelor's degree in Civil Engineering", "Minimum 5 years of experience", "Experience in rural infrastructure projects", "Knowledge of local language"] },
  { id: 102, title: "Terms of Reference for Statutory Audit", company: "Welthungerhilfe", location: "Lalitpur", type: "Contract", salary: "Negotiable", description: "Welthungerhilfe invites proposals for statutory audit services for the fiscal year.", requirements: ["Registered audit firm", "Experience with INGOs", "Minimum 5 years in practice"] },
  { id: 103, title: "Senior Communication and Monitoring Officer", company: "HERD International", location: "Lalitpur", type: "Full-time", salary: "Negotiable", description: "HERD International is looking for a Senior Communication and Monitoring Officer.", requirements: ["Master's degree in relevant field", "Minimum 5 years experience", "Strong writing skills"] },
  { id: 104, title: "Laravel Developer - Proprietary CMS & ERP Integration", company: "Doublard Design Pvt. Ltd", location: "Kathmandu", type: "Full-time", salary: "Rs. 80k - 120k", description: "We are seeking a skilled Laravel Developer for CMS and ERP integration projects.", requirements: ["Expert in Laravel framework", "Experience with ERP systems", "Knowledge of PHP, MySQL", "Minimum 3 years experience"] },
];

const topJobsExt = [
  { id: 105, title: "Registration Notice", company: "Action Nepal", location: "Kathmandu", type: "Contract", salary: "Negotiable", description: "Registration notice for various positions.", requirements: ["As per organization guidelines"] },
  { id: 106, title: "Request for Proposals (RFP): Video Production Company", company: "Alliance Asia Nepal Private Ltd", location: "Lalitpur", type: "Contract", salary: "Negotiable", description: "RFP for video production services.", requirements: ["Experience in video production", "Portfolio submission required"] },
  { id: 107, title: "CALL FOR EXPRESSION OF INTEREST (EOI) For Project Partners", company: "Welthungerhilfe", location: "Lalitpur", type: "Contract", salary: "Negotiable", description: "EOI for project partnership.", requirements: ["Registered organization", "Experience in relevant sector"] },
  { id: 108, title: "Executive Assistant to Country Representative", company: "WWF Nepal", location: "Kathmandu", type: "Full-time", salary: "Negotiable", description: "WWF Nepal seeks an Executive Assistant.", requirements: ["Bachelor's degree", "5+ years experience", "Excellent organizational skills"] },
  { id: 109, title: "Accountant (Construction Company)", company: "JobsNepal.com Direct Recruitment Service", location: "Kupondole, Lalitpur", type: "Full-time", salary: "Negotiable", description: "Accountant needed for construction company.", requirements: ["Bachelor's in Accounting", "3+ years experience"] },
  { id: 110, title: "Textile & General Sourcing", company: "Albelo Multi Trading Pvt Ltd", location: "Lalitpur", type: "Full-time", salary: "Negotiable", description: "Textile sourcing position available.", requirements: ["Knowledge of textile industry", "Sourcing experience"] },
  { id: 111, title: "EoI for EPC services for Peanut Processing & Pilgrim Market Hub", company: "dZi Foundation", location: "Lalitpur", type: "Contract", salary: "Negotiable", description: "EOI for EPC services.", requirements: ["Experience in EPC projects"] },
  { id: 112, title: "FARM HOUSE WORKER REQUIRED", company: "GAU FARKA AGRO FARM", location: "Pokhara", type: "Full-time", salary: "Negotiable", description: "Farm house worker needed.", requirements: ["Physical fitness", "Agricultural knowledge"] },
  { id: 113, title: "Vacancy Announcement for Various Positions", company: "CARE Nepal", location: "Madhesh Province", type: "Full-time", salary: "Negotiable", description: "Various positions available.", requirements: ["Varies by position"] },
  { id: 114, title: "Call for Proposal Publication Notice", company: "NGO Federation of Nepal", location: "Kathmandu", type: "Contract", salary: "Negotiable", description: "Call for proposals.", requirements: ["As per guidelines"] },
  { id: 115, title: "UDL (Universal Design for Learning) Training Trainer/Consultant", company: "Forward Looking", location: "Rukum West", type: "Contract", salary: "Negotiable", description: "UDL training consultant needed.", requirements: ["UDL expertise", "Training experience"] },
  { id: 116, title: "Sales Executive", company: "NIP HOLDINGS PVT LTD", location: "Kathmandu", type: "Full-time", salary: "Negotiable", description: "Sales executive position.", requirements: ["Sales experience", "Good communication"] },
  { id: 201, title: "Senior Frontend Developer", company: "TechCorp Nepal", location: "Kathmandu", type: "Full-time", salary: "Rs. 120k - 150k", description: "Senior frontend developer needed for exciting projects.", requirements: ["React expertise", "5+ years experience", "TypeScript knowledge"] },
  { id: 202, title: "Data Analyst", company: "CloudMiner Pvt. Ltd.", location: "Lalitpur", type: "Full-time", salary: "Rs. 80k - 100k", description: "Data analyst position.", requirements: ["SQL expertise", "Python", "Data visualization"] },
  { id: 203, title: "UX/UI Designer", company: "DesignStudio Nepal", location: "Remote", type: "Contract", salary: "Rs. 70k - 90k", description: "UX/UI designer needed.", requirements: ["Figma expertise", "Portfolio", "3+ years experience"] },
  { id: 204, title: "Python Backend Engineer", company: "InnovateTech", location: "Pokhara", type: "Full-time", salary: "Rs. 100k - 130k", description: "Python backend engineer.", requirements: ["Python expertise", "Django/Flask", "API development"] },
  { id: 205, title: "Product Manager", company: "GrowthLab", location: "Kathmandu", type: "Full-time", salary: "Rs. 150k - 200k", description: "Product manager needed.", requirements: ["5+ years PM experience", "Tech background"] },
  { id: 206, title: "DevOps Engineer", company: "CloudBase", location: "Lalitpur", type: "Full-time", salary: "Rs. 130k - 160k", description: "DevOps engineer needed.", requirements: ["AWS/Azure", "Docker", "Kubernetes"] },
];

const jobDatabase = [...allJobs, ...topJobsExt];

export default function JobDetail() {
  const { id } = useParams();
  const job = jobDatabase.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-500 mb-8">The job you are looking for does not exist or has been removed.</p>
          <Link to="/" className="bg-[#0261a6] text-white px-6 py-2.5 rounded font-medium hover:bg-[#015c9e] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#0261a6]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Job Detail</span>
        </nav>

        <div className="bg-white border border-[#efefef] rounded p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=0261a6&color=fff&size=64&bold=true`}
              alt={job.company}
              className="w-16 h-16 rounded shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <p className="text-gray-600 font-medium">{job.company}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">{job.type}</span>
                <span className="font-medium text-gray-700">{job.salary}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#efefef] pt-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Job Description</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Requirements</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#efefef] flex flex-col sm:flex-row gap-3">
            <button className="bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold px-8 py-3 rounded transition-colors text-center">
              Apply Now
            </button>
            <button className="border border-[#0261a6] text-[#0261a6] hover:bg-[#0261a6] hover:text-white font-semibold px-8 py-3 rounded transition-colors text-center">
              Save Job
            </button>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/" className="text-sm text-[#0261a6] hover:underline font-medium">&larr; Back to Jobs</Link>
        </div>
      </div>
    </div>
  );
}
