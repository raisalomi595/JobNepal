import HeroSection from "../components/HeroSection";
import JobSidebar from "../components/JobSidebar";
import FeaturedJobs from "../components/FeaturedJobs";
import PopularCategories from "../components/PopularCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import TopJobs from "../components/TopJobs";
import TopCompanies from "../components/TopCompanies";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

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

      <FeaturedJobs />
      <PopularCategories />
      <WhyChooseUs />
      <TopCompanies />
      <CallToAction />
    </div>
  );
}
