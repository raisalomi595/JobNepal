import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Search",
    dropdown: [
      { label: "Search Job", to: "/find-job" },
      { label: "Top Jobs", to: "/find-job?type=Full-time" },
      { label: "Hot Jobs", to: "/find-job" },
      { label: "Normal Jobs", to: "/find-job" },
      { label: "Instant Jobs", to: "/find-job" },
      { label: "Premium Jobs", to: "/find-job" },
      { label: "IT Jobs", to: "/find-job?category=Information+Technology" },
      { label: "Hospitality Jobs", to: "/find-job?category=Hospitality+%2F+Tourism" },
      { label: "Admin/Management Jobs", to: "/find-job?category=Administration" },
      { label: "NGO/INGO Jobs", to: "/find-job?category=NGO+%2F+INGO" },
      { label: "Tender Notice, EOI, Bids", to: "/find-job?type=Contract" },
    ],
  },
  { label: "About Us", to: "/" },
  {
    label: "Services",
    dropdown: [
      { label: "Direct Recruitment Service", to: "/" },
      { label: "Vacancy Announcement Service", to: "/hire" },
      { label: "Web Banner Advertisement Service", to: "/" },
    ],
  },
  { label: "Help", dropdown: [{ label: "FAQ", to: "/" }] },
  { label: "Blog", to: "/" },
  { label: "Contact Us", to: "/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0261a6] h-[70px] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <Link to="/" className="shrink-0">
          <img
            src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png"
            alt="JobsNepal.com - Online Jobs Vacancy Recruitment"
            className="w-[180px] h-[46px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center text-white text-[16px] font-light">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group mx-2">
              {link.dropdown ? (
                <a
                  href="#"
                  className="nav-link block hover:text-[#fc8b07] transition-colors"
                >
                  {link.label}
                  <span className="ml-1 text-xs">&#9662;</span>
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="nav-link block hover:text-[#fc8b07] transition-colors"
                >
                  {link.label}
                </Link>
              )}
              {link.dropdown && (
                <div className="absolute top-full left-0 bg-white text-gray-700 shadow-lg rounded-b-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-sm">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block px-4 py-1.5 text-sm hover:bg-[#fc8b07] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/login"
            className="bg-white text-gray-700 px-4 py-1.5 rounded text-sm font-medium uppercase hover:text-gray-900 transition"
          >
            Log In
          </Link>
          <div className="relative group">
            <button className="bg-[#fc8b07] text-white px-4 py-1.5 rounded text-sm font-medium uppercase hover:bg-[#e07d09] transition">
              Sign Up &#9662;
            </button>
            <div className="absolute right-0 top-full bg-white text-gray-700 shadow-lg rounded-md py-2 min-w-[230px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/signup" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                <span className="text-lg">&#128100;</span> Register JobSeeker
                <span className="ml-auto bg-[#0261a6] text-white text-xs font-bold px-2 py-0.5 rounded-full">FREE</span>
              </Link>
              <Link to="/hire" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                <span className="text-lg">&#127970;</span> Register Company
                <span className="ml-auto bg-[#0261a6] text-white text-xs font-bold px-2 py-0.5 rounded-full">FREE</span>
              </Link>
            </div>
          </div>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0261a6] text-white text-sm border-t border-white/10 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <span className="block px-3 py-2 font-medium text-white/80">{link.label}</span>
                ) : (
                  <Link to={link.to} onClick={() => setMenuOpen(false)} className="block px-3 py-2 font-medium hover:text-[#fc8b07]">
                    {link.label}
                  </Link>
                )}
                {link.dropdown && (
                  <div className="ml-4 pb-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)} className="block py-1 text-white/70 hover:text-[#fc8b07] px-3">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-3 flex gap-2">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center bg-white text-gray-700 px-3 py-2 rounded text-sm font-medium uppercase">Log In</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="flex-1 text-center bg-[#fc8b07] text-white px-3 py-2 rounded text-sm font-medium uppercase">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
