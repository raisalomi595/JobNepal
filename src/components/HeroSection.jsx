/*
  ============================================================
  HeroSection.jsx — Banner with search (EXACT JobsNepal style)
  ============================================================
  Matches the original jn-banner exactly:
  - Background: #0261a6 (solid blue, not gradient)
  - Decorative pseudo-element shapes (recreated with divs)
  - Heading in white
  - Search input with suitcase icon + orange magnifying glass button
  - Input group has specific border-radius: 5px left, 0 middle, 5px right

  Icons: suitcase (jn-icon-suitcase), magnifying glass (jn-icon-magnifying-glass)
  ============================================================
*/

export default function HeroSection() {
  return (
    /*
      bg-[#0261a6] matches the original jn-banner background.
      pt-[70px] accounts for the fixed header height.
      position: relative + overflow-hidden for decorative shapes.
    */
    <section className="relative bg-[#0261a6] text-white pt-[70px] pb-8 md:pb-12 overflow-hidden">

      {/* Decorative shapes (recreating the original ::before and ::after) */}
      <div className="absolute left-[3vw] w-[210px] h-[210px] bg-[#032d4b] opacity-18 rounded-lg bottom-[-150px] rotate-55 hidden md:block"></div>
      <div className="absolute right-[-200px] w-[300px] h-[250px] bg-[#032d4b] opacity-8 rounded-lg bottom-[-70px] rotate-45 hidden md:block"></div>

      <div className="container mx-auto px-4">
        <div className="search-form max-w-4xl mx-auto">
          {/* -------- Heading (original: font-size 24px, font-light) -------- */}
          <h2 className="text-2xl font-light mb-6" style={{ fontFamily: "'Roboto Slab', 'Times New Roman', serif" }}>
            Find jobs, vacancy, career online.
          </h2>

          {/* -------- Search form (original input-group style) -------- */}
          <form className="flex flex-wrap items-stretch">
            {/* Input wrapper — width matches original 450px */}
            <div className="flex-1 min-w-[280px] max-w-[450px]">
              <div className="flex items-stretch bg-white rounded-l-md overflow-hidden">
                {/* Suitcase icon (original: .input-group-text with jn-icon-suitcase) */}
                <span className="flex items-center justify-center w-[50px] text-gray-600 text-[22px]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Job Title, Job Category, Company"
                  className="flex-1 h-[50px] px-3 text-sm text-gray-600 outline-none border-none bg-transparent"
                />
              </div>
            </div>

            {/* Search button — orange bg, rounded right only (original: #fc8b07, 70px wide) */}
            <button
              type="submit"
              className="bg-[#fc8b07] hover:bg-[#e07d09] text-white w-[70px] h-[50px] flex items-center justify-center rounded-r-md transition-colors ml-[1px] shrink-0"
              aria-label="Search Jobs"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
