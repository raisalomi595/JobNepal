import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hire from "./pages/Hire";
import FindJob from "./pages/FindJob";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/find-job" element={<FindJob />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
