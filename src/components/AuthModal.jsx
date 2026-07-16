import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Toast from "./Toast";

export default function AuthModal({ mode, onClose }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "", password: "", remember: false,
    retypeEmail: "", retypePassword: "",
    firstName: "", lastName: "", contact: "", category: "",
  });
  const [toast, setToast] = useState(null);
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

  const hasFormData = () => {
    const fields = ["email", "password", "retypeEmail", "retypePassword", "firstName", "lastName", "contact"];
    return fields.some((f) => form[f]?.trim?.()?.length > 0);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !hasFormData()) {
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === form.email && u.password === form.password);
    if (user) {
      setToast({ message: "Login successfully!", type: "success" });
      setTimeout(() => { onClose(); navigate("/"); }, 1500);
    } else {
      setToast({ message: "Invalid email or password!", type: "error" });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.email !== form.retypeEmail) {
      setToast({ message: "Emails do not match!", type: "error" });
      return;
    }
    if (form.password !== form.retypePassword) {
      setToast({ message: "Passwords do not match!", type: "error" });
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === form.email)) {
      setToast({ message: "Email already registered!", type: "error" });
      return;
    }
    users.push({
      email: form.email, password: form.password,
      firstName: form.firstName, lastName: form.lastName,
      contact: form.contact, category: form.category,
    });
    localStorage.setItem("users", JSON.stringify(users));
    setToast({ message: "Sign up successfully!", type: "success" });
    setTimeout(() => { onClose(); navigate("/login"); }, 1500);
  };

  if (!mode) return null;

  const isSignup = mode === "signup";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-10 md:pt-16 pb-10 overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={handleOverlayClick}
    >
      <div
        ref={formRef}
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSignup ? (
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <img src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png" alt="JobsNepal" className="h-8 mx-auto mb-3" />
              <h2 className="text-xl font-bold text-gray-900">Jobseeker Registration</h2>
              <p className="text-xs text-gray-500 mt-1">Create a free account to start applying for jobs.</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#0261a6] mb-3 pb-2 border-b border-gray-100">Login Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Retype Email <span className="text-red-500">*</span></label>
                    <input type="email" name="retypeEmail" value={form.retypeEmail} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Retype Password <span className="text-red-500">*</span></label>
                    <input type="password" name="retypePassword" value={form.retypePassword} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0261a6] mb-3 pb-2 border-b border-gray-100">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                    <input type="tel" name="contact" value={form.contact} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Prefer Job Category</label>
                    <select name="category" value={form.category} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]">
                      <option value="">Select Category</option>
                      <option value="it">Information Technology</option>
                      <option value="accounting">Accounting and Finance</option>
                      <option value="engineering">Engineering</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="marketing">Marketing</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="ngo">NGO / INGO</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
                Create account
              </button>

              <p className="text-xs text-gray-400 text-center">
                By creating an account, you're confirming that you've read our{" "}
                <Link to="/" className="text-[#0261a6] hover:underline">Terms & Conditions</Link> and{" "}
                <Link to="/" className="text-[#0261a6] hover:underline">Privacy Policy</Link>
              </p>

              <p className="text-sm text-center text-gray-500 pt-2 border-t border-gray-100">
                Already have an account?{" "}
                <button type="button" onClick={() => { setForm({ email: "", password: "", remember: false, retypeEmail: "", retypePassword: "", firstName: "", lastName: "", contact: "", category: "" }); setToast(null); }} className="text-[#0261a6] hover:underline font-medium cursor-pointer">Click here to login</button>
              </p>
            </form>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <img src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png" alt="JobsNepal" className="h-8 mx-auto mb-3" />
              <h2 className="text-xl font-bold text-gray-900">Sign in to your account</h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} className="rounded border-gray-300 text-[#0261a6] focus:ring-[#0261a6]" />
                  <span className="text-gray-600">Remember</span>
                </label>
                <Link to="/" className="text-[#0261a6] hover:underline">Forgot password?</Link>
              </div>
              <button type="submit" className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
                Sign in
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-5">
              Don't have an account?{" "}
              <button type="button" onClick={() => { setForm({ email: "", password: "", remember: false, retypeEmail: "", retypePassword: "", firstName: "", lastName: "", contact: "", category: "" }); setToast(null); }} className="text-[#0261a6] hover:underline font-medium cursor-pointer">Register</button>
            </p>
            <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
              By continuing, you're confirming that you've read our{" "}
              <Link to="/" className="text-[#0261a6] hover:underline">Terms & Conditions</Link> and{" "}
              <Link to="/" className="text-[#0261a6] hover:underline">Privacy Policy</Link>
            </p>
          </div>
        )}
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
