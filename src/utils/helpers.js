export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateRelative(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return formatDate(dateString);
}

export function calculateProfileCompletion(profile) {
  if (!profile) return 0;
  const fields = [
    "headline", "bio", "phone", "avatar",
    "expected_salary_min", "preferred_location",
    "linkedin_url", "github_url",
  ];
  let score = 0;
  fields.forEach((f) => {
    if (profile[f] && profile[f].length > 0) score += 5;
  });
  if (profile.education?.length > 0) score += 15;
  if (profile.experience?.length > 0) score += 15;
  if (profile.skills?.length > 0) score += 10;
  if (profile.languages?.length > 0) score += 5;
  if (profile.certificates?.length > 0) score += 5;
  if (profile.projects?.length > 0) score += 5;
  if (profile.resume_url) score += 10;
  return Math.min(score, 100);
}

export function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
