import { Link } from "react-router-dom";

const steps = [
  { num: "01", title: "Requirement Analysis", desc: "We meet with you to understand your hiring needs, company culture, and role requirements." },
  { num: "02", title: "Sourcing & Screening", desc: "Our team sources candidates through our network and screens them for skills and fit." },
  { num: "03", title: "Interview Coordination", desc: "We schedule and coordinate interviews, handling all logistics and feedback collection." },
  { num: "04", title: "Offer & Onboarding", desc: "We assist with offer negotiation, reference checks, and smooth onboarding." },
];

const benefits = [
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Fast Turnaround", desc: "Qualified candidates delivered within days, not weeks." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Quality Guaranteed", desc: "Every candidate is thoroughly vetted before presentation." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Expert Team", desc: "Recruiters with deep domain expertise across industries." },
  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Cost Effective", desc: "Pay only on successful placement. No hidden fees." },
];

const industries = [
  "Information Technology", "Banking & Finance", "Healthcare", "Hospitality & Tourism",
  "NGO / INGO", "Education", "Engineering & Construction", "Sales & Marketing",
];

export default function DirectRecruitment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0261a6] via-[#0261a6] to-[#015c9e] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=600&fit=crop"
            alt="Professional handshake"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Direct Recruitment Service</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">We find the right talent so you can focus on growing your business</p>
          <Link to="/hire" className="inline-block bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Get Started</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">A streamlined recruitment process designed to deliver results quickly</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 md:gap-4 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative bg-white rounded-2xl shadow-md p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0261a6] text-white text-sm font-bold shrink-0">{step.num}</span>
                {i < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-0.5 bg-gray-200 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {steps.map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-[#0261a6]/40"></span>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Why Choose Our Recruitment Service?</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">We deliver results that matter for your business</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="group p-6 md:p-8 rounded-2xl hover:bg-gray-50 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-[#0261a6]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0261a6] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#0261a6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={b.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-gray-500 mb-8">Our expertise spans across all major industries in Nepal</p>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((ind) => (
                <div key={ind} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#0261a6]/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#0261a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{ind}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Team meeting"
              className="rounded-2xl shadow-lg w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#0261a6] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-lg">
              8+ Industries Covered
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0261a6] to-[#015c9e] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Hire?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Let us help you find the perfect candidate for your organization.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/hire" className="bg-white text-[#0261a6] font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300">Register Your Company</Link>
            <Link to="/" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:shadow-lg transition-all duration-300">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
