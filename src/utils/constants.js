export const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship", "Remote", "Freelance"];

export const APPLICATION_STATUSES = [
  { value: "applied", label: "Applied", color: "bg-blue-100 text-blue-700" },
  { value: "under_review", label: "Under Review", color: "bg-yellow-100 text-yellow-700" },
  { value: "shortlisted", label: "Shortlisted", color: "bg-purple-100 text-purple-700" },
  { value: "interview", label: "Interview", color: "bg-indigo-100 text-indigo-700" },
  { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-700" },
  { value: "selected", label: "Selected", color: "bg-green-100 text-green-700" },
  { value: "offer_sent", label: "Offer Sent", color: "bg-teal-100 text-teal-700" },
  { value: "joined", label: "Joined", color: "bg-emerald-100 text-emerald-700" },
];

export const PROFICIENCY_LEVELS = ["Beginner", "Intermediate", "Advanced", "Native"];

export const NOTIFICATION_TYPES = {
  new_job: "New Job Posted",
  application_update: "Application Update",
  interview_reminder: "Interview Reminder",
  deadline_reminder: "Deadline Reminder",
  company_followed: "Company Update",
  message_received: "New Message",
  profile_viewed: "Profile Viewed",
  resume_downloaded: "Resume Downloaded",
};

export const CATEGORIES = [
  { id: 1, name: "Information Technology", slug: "it", icon: "💻", count: 45 },
  { id: 2, name: "Accounting / Finance", slug: "accounting", icon: "💰", count: 28 },
  { id: 3, name: "Engineering", slug: "engineering", icon: "⚙️", count: 32 },
  { id: 4, name: "Healthcare", slug: "healthcare", icon: "🏥", count: 18 },
  { id: 5, name: "Education / Teaching", slug: "education", icon: "📚", count: 22 },
  { id: 6, name: "Marketing / Sales", slug: "marketing", icon: "📢", count: 35 },
  { id: 7, name: "Hospitality / Tourism", slug: "hospitality", icon: "🍽️", count: 15 },
  { id: 8, name: "NGO / INGO", slug: "ngo", icon: "🤝", count: 20 },
  { id: 9, name: "Banking / Insurance", slug: "banking", icon: "🏦", count: 12 },
  { id: 10, name: "Manufacturing", slug: "manufacturing", icon: "🏭", count: 10 },
];

export const STORAGE_KEYS = {
  USERS: "jobnepal_users",
  CURRENT_USER: "jobnepal_current_user",
  APPLICATIONS: "jobnepal_applications",
  SAVED_JOBS: "jobnepal_saved_jobs",
  SAVED_COMPANIES: "jobnepal_saved_companies",
  SAVED_SEARCHES: "jobnepal_saved_searches",
  NOTIFICATIONS: "jobnepal_notifications",
  MESSAGES: "jobnepal_messages",
  CONVERSATIONS: "jobnepal_conversations",
  RECENTLY_VIEWED: "jobnepal_recently_viewed",
  PROFILE: "jobnepal_profile",
  PROFILE_VIEWS: "jobnepal_profile_views",
  RESUME_DOWNLOADS: "jobnepal_resume_downloads",
};
