const companies = [
  { name: "Google", initial: "G", color: "bg-blue-500" },
  { name: "Microsoft", initial: "M", color: "bg-green-500" },
  { name: "Amazon", initial: "A", color: "bg-orange-500" },
  { name: "Apple", initial: "A", color: "bg-gray-800" },
  { name: "Meta", initial: "M", color: "bg-blue-600" },
  { name: "Netflix", initial: "N", color: "bg-red-500" },
  { name: "Spotify", initial: "S", color: "bg-green-600" },
  { name: "Tesla", initial: "T", color: "bg-red-600" },
];

export default function TopCompanies() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {/* ✅ Fixed: removed all the backslashes */}
          <h2 className="text-2xl font-bold text-[#0261a6]">
            Top Hiring Companies
          </h2>
          <p className="mt-2 text-gray-500">
            Thousands of leading companies trust us to find the best talent
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <a key={company.name} href="#" className="group flex flex-col items-center gap-2">
              <div className={`w-20 h-20 md:w-24 md:h-24 ${company.color} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}>
                <span className="text-2xl md:text-3xl font-bold text-white">{company.initial}</span>
              </div>
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">{company.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}