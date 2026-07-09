import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded shadow-md w-full max-w-md p-8">
        <div className="text-center mb-8">
          <img
            src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png"
            alt="JobsNepal"
            className="h-10 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">Sign in to your account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="rounded border-gray-300 text-[#0261a6] focus:ring-[#0261a6]"
              />
              <span className="text-gray-600">Remember</span>
            </label>
            <a href="#" className="text-[#0261a6] hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-3 rounded transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0261a6] hover:underline font-medium">Register</Link>
        </p>

        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
          By continuing, you're confirming that you've read our{" "}
          <a href="#" className="text-[#0261a6] hover:underline">Terms & Conditions</a> and{" "}
          <a href="#" className="text-[#0261a6] hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
