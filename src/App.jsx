import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
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

function App() {
  const [authModal, setAuthModal] = useState(null);

  const openLogin = () => setAuthModal("login");
  const openSignup = () => setAuthModal("signup");
  const closeAuth = () => setAuthModal(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenLogin={openLogin} onOpenSignup={openSignup} />
      <Routes>
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
      </Routes>
      <Footer />
      <AuthModal mode={authModal} onClose={closeAuth} />
    </div>
  );
}

export default App;
