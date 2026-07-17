import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Phone",
    value: "01-544 7709",
    bg: "bg-[#0261a6]/10",
    iconColor: "text-[#0261a6]",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: "info@jobsnepal.com",
    bg: "bg-[#fc8b07]/10",
    iconColor: "text-[#fc8b07]",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Location",
    value: "Kupondole, Lalitpur",
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0261a6] via-[#0261a6] to-[#015c9e] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or partnership opportunities.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10 mb-16">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {contactInfo.map((info) => (
            <div key={info.label} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 ${info.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                <svg className={`w-7 h-7 ${info.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{info.label}</p>
                <p className="text-sm md:text-base font-semibold text-gray-900 mt-0.5">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input type="text" placeholder="John Doe" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-2 focus:ring-[#0261a6]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-2 focus:ring-[#0261a6]/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input type="text" placeholder="How can we help you?" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-2 focus:ring-[#0261a6]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-400">*</span></label>
                  <textarea rows={5} placeholder="Write your message here..." className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-2 focus:ring-[#0261a6]/20 transition-all resize-none" />
                </div>
                <button type="submit" className="w-full sm:w-auto bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold px-10 py-3.5 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2 hover:shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0261a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Our Location
              </h2>
              <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.507!2d85.3165!3d27.6898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e5a8b5b7c1%3A0x1e5b8c9d3a2f1e0d!2sKupondole%2C+Lalitpur!5e0!3m2!1sen!2snp!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "220px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold text-gray-900">JobsNepal Pvt. Ltd.</p>
                <p>Kupondole Road, Patan 44600</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0261a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Office Hours
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">Sunday - Thursday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500">Saturday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-[#0261a6] bg-blue-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Why JobNepal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Trusted by Thousands</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We connect Nepal's top talent with leading employers across every industry.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-14">
            {[
              { number: "10,000+", label: "Active Jobs", icon: "💼", desc: "Listed across all categories" },
              { number: "50,000+", label: "Happy Candidates", icon: "🎯", desc: "Successfully placed in jobs" },
              { number: "2,500+", label: "Partner Companies", icon: "🏢", desc: "Trust us for recruitment" },
              { number: "12+", label: "Years of Service", icon: "📅", desc: "Serving Nepal since 2014" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 md:p-6 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-[#0261a6]">{stat.number}</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-1 hidden md:block">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We're Here to Help You Succeed</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Whether you're a job seeker looking for your dream role or an employer searching for top talent, 
                  our dedicated team works tirelessly to make the perfect match. With over a decade of experience 
                  in Nepal's recruitment landscape, we understand what it takes to build great careers and strong teams.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: "✓", text: "Free job search and application for candidates" },
                    { icon: "✓", text: "Verified employers and genuine vacancies" },
                    { icon: "✓", text: "Dedicated support throughout your journey" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{item.icon}</span>
                      <span className="text-sm text-gray-600">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0261a6] to-[#015c9e] rounded-2xl p-8 text-white text-center">
                <div className="text-5xl mb-4">🤝</div>
                <p className="text-lg font-bold mb-2">Need Personalized Help?</p>
                <p className="text-sm text-white/80 mb-6">Our support team typically responds within 2 hours during business hours.</p>
                <a href="mailto:support@jobsnepal.com" className="inline-block bg-white text-[#0261a6] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                  support@jobsnepal.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 text-center pb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0261a6] hover:underline font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
