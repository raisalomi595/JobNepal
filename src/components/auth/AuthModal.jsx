import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
import { useAuth } from "../../context/AuthContext";

export default function AuthModal({ mode, onClose, onSwitchMode }) {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [form, setForm] = useState({
    email: "", password: "", confirmPassword: "",
    firstName: "", lastName: "", phone: "", agree: false,
  });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (mode) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mode]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    if (mode) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mode, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const result = login(form.email, form.password);
    setLoading(false);
    if (result.success) {
      setToast({ message: "Welcome back!", type: "success" });
      setTimeout(() => { onClose(); navigate("/dashboard"); }, 1000);
    } else {
      setToast({ message: result.error, type: "error" });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setToast({ message: "Passwords do not match!", type: "error" });
      return;
    }
    if (form.password.length < 6) {
      setToast({ message: "Password must be at least 6 characters!", type: "error" });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const result = signup({
      email: form.email,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
    });
    setLoading(false);
    if (result.success) {
      setToast({ message: "Account created! Welcome to JobNepal.", type: "success" });
      setTimeout(() => { onClose(); navigate("/dashboard"); }, 1000);
    } else {
      setToast({ message: result.error, type: "error" });
    }
  };

  const resetForm = () => {
    setForm({ email: "", password: "", confirmPassword: "", firstName: "", lastName: "", phone: "", agree: false });
    setToast(null);
  };

  if (!mode) return null;

  const isLogin = mode === "login";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-10 md:pt-16 pb-10 overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={formRef}
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors z-10 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <img src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png" alt="JobsNepal" className="h-8 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-gray-900">
              {isLogin ? "Welcome Back" : "Create Your Account"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {isLogin ? "Sign in to access your dashboard" : "Join thousands of job seekers on JobNepal"}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#333"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              Continue with GitHub
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-white px-3 text-gray-400">or continue with email</span></div>
          </div>

          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="rounded border-gray-300 text-[#0261a6] focus:ring-[#0261a6]" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-[#0261a6] hover:underline text-sm cursor-pointer">Forgot password?</button>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm disabled:opacity-50 cursor-pointer">
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="98XXXXXXXX" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Retype password" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                </div>
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mt-0.5 rounded border-gray-300 text-[#0261a6] focus:ring-[#0261a6]" required />
                <span className="text-xs text-gray-500">I agree to the <span className="text-[#0261a6] hover:underline cursor-pointer">Terms & Conditions</span> and <span className="text-[#0261a6] hover:underline cursor-pointer">Privacy Policy</span></span>
              </label>
              <button type="submit" disabled={loading} className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm disabled:opacity-50 cursor-pointer">
                {loading ? "Creating account..." : "Create Free Account"}
              </button>
            </form>
          )}

          <p className="text-center text-sm text-gray-500 mt-5">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => { resetForm(); if (onSwitchMode) onSwitchMode(isLogin ? "signup" : "login"); }}
              className="text-[#0261a6] hover:underline font-medium cursor-pointer"
            >
              {isLogin ? "Create one" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
