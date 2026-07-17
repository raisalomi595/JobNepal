import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { storage } from "../../services/storage";
import { STORAGE_KEYS } from "../../utils/constants";
import { simpleHash } from "../../utils/helpers";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Toast from "../../components/Toast";

export default function Settings() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [toast, setToast] = useState(null);

  const tabs = [
    { id: "profile", label: "Profile Settings" },
    { id: "password", label: "Password" },
    { id: "verification", label: "Verification" },
    { id: "privacy", label: "Privacy" },
    { id: "notifications", label: "Notification Preferences" },
    { id: "danger", label: "Delete Account" },
  ];

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const current = fd.get("currentPassword");
    const newPass = fd.get("newPassword");
    const confirm = fd.get("confirmPassword");

    const users = storage.get(STORAGE_KEYS.USERS, []);
    const found = users.find((u) => u.id === user?.id);

    if (found.password !== simpleHash(current)) {
      setToast({ message: "Current password is incorrect!", type: "error" });
      return;
    }
    if (newPass !== confirm) {
      setToast({ message: "Passwords do not match!", type: "error" });
      return;
    }
    if (newPass.length < 6) {
      setToast({ message: "Password must be at least 6 characters", type: "error" });
      return;
    }

    const updated = users.map((u) =>
      u.id === user?.id ? { ...u, password: simpleHash(newPass) } : u
    );
    storage.set(STORAGE_KEYS.USERS, updated);
    setToast({ message: "Password changed successfully!", type: "success" });
    e.target.reset();
  };

  const handleDeleteAccount = () => {
    if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) return;

    const users = storage.get(STORAGE_KEYS.USERS, []).filter((u) => u.id !== user?.id);
    storage.set(STORAGE_KEYS.USERS, users);
    storage.remove(STORAGE_KEYS.CURRENT_USER);
    storage.remove(STORAGE_KEYS.PROFILE);
    logout();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account settings</p>
      </div>

      <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "text-[#0261a6] border-b-2 border-[#0261a6]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "profile" && (
        <Card>
          <h3 className="font-semibold text-gray-900 mb-4">Profile Settings</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                <input defaultValue={user?.firstName} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50" disabled />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                <input defaultValue={user?.lastName} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50" disabled />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input defaultValue={user?.email} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50" disabled />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                <input defaultValue={user?.phone} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50" disabled />
              </div>
            </div>
            <p className="text-xs text-gray-400">Edit your profile information from the <a href="/dashboard/profile" className="text-[#0261a6] hover:underline">Profile page</a>.</p>
          </div>
        </Card>
      )}

      {activeTab === "password" && (
        <Card>
          <h3 className="font-semibold text-gray-900 mb-4">Change Password</h3>
          <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Current Password</label>
              <input type="password" name="currentPassword" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">New Password</label>
              <input type="password" name="newPassword" required minLength={6} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input type="password" name="confirmPassword" required minLength={6} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6]" />
            </div>
            <Button type="submit" variant="primary">Update Password</Button>
          </form>
        </Card>
      )}

      {activeTab === "verification" && (
        <Card>
          <h3 className="font-semibold text-gray-900 mb-4">Email & Phone Verification</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Email Verification</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full font-medium">Unverified</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Phone Verification</p>
                <p className="text-xs text-gray-500">{user?.phone || "Not provided"}</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full font-medium">Unverified</span>
            </div>
            <Button variant="outline" size="sm">Send Verification Email</Button>
          </div>
        </Card>
      )}

      {activeTab === "privacy" && (
        <Card>
          <h3 className="font-semibold text-gray-900 mb-4">Privacy Settings</h3>
          <div className="space-y-4">
            {[
              { label: "Show my profile to employers", desc: "Your profile will be visible in search results" },
              { label: "Show my resume in search", desc: "Employers can find your resume when searching" },
              { label: "Show my email address", desc: "Display your email on your public profile" },
              { label: "Show my phone number", desc: "Display your phone on your public profile" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0261a6]" />
                </label>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === "notifications" && (
        <Card>
          <h3 className="font-semibold text-gray-900 mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            {[
              { label: "New job alerts", desc: "Get notified when new jobs matching your profile are posted" },
              { label: "Application updates", desc: "Get notified when your application status changes" },
              { label: "Interview reminders", desc: "Get reminded about upcoming interviews" },
              { label: "Deadline reminders", desc: "Get reminded about application deadlines" },
              { label: "Company updates", desc: "Get notified when companies you follow post new jobs" },
              { label: "Message notifications", desc: "Get notified when you receive a new message" },
              { label: "Marketing emails", desc: "Receive tips, resources, and promotional content" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0261a6]" />
                </label>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === "danger" && (
        <Card>
          <h3 className="font-semibold text-red-600 mb-4">Delete Account</h3>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-700 mb-3">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <ul className="text-xs text-red-600 list-disc list-inside mb-4 space-y-1">
              <li>All your personal data will be permanently deleted</li>
              <li>Your applications and saved jobs will be removed</li>
              <li>Your resume and profile will be deleted</li>
              <li>You will lose access to all features</li>
            </ul>
            <Button variant="danger" onClick={handleDeleteAccount}>
              Delete My Account
            </Button>
          </div>
        </Card>
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
