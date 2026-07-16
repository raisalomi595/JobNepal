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

const team = [
  { name: "Rajesh Sharma", role: "CEO & Founder", img: "https://ui-avatars.com/api/?name=Rajesh+Sharma&background=0261a6&color=fff&size=128&bold=true" },
  { name: "Anita Thapa", role: "Operations Director", img: "https://ui-avatars.com/api/?name=Anita+Thapa&background=fc8b07&color=fff&size=128&bold=true" },
  { name: "Sagar Pandey", role: "Head of Technology", img: "https://ui-avatars.com/api/?name=Sagar+Pandey&background=0261a6&color=fff&size=128&bold=true" },
  { name: "Priya Koirala", role: "Marketing Lead", img: "https://ui-avatars.com/api/?name=Priya+Koirala&background=fc8b07&color=fff&size=128&bold=true" },
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

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Meet Our Team</h2>
          <p className="text-gray-500">The passionate people behind JobsNepal</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member) => (
            <div key={member.name} className="group bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative mx-auto mb-5 w-28 h-28">
                <img src={member.img} alt={member.name} className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 group-hover:border-[#0261a6] transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0261a6] hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </span>
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0261a6] hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </span>
              </div>
            </div>
          ))}
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
