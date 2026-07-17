import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Toast from "../components/Toast";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const result = login(form.email, form.password);
    setLoading(false);
    if (result.success) {
      setToast({ message: "Welcome back!", type: "success" });
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      setToast({ message: result.error, type: "error" });
    }
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
            <Link to="/" className="text-[#0261a6] hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-3 rounded transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
          <div className="relative flex justify-center text-xs"><span className="bg-white px-3 text-gray-400">or</span></div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/></svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#333"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Continue with GitHub
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0261a6] hover:underline font-medium">Register</Link>
        </p>

        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
          By continuing, you're confirming that you've read our{" "}
          <Link to="/" className="text-[#0261a6] hover:underline">Terms & Conditions</Link> and{" "}
          <Link to="/" className="text-[#0261a6] hover:underline">Privacy Policy</Link>
        </p>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
