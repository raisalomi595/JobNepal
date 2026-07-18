import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#272727] text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="text-base text-[#b3b3b3] font-light border-b border-[#3a3838] pb-1 mb-3">For Job Seekers</h3>
                <ul className="space-y-1 text-sm text-[#b3b3b3]">
                  <li><Link to="/signup" className="hover:text-white transition-colors">Register <span className="bg-[#0261a6] text-white text-xs px-2 py-0.5 rounded-full ml-1">Free</span></Link></li>
                  <li><Link to="/find-job" className="hover:text-white transition-colors">Find Job</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base text-[#b3b3b3] font-light border-b border-[#3a3838] pb-1 mb-3">For Employers</h3>
                <ul className="space-y-1 text-sm text-[#b3b3b3]">
                  <li><Link to="/hire" className="hover:text-white transition-colors">Register <span className="bg-[#0261a6] text-white text-xs px-2 py-0.5 rounded-full ml-1">Free</span></Link></li>
                  <li><Link to="/hire" className="hover:text-white transition-colors">Vacancy Announcement</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base text-[#b3b3b3] font-light border-b border-[#3a3838] pb-1 mb-3">Links</h3>
                <ul className="space-y-1 text-sm text-[#b3b3b3]">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/web-banner" className="hover:text-white transition-colors">Advertise</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
            </div>

            <div className="lg:w-[320px]">
              <img
                src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png"
                alt="JobsNepal"
                className="h-8 w-auto mb-4"
              />

              <div className="space-y-2 text-sm text-[#b3b3b3]">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Kupondole Road, Patan 44600,
Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>01-544 7709, 01-544 7710</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+977 984 942 6300</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@jobsnepal.com</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {[
                  { name: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { name: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { name: "YouTube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                ].map((social) => {
                  const urls = { Facebook: "https://facebook.com/jobsnepal", Twitter: "https://twitter.com/jobsnepal", LinkedIn: "https://linkedin.com/company/jobsnepal", YouTube: "https://youtube.com/@jobsnepal" };
                  return (
                    <a key={social.name} href={urls[social.name] || "#"} target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] rounded-full bg-[#989898] hover:bg-[#777] flex items-center justify-center transition-colors" aria-label={social.name}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#2b2b2b] py-3 text-center text-xs text-[#b8b8b8]">
        &copy; 2000 - 2026 JobsNepal Pvt. Ltd. All Right Reserved.
      </div>
    </>
  );
}
