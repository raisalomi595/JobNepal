import { Link } from "react-router-dom";
import { useState } from "react";

const allPosts = [
  {
    id: 1,
    title: "Top 10 In-Demand Jobs in Nepal for 2026",
    excerpt: "Discover the fastest-growing career opportunities in Nepal's evolving job market, from IT to healthcare and beyond.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=350&fit=crop",
    date: "Mar 15, 2026",
    author: "JobsNepal Team",
    category: "Career Advice",
  },
  {
    id: 2,
    title: "How to Write a Resume That Gets You Hired",
    excerpt: "Learn the proven strategies to craft a standout resume that captures recruiters' attention within seconds.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=350&fit=crop",
    date: "Mar 10, 2026",
    author: "Anita Thapa",
    category: "Resume Tips",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Acing Your Job Interview",
    excerpt: "From preparation to follow-up, master every stage of the interview process with these expert tips.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=350&fit=crop",
    date: "Mar 5, 2026",
    author: "Priya Koirala",
    category: "Interview Tips",
  },
  {
    id: 4,
    title: "Nepal's IT Sector: Opportunities & Growth Trends",
    excerpt: "Explore how Nepal's technology sector is booming and what it means for job seekers and employers alike.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=350&fit=crop",
    date: "Feb 28, 2026",
    author: "Sagar Pandey",
    category: "Industry Insights",
  },
  {
    id: 5,
    title: "Remote Work in Nepal: A Complete Guide",
    excerpt: "Everything you need to know about finding, applying, and succeeding in remote jobs from Nepal.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=350&fit=crop",
    date: "Feb 20, 2026",
    author: "JobsNepal Team",
    category: "Career Advice",
  },
  {
    id: 6,
    title: "Building a Personal Brand on LinkedIn",
    excerpt: "Learn how to optimize your LinkedIn profile and build a professional network that opens doors.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=350&fit=crop",
    date: "Feb 12, 2026",
    author: "Anita Thapa",
    category: "Career Advice",
  },
  {
    id: 7,
    title: "Salary Negotiation Tips for Nepali Professionals",
    excerpt: "Confidently negotiate your salary with these proven strategies tailored for Nepal's job market.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=350&fit=crop",
    date: "Feb 5, 2026",
    author: "Priya Koirala",
    category: "Career Advice",
  },
  {
    id: 8,
    title: "How to Transition to a Tech Career",
    excerpt: "A step-by-step guide to switching careers and breaking into Nepal's growing tech industry.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=350&fit=crop",
    date: "Jan 28, 2026",
    author: "Sagar Pandey",
    category: "Career Advice",
  },
  {
    id: 9,
    title: "Common Interview Questions and How to Answer Them",
    excerpt: "Prepare for your next interview with these expert-crafted answers to the most common questions.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=350&fit=crop",
    date: "Jan 20, 2026",
    author: "JobsNepal Team",
    category: "Interview Tips",
  },
];

const categories = ["All", "Career Advice", "Resume Tips", "Interview Tips", "Industry Insights"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = activeCategory === "All" ? allPosts : allPosts.filter((p) => p.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0261a6] via-[#0261a6] to-[#015c9e] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">Career insights, hiring tips, and updates from the JobsNepal team</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#0261a6] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-1.5 text-xs ${activeCategory === cat ? "text-white/70" : "text-gray-400"}`}>
                  ({allPosts.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visible.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#fc8b07]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{post.author}</span>
                </div>
                <h2 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0261a6] transition-colors text-base leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-[#0261a6] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-20 h-20 text-gray-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="bg-[#0261a6] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#015c9e] hover:shadow-lg transition-all duration-300"
            >
              Load More Articles ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#0261a6] hover:underline font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
