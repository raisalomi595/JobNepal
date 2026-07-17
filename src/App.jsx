import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/auth/AuthModal";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hire from "./pages/Hire";
import FindJob from "./pages/FindJob";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import DirectRecruitment from "./pages/DirectRecruitment";
import WebBanner from "./pages/WebBanner";

import DashboardHome from "./pages/dashboard/DashboardHome";
import MyProfile from "./pages/dashboard/MyProfile";
import MyApplications from "./pages/dashboard/MyApplications";
import SavedJobs from "./pages/dashboard/SavedJobs";
import SavedCompanies from "./pages/dashboard/SavedCompanies";
import SavedSearches from "./pages/dashboard/SavedSearches";
import Messages from "./pages/dashboard/Messages";
import NotificationsPage from "./pages/dashboard/NotificationsPage";
import Settings from "./pages/dashboard/Settings";
import Premium from "./pages/dashboard/Premium";

function PublicLayout({ onOpenLogin, onOpenSignup }) {
  return (
    <>
      <Navbar onOpenLogin={onOpenLogin} onOpenSignup={onOpenSignup} />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const [authModal, setAuthModal] = useState(null);

  const openLogin = () => setAuthModal("login");
  const openSignup = () => setAuthModal("signup");
  const closeAuth = () => setAuthModal(null);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route element={<PublicLayout onOpenLogin={openLogin} onOpenSignup={openSignup} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/direct-recruitment" element={<DirectRecruitment />} />
          <Route path="/web-banner" element={<WebBanner />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/find-job" element={<FindJob />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="applications" element={<MyApplications />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="saved-companies" element={<SavedCompanies />} />
          <Route path="saved-searches" element={<SavedSearches />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="premium" element={<Premium />} />
        </Route>
      </Routes>

      <AuthModal
        mode={authModal}
        onClose={closeAuth}
        onSwitchMode={(mode) => setAuthModal(mode)}
      />
    </div>
  );
}

export default App;
