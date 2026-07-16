import { Link } from "react-router-dom";
import { useState } from "react";

const faqCategories = [
  {
    category: "Getting Started",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    items: [
      { q: "How do I create an account?", a: "Click on 'Sign Up' in the navbar. Fill in your email, create a password, and complete your profile. It's completely free for job seekers." },
      { q: "Is JobsNepal.com really free?", a: "Yes! JobsNepal.com has always been free for job seekers and always will be. Employers pay only for premium services." },
      { q: "How do I complete my profile?", a: "After signing up, go to your profile settings. Add your work experience, education, skills, and upload your resume." },
    ],
  },
  {
    category: "Job Search & Applications",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    items: [
      { q: "How do I search for jobs?", a: "Use the search bar on the homepage or go to the Find Jobs page. You can filter by keyword, location, category, and job type." },
      { q: "How do I apply for a job?", a: "Create an account, complete your profile, and click 'Apply Now' on any job listing. You may need to upload your resume." },
      { q: "Can I save jobs to apply later?", a: "Yes! Click the 'Save Job' button on any job listing to save it to your favorites for later review." },
    ],
  },
  {
    category: "Employers & Recruiters",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    items: [
      { q: "How can employers post jobs?", a: "Register your company through the 'I am Hiring' page. Once approved, you can post job vacancies and manage applications." },
      { q: "How much does it cost to post a job?", a: "Basic job posting is free. Premium features like featured listings and direct recruitment services are available at competitive rates." },
      { q: "Can I search for candidate resumes?", a: "Yes, employers with registered accounts can search our database of qualified candidate resumes." },
    ],
  },
  {
    category: "Account & Security",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    items: [
      { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page. Enter your registered email and we'll send you a password reset link." },
      { q: "Is my personal information safe?", a: "Absolutely. We use industry-standard encryption and security measures to protect your personal data." },
      { q: "How do I delete my account?", a: "Contact our support team at info@jobsnepal.com and we'll assist you with account deletion." },
    ],
  },
];

export default function Faq() {
  const [openCategory, setOpenCategory] = useState(0);
  const [openItem, setOpenItem] = useState(null);
  const [search, setSearch] = useState("");

  const allItems = faqCategories.flatMap((c) => c.items.map((item) => ({ ...item, category: c.category })));
  const filtered = search.trim()
    ? allItems.filter((item) => item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0261a6] via-[#0261a6] to-[#015c9e] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">Everything you need to know about JobsNepal.com</p>
          <div className="max-w-xl mx-auto relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your question..."
              className="w-full pl-12 pr-5 py-4 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fc8b07] shadow-xl"
            />
            {search.trim() && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {search.trim() ? (
          <>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Search Results ({filtered.length})</h2>
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-12 md:p-16 text-center">
                <svg className="w-20 h-20 text-gray-200 mx-auto mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 text-lg mb-2">No results found</p>
                <p className="text-gray-400 text-sm">Try a different search term or browse the categories below.</p>
                <button onClick={() => setSearch("")} className="mt-6 text-[#0261a6] font-medium hover:underline text-sm">Clear search</button>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setOpenItem(openItem === i ? null : i)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <span className="text-xs text-[#0261a6] font-semibold uppercase tracking-wide">{item.category}</span>
                        <h3 className="font-medium text-gray-900 mt-0.5">{item.q}</h3>
                      </div>
                      <svg className={`w-5 h-5 text-[#0261a6] shrink-0 transition-transform duration-300 ${openItem === i ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {openItem === i && (
                      <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{item.a}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {faqCategories.map((cat, ci) => (
              <div key={cat.category} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setOpenCategory(openCategory === ci ? null : ci)}
                  className="w-full text-left px-6 py-5 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                >
                  <div className="w-10 h-10 bg-[#0261a6]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#0261a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-gray-900">{cat.category}</h2>
                    <span className="text-xs text-gray-400">{cat.items.length} questions</span>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openCategory === ci ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openCategory === ci && (
                  <div className="divide-y divide-gray-100">
                    {cat.items.map((item, ii) => (
                      <div key={ii}>
                        <button
                          onClick={() => setOpenItem(openItem === `${ci}-${ii}` ? null : `${ci}-${ii}`)}
                          className="w-full text-left px-6 py-3.5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm text-gray-700 pr-4">{item.q}</span>
                          <svg className={`w-4 h-4 text-[#0261a6] shrink-0 transition-transform duration-300 ${openItem === `${ci}-${ii}` ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openItem === `${ci}-${ii}` && (
                          <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed bg-gray-50/50">{item.a}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-[#0261a6] to-[#015c9e] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Still Have Questions?</h2>
          <p className="text-white/80 mb-6">We're here to help. Reach out to our support team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-[#0261a6] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300">Contact Us</Link>
            <a href="mailto:info@jobsnepal.com" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 hover:shadow-lg transition-all duration-300">Email Us</a>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#0261a6] hover:underline font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
