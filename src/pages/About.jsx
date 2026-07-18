import { Link } from "react-router-dom";

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "50K+", label: "Jobs Listed" },
  { value: "200K+", label: "Job Seekers" },
  { value: "5K+", label: "Companies" },
];

const values = [
  {
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    title: "Our Mission",
    desc: "To empower every professional in Nepal to find meaningful work and help every organization build exceptional teams.",
    bg: "bg-[#0261a6]/10",
    iconColor: "text-[#0261a6]",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Our Vision",
    desc: "To be the catalyst that transforms Nepal's employment landscape through technology, trust, and transparency.",
    bg: "bg-[#fc8b07]/10",
    iconColor: "text-[#fc8b07]",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Our Values",
    desc: "Integrity, innovation, and inclusivity drive everything we do. We put people first, always.",
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const testimonials = [
  {
    quote: "JobsNepal helped me land my dream role in just two weeks. The search filters made it easy to find exactly what I was looking for.",
    name: "Sagar Acharya",
    role: "Senior Developer at TechCorp",
    img: "https://ui-avatars.com/api/?name=Sagar+Acharya&background=0261a6&color=fff&size=80&bold=true",
  },
  {
    quote: "We've hired 12+ team members through JobsNepal. The quality of candidates is consistently excellent and the process is seamless.",
    name: "Rita Sharma",
    role: "HR Director, CloudBase Nepal",
    img: "https://ui-avatars.com/api/?name=Rita+Sharma&background=fc8b07&color=fff&size=80&bold=true",
  },
  {
    quote: "As a fresh graduate, I was nervous about job hunting. JobsNepal made it simple — from creating my profile to landing my first interview.",
    name: "Aryan Thapa",
    role: "Junior Analyst at Nepal Investment Bank",
    img: "https://ui-avatars.com/api/?name=Aryan+Thapa&background=2d6a4f&color=fff&size=80&bold=true",
  },
  {
    quote: "The reach and response time on JobsNepal is unmatched. We posted a vacancy and had qualified applicants within hours.",
    name: "Meena Poudel",
    role: "Operations Manager, dZi Foundation",
    img: "https://ui-avatars.com/api/?name=Meena+Poudel&background=6b3fa0&color=fff&size=80&bold=true",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0261a6] via-[#0261a6] to-[#015c9e] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About JobsNepal</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nepal's most trusted platform connecting talent with opportunity since 2009
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10 mb-16 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#0261a6] mb-1">{s.value}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 md:space-y-5 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                JobsNepal.com was founded in 2009 with a simple mission: make job searching and recruitment in Nepal
                easier, faster, and more accessible for everyone.
              </p>
              <p>
                What started as a small platform has grown into Nepal's leading online job portal, serving over
                200,000 job seekers and 5,000+ companies across every sector imaginable.
              </p>
              <p>
                We believe that the right job can change a life, and the right hire can transform a company.
                Every day, we work to make those connections happen.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Office team collaborating"
                className="rounded-2xl shadow-lg w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#fc8b07] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-lg">
                15+ Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {values.map((v) => (
              <div key={v.title} className="group text-center p-6 md:p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className={`w-16 h-16 ${v.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-8 h-8 ${v.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What People Say</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Real stories from job seekers and employers who trust JobsNepal</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0261a6] to-[#015c9e] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Whether you're looking for a job or hiring talent, we're here to help you succeed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/find-job" className="bg-white text-[#0261a6] font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300">Find Jobs</Link>
            <Link to="/hire" className="bg-[#fc8b07] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#e07d09] hover:shadow-lg transition-all duration-300">Hire Talent</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
