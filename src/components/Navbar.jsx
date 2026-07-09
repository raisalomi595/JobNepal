import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Search",
    dropdown: [
      "Search Job", "Top Jobs", "Hot Jobs", "Normal Jobs",
      "Instant Jobs", "Premium Jobs", "IT Jobs",
      "Hospitality Jobs", "Admin/Management Jobs",
      "NGO/INGO Jobs", "Tender Notice, EOI, Bids",
    ],
  },
  { label: "About Us" },
  {
    label: "Services",
    dropdown: [
      "Direct Recruitment Service",
      "Vacancy Announcement Service",
      "Web Banner Advertisement Service",
    ],
  },
  { label: "Help", dropdown: ["FAQ"] },
  { label: "Blog" },
  { label: "Contact Us" },
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
              <a
                href="#"
                className="nav-link block hover:text-[#fc8b07] transition-colors"
              >
                {link.label}
                {link.dropdown && <span className="ml-1 text-xs">&#9662;</span>}
              </a>
              {link.dropdown && (
                <div className="absolute top-full left-0 bg-white text-gray-700 shadow-lg rounded-b-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-sm">
                  {link.dropdown.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-1.5 text-sm hover:bg-[#fc8b07] hover:text-white"
                    >
                      {item}
                    </a>
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
                <a href="#" className="block px-3 py-2 font-medium hover:text-[#fc8b07]">
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="ml-4 pb-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <a key={item} href="#" className="block py-1 text-white/70 hover:text-[#fc8b07] px-3">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-3 flex gap-2">
            <Link to="/login" className="flex-1 text-center bg-white text-gray-700 px-3 py-2 rounded text-sm font-medium uppercase">Log In</Link>
            <Link to="/signup" className="flex-1 text-center bg-[#fc8b07] text-white px-3 py-2 rounded text-sm font-medium uppercase">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
