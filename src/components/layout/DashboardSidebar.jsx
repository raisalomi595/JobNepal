import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/dashboard/profile", label: "My Profile" },
  { to: "/dashboard/applications", label: "Applications" },
  { to: "/dashboard/saved-jobs", label: "Saved Jobs" },
  { to: "/dashboard/saved-companies", label: "Saved Companies" },
  { to: "/dashboard/saved-searches", label: "Saved Searches" },
  { to: "/dashboard/messages", label: "Messages" },
  { to: "/dashboard/notifications", label: "Notifications" },
  { to: "/dashboard/settings", label: "Settings" },
  { to: "/dashboard/premium", label: "Upgrade to Premium", premium: true },
];

export default function DashboardSidebar({ isOpen, onClose }) {
  const { user } = useAuth();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[70px] left-0 z-50 h-full lg:h-[calc(100vh-70px)] w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-gray-100 lg:hidden">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:block p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0261a6] rounded-full flex items-center justify-center text-white font-bold text-sm">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
        </div>

        <nav className="p-3 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/dashboard"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#0261a6] text-white"
                    : link.premium
                    ? "text-yellow-600 hover:bg-yellow-50"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <span>{link.label}</span>
              {link.premium && (
                <span className="ml-auto text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full font-bold">
                  PRO
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 mt-2">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <span>←</span>
            <span>Back to Site</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}
