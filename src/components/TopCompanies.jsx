const companies = [
  {
    name: "CG Corp Global",
    logo: "https://www.chaudharygroup.com/storage/Chaudhary%20Group/Yj34Bp2Utj2pDBi3p63jhDxTo1sYu0R6hYTweyhs.png",
  },
  {
    name: "Ncell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ncell_logo.svg",
  },
  {
    name: "Nabil Bank",
    logo: "https://assets.nabilbank.com/uploads/logo/NabilBank42Years.gif",
  },
  {
    name: "Nepal Telecom",
    logo: "https://www.ntc.net.np/_nuxt/img/logo.6aa152d.png",
  },
  {
    name: "Surya Nepal",
    logo: "https://www.snpl.com.np/uploads/logo/logo.png",
  },
  {
    name: "Yeti Airlines",
    logo: "https://yetiairlines.com/images/logo.png",
  },
  {
    name: "Pathao Nepal",
    logo: "https://pathao.com/np/wp-content/uploads/sites/7/2023/10/Pathao-logo.svg",
  },
  {
    name: "Gorkha Brewery",
    logo: "https://gorkhabrewery.com/media/ti3attkq/brand-mark.svg",
  },
];

export default function TopCompanies() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
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
