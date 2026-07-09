import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    email: "", retypeEmail: "", password: "", retypePassword: "",
    firstName: "", lastName: "", contact: "", category: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <img
            src="https://www.jobsnepal.com/assets/front/images/jn-logo@2x.png"
            alt="JobsNepal"
            className="h-10 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">Jobseeker Registration</h1>
          <p className="text-sm text-gray-500 mt-2">
            Fill out the form below to create a free account. Once you create an account, log in to the system and
            create your profile to start applying the jobs that you are looking for. It's all free.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-[#0261a6] mb-4 pb-2 border-b border-[#efefef]">Login Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Retype Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="retypeEmail" value={form.retypeEmail} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
                <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Retype Password <span className="text-red-500">*</span></label>
                <input type="password" name="retypePassword" value={form.retypePassword} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0261a6] mb-4 pb-2 border-b border-[#efefef]">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                <input type="tel" name="contact" value={form.contact} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]" required />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0261a6] mb-4 pb-2 border-b border-[#efefef]">Job Preference</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prefer Job Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#0261a6]">
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

          <button type="submit" className="w-full bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold py-3 rounded transition-colors">
            Create account
          </button>

          <p className="text-xs text-gray-400 text-center">
            By creating an account with us, you're confirming that you've read our{" "}
            <a href="#" className="text-[#0261a6] hover:underline">Terms & Conditions</a> and{" "}
            <a href="#" className="text-[#0261a6] hover:underline">Privacy Policy</a>
          </p>

          <p className="text-sm text-center text-gray-500">
            Do you already have an account with us?{" "}
            <Link to="/login" className="text-[#0261a6] hover:underline font-medium">Click here to login</Link>
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm text-blue-800">
            <strong>Note:</strong> You will receive an email to verify your account. Please remember to check your junk
            and spam folders for any verification emails. To ensure you receive future communications from us, be sure
            to add our email address to your safe list.
          </div>
        </form>

        <div className="bg-[#0261a6] text-white rounded p-6 mt-6 text-center">
          <h3 className="text-xl font-bold mb-2">It's <span className="text-[#fc8b07]">Free</span> forever</h3>
          <p className="text-sm text-white/80">
            JobsNepal.com has been always free for job seekers, and it will always be free.
          </p>
        </div>
      </div>
    </div>
  );
}
