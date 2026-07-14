import { Link } from "react-router-dom";

const companyLogos = {
  "Welthungerhilfe": "https://img.jobsnepal.com/x-small/1FW1a30TFU3Goy3tvf8SNo9u5U66TRHDaJjMbply.jpeg",
  "HERD International": "https://img.jobsnepal.com/x-small/0KQw35oFeE95pLiJbC3ccuH5DSuY5Us5aWfzsaTY.jpeg",
  "Doublard Design Pvt. Ltd": "https://img.jobsnepal.com/x-small/uc9bbHYHI2qbmsxfhLp3XoJjsFKzgU2N45xkwruE.png",
  "Action Nepal": "https://img.jobsnepal.com/x-small/1SPimNMMmaMtvjRDjtPwqB94nuZgldT3MgOMmJis.jpeg",
  "Alliance Asia Nepal Private Ltd": "https://img.jobsnepal.com/x-small/yLhdPtOZScb7hYDlnnL6CkbXoImDd4P72UdkbI8E.jpg",
  "dZi Foundation": "https://img.jobsnepal.com/x-small/bDFMNxPBtrQ4FoVm31BWiq6d4XXXlq3DDljP6dAM.jpeg",
};

const jobs = [
  { id: 201, title: "Senior Communication and Monitoring Officer", company: "HERD International", location: "Lalitpur", type: "Full-time", salary: "Rs. 80k - 100k", posted: "2 days ago" },
  { id: 202, title: "Laravel Developer - Proprietary CMS & ERP Integration", company: "Doublard Design Pvt. Ltd", location: "Kathmandu", type: "Full-time", salary: "Rs. 70k - 90k", posted: "3 days ago" },
  { id: 203, title: "Infrastructure Development Officer", company: "dZi Foundation", location: "Panchthar District", type: "Contract", salary: "Rs. 90k - 120k", posted: "1 day ago" },
  { id: 204, title: "Request for Proposals (RFP): Video Production", company: "Alliance Asia Nepal Private Ltd", location: "Lalitpur", type: "Contract", salary: "Negotiable", posted: "5 days ago" },
  { id: 205, title: "Registration Notice", company: "Action Nepal", location: "Kathmandu", type: "Full-time", salary: "As per org", posted: "1 week ago" },
  { id: 206, title: "Terms of Reference for Statutory Audit", company: "Welthungerhilfe", location: "Lalitpur", type: "Full-time", salary: "Rs. 120k - 150k", posted: "4 days ago" },
];

const typeColors = {
  "Full-time": "bg-green-100 text-green-700",
  "Contract": "bg-orange-100 text-orange-700",
};

export default function FeaturedJobs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0261a6]">Featured Jobs</h2>
          <p className="mt-2 text-gray-500">Explore the latest opportunities from Nepal's top companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/job/${job.id}`}
              className="bg-white border border-[#efefef] rounded p-5 hover:shadow-md hover:border-gray-300 transition-all duration-300 group block"
            >
              <div className="flex items-start justify-between mb-3">
                <img
                  src={companyLogos[job.company] || `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=0261a6&color=fff&size=48&bold=true`}
                  alt={job.company}
                  className="w-11 h-11 border border-[#efefef] rounded object-contain p-1"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=0261a6&color=fff&size=48&bold=true`;
                  }}
                />
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[job.type]}`}>{job.type}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#0261a6] transition-colors mb-0.5">{job.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{job.company}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="font-medium text-gray-600">{job.salary}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">{job.posted}</span>
                <span className="text-xs font-medium text-[#0261a6] hover:underline">Apply Now →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/find-job" className="inline-block text-sm font-semibold text-[#0261a6] border border-[#0261a6] hover:bg-[#0261a6] hover:text-white px-6 py-2.5 rounded transition-colors">View All Jobs</Link>
        </div>
      </div>
    </section>
  );
}
