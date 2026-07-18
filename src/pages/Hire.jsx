import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Toast from "../components/Toast";
import { useAuth } from "../context/AuthContext";
import { storage } from "../services/storage";

export default function Hire() {
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const [form, setForm] = useState({
    company: "", email: "", phone: "", password: "", confirmPassword: "",
    address: "", website: "", description: "",
  });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      firstName: form.company,
      lastName: "Employer",
      phone: form.phone,
    });
    if (result.success) {
      const employers = storage.get("jobnepal_employers", []);
      employers.push({
        company: form.company,
        email: form.email,
        phone: form.phone,
        address: form.address,
        website: form.website,
        description: form.description,
      });
      storage.set("jobnepal_employers", employers);
      setLoading(false);
      setToast({ message: "Company registered successfully!", type: "success" });
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      setLoading(false);
      setToast({ message: result.error, type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <img
            src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png"
            alt="JobsNepal"
            className="h-10 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">I am Hiring — Employer Registration</h1>
          <p className="text-sm text-gray-500 mt-2">
            Register your company to post job vacancies and find the best talent in Nepal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-[#0261a6] mb-4 pb-2 border-b border-[#efefef]">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" name="address" value={form.address} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6] resize-none" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0261a6] mb-4 pb-2 border-b border-[#efefef]">Account Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
                <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password <span className="text-red-500">*</span></label>
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-3 rounded transition-colors text-lg disabled:opacity-50 cursor-pointer">
            {loading ? "Registering..." : "Register Company"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            By registering, you agree to our{" "}
            <Link to="/" className="text-[#0261a6] hover:underline">Terms & Conditions</Link> and{" "}
            <Link to="/" className="text-[#0261a6] hover:underline">Privacy Policy</Link>
          </p>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0261a6] hover:underline font-medium">Login here</Link>
          </p>
        </form>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
