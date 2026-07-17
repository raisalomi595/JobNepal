import { companies } from "../data/companies";

export default function TopCompanies() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0261a6]">Top Hiring Companies</h2>
          <p className="mt-2 text-gray-500">Thousands of leading companies trust us to find the best talent</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <a key={company.name} href="#" className="group flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-[60%] max-h-[60%] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=0261a6&color=fff&size=64`;
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">{company.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
