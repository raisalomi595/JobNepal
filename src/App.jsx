/*
  ============================================================
  App.jsx — Root component
  ============================================================
  Assembles all homepage sections in the exact order they appear:
  1. Navbar (sticky top)
  2. HeroSection (banner with search)
  3. Main two-column area: sidebar (Instant Jobs + Hot Jobs) + Top Jobs
  4. FeaturedJobs (full-width below main area)
  5. PopularCategories
  6. WhyChooseUs
  7. TopCompanies
  8. CallToAction
  9. Footer
  ============================================================
*/

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JobSidebar from "./components/JobSidebar";

import FeaturedJobs from "./components/FeaturedJobs";
import PopularCategories from "./components/PopularCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import TopJobs from "./components/TopJobs";
import TopCompanies from "./components/TopCompanies";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
    

      {/*
        Two-column main area (matching the original site layout):
        - Left sidebar (w-[280px] on desktop, full width on mobile)
        - Right content area (flex-1 fills remaining space)
        On mobile the sidebar stacks above the content.
      */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-[280px] shrink-0">
            <JobSidebar />
          </aside>
          <section className="flex-1 min-w-0">
            <TopJobs />
          </section>
        </div>
      </main>

      {/*
        New sections added below the original two-column layout.
        These extend the homepage with modern features while
        preserving the original jobsnepal.com look and feel.
      */}
      <FeaturedJobs />
      <PopularCategories />
      <WhyChooseUs />
      <TopCompanies />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
