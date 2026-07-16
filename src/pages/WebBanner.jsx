import { Link } from "react-router-dom";

const packages = [
  {
    name: "Standard",
    price: "Rs. 5,000",
    period: "/month",
    features: ["728x90 banner placement", "30-day campaign", "Standard rotation", "Basic analytics report"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "Rs. 12,000",
    period: "/month",
    features: ["All placement options", "60-day campaign", "Priority ad rotation", "Detailed analytics", "Dedicated account manager"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Custom placements", "Flexible campaign duration", "Guaranteed impressions", "Real-time reporting dashboard", "Strategy consultation"],
    highlighted: false,
  },
];

const placements = [
  { title: "Homepage Banner", desc: "Prime top-of-page placement visible to every visitor", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
  { title: "Category Pages", desc: "Target your audience on specific job category pages", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" },
  { title: "Sponsored Listings", desc: "Premium highlighted placement in search results", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },
];

export default function WebBanner() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0261a6] via-[#0261a6] to-[#015c9e] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Advertise With Us</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">Reach thousands of active job seekers and professionals across Nepal</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10 mb-16">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#0261a6]">200K+</div>
            <div className="text-sm text-gray-500 mt-1">Monthly Visitors</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#0261a6]">1M+</div>
            <div className="text-sm text-gray-500 mt-1">Page Views / Month</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#0261a6]">5K+</div>
            <div className="text-sm text-gray-500 mt-1">Active Companies</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Banner Placements</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Choose from multiple premium ad placements to reach your target audience</p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {placements.map((p) => (
            <div key={p.title} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-[#0261a6] rounded-full"></span>
                  <h3 className="font-bold text-gray-900">{p.title}</h3>
                </div>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Choose Your Package</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Flexible advertising solutions designed for businesses of all sizes</p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 flex flex-col ${
                  pkg.highlighted
                    ? "bg-gradient-to-br from-[#0261a6] to-[#015c9e] text-white shadow-xl ring-2 ring-[#fc8b07] ring-offset-2"
                    : "bg-gray-50 text-gray-900 shadow-md hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fc8b07] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  {pkg.period && (
                    <span className={`text-sm ${pkg.highlighted ? "text-white/70" : "text-gray-400"}`}>{pkg.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.highlighted ? "text-green-300" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={pkg.highlighted ? "text-white/90" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-auto py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-white text-[#0261a6] hover:bg-gray-100 hover:shadow-lg"
                      : "bg-[#0261a6] text-white hover:bg-[#015c9e] hover:shadow-lg"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Advertise With JobsNepal?</h2>
            <p className="text-gray-500 mb-8">Get the best ROI for your advertising budget</p>
            <div className="space-y-5">
              {[
                { title: "Targeted Audience", desc: "Reach active job seekers who are actively looking for opportunities", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                { title: "High Engagement", desc: "Users spend quality time browsing listings and company profiles", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                { title: "Brand Visibility", desc: "Premium placements ensure your brand is seen by thousands daily", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
                { title: "Measurable Results", desc: "Detailed analytics on impressions, clicks, and campaign engagement", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#0261a6]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#0261a6] transition-colors">
                    <svg className="w-6 h-6 text-[#0261a6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
              alt="Marketing strategy"
              className="rounded-2xl shadow-lg w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#fc8b07] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-lg">
              Maximize Your Reach
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0261a6] to-[#015c9e] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Boost Your Brand?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Get in touch with our advertising team to create a custom campaign tailored to your goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-[#0261a6] font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300">Contact Our Team</Link>
            <a href="mailto:advertise@jobsnepal.com" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:shadow-lg transition-all duration-300">Email Inquiries</a>
          </div>
        </div>
      </section>
    </div>
  );
}
