import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Toast from "../components/Toast";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const [form, setForm] = useState({
    email: "", password: "", confirmPassword: "",
    firstName: "", lastName: "", phone: "", agree: false,
  });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
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
          <h1 className="text-2xl font-bold text-gray-900">Create Your Account</h1>
          <p className="text-sm text-gray-500 mt-1">Join thousands of job seekers on JobNepal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="98XXXXXXXX" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
              <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Confirm <span className="text-red-500">*</span></label>
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Retype password" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
            </div>
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mt-0.5 rounded border-gray-300 text-[#0261a6] focus:ring-[#0261a6]" required />
            <span className="text-xs text-gray-500">I agree to the <span className="text-[#0261a6] hover:underline">Terms & Conditions</span> and <span className="text-[#0261a6] hover:underline">Privacy Policy</span></span>
          </label>

          <button type="submit" disabled={loading} className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-3 rounded transition-colors disabled:opacity-50 cursor-pointer">
            {loading ? "Creating account..." : "Create Free Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0261a6] hover:underline font-medium">Sign in</Link>
        </p>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
