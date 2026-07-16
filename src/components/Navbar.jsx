import { useState, useEffect, useRef } from "react";
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
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    dropdown: [
      { label: "Direct Recruitment Service", to: "/direct-recruitment" },
      { label: "Vacancy Announcement Service", to: "/hire" },
      { label: "Web Banner Advertisement Service", to: "/web-banner" },
    ],
  },
  { label: "Help", dropdown: [{ label: "FAQ", to: "/faq" }] },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar({ onOpenLogin, onOpenSignup }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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

        <nav className="hidden lg:flex items-center text-white text-[16px] font-light" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative mx-2">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="nav-link flex items-center gap-1 hover:text-[#fc8b07] transition-colors cursor-pointer"
                  >
                    {link.label}
                    <span className="text-xs">&#9662;</span>
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white text-gray-700 shadow-lg rounded-b-md py-2 min-w-[200px] z-50 text-sm">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-1.5 text-sm hover:bg-[#fc8b07] hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  className="nav-link block hover:text-[#fc8b07] transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={onOpenLogin}
            className="bg-white text-gray-700 px-4 py-1.5 rounded text-sm font-medium uppercase hover:text-gray-900 transition cursor-pointer"
          >
            Log In
          </button>
          <button
            onClick={onOpenSignup}
            className="bg-[#fc8b07] text-white px-4 py-1.5 rounded text-sm font-medium uppercase hover:bg-[#e07d09] transition cursor-pointer"
          >
            Sign Up
          </button>
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
                  <button
                    onClick={() => toggleDropdown(`m-${link.label}`)}
                    className="block w-full text-left px-3 py-2 font-medium text-white/80 hover:text-[#fc8b07] cursor-pointer"
                  >
                    {link.label}
                    <span className="ml-1 text-xs">{openDropdown === `m-${link.label}` ? "\u25B2" : "\u25BC"}</span>
                  </button>
                ) : (
                  <Link to={link.to} onClick={() => setMenuOpen(false)} className="block px-3 py-2 font-medium hover:text-[#fc8b07]">
                    {link.label}
                  </Link>
                )}
                {link.dropdown && openDropdown === `m-${link.label}` && (
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
            <button onClick={() => { setMenuOpen(false); onOpenLogin(); }} className="flex-1 text-center bg-white text-gray-700 px-3 py-2 rounded text-sm font-medium uppercase cursor-pointer">Log In</button>
            <button onClick={() => { setMenuOpen(false); onOpenSignup(); }} className="flex-1 text-center bg-[#fc8b07] text-white px-3 py-2 rounded text-sm font-medium uppercase cursor-pointer">Sign Up</button>
          </div>
        </div>
      )}
    </header>
  );
}
