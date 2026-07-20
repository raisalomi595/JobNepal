import { NavLink } from "react-router-dom";

const items = [
  { to: "/dashboard", label: "Home" },
  { to: "/find-job", label: "Search" },
  { to: "/dashboard/saved-jobs", label: "Saved" },
  { to: "/dashboard/messages", label: "Messages" },
  { to: "/dashboard/profile", label: "Profile" },
];

export default function MobileBottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/dashboard"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive ? "text-[#0261a6]" : "text-gray-500"
              }`
            }
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
