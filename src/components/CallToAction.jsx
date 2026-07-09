import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-[#0261a6] py-14">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Career Journey?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Whether you are looking for your first job or your next big opportunity,
          we are here to help you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/find-job" className="bg-[#fc8b07] hover:bg-[#e07d09] text-white font-semibold px-8 py-3.5 rounded transition-colors shadow-lg w-full sm:w-auto text-center inline-flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Find a Job
          </Link>
          <Link to="/hire" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded hover:bg-white/10 transition-colors w-full sm:w-auto text-center inline-flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  );
}
