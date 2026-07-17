import { Link } from "react-router-dom";
import { CATEGORIES } from "../utils/constants";

export default function PopularCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0261a6]">Popular Categories</h2>
          <p className="mt-2 text-gray-500">Browse jobs by category to find your perfect role</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/find-job?category=${encodeURIComponent(cat.name)}`}
              className="group bg-gray-50 border border-gray-100 rounded-lg p-5 text-center hover:bg-[#0261a6] hover:text-white hover:border-[#0261a6] transition-all duration-300"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <p className="text-sm font-medium text-gray-800 group-hover:text-white">{cat.name}</p>
              <p className="text-xs text-gray-400 group-hover:text-blue-200 mt-0.5">{cat.count} jobs</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
