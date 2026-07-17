import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { storage } from "../services/storage";
import { STORAGE_KEYS } from "../utils/constants";
import { generateId } from "../utils/helpers";
import { allJobs } from "../data/jobs";

const AppContext = createContext(null);

function initData(key, defaultValue) {
  const existing = storage.get(key);
  if (!existing) storage.set(key, defaultValue);
  return storage.get(key, defaultValue);
}

export function AppProvider({ children }) {
  const [applications, setApplications] = useState(() => initData(STORAGE_KEYS.APPLICATIONS, []));
  const [savedJobs, setSavedJobs] = useState(() => initData(STORAGE_KEYS.SAVED_JOBS, []));
  const [savedCompanies, setSavedCompanies] = useState(() => initData(STORAGE_KEYS.SAVED_COMPANIES, []));
  const [savedSearches, setSavedSearches] = useState(() => initData(STORAGE_KEYS.SAVED_SEARCHES, []));
  const [notifications, setNotifications] = useState(() => initData(STORAGE_KEYS.NOTIFICATIONS, []));
  const [conversations, setConversations] = useState(() => initData(STORAGE_KEYS.CONVERSATIONS, []));
  const [messages, setMessages] = useState(() => initData(STORAGE_KEYS.MESSAGES, []));
  const [recentlyViewed, setRecentlyViewed] = useState(() => initData(STORAGE_KEYS.RECENTLY_VIEWED, []));
  const [profileViews, setProfileViews] = useState(() => initData(STORAGE_KEYS.PROFILE_VIEWS, []));
  const [resumeDownloads, setResumeDownloads] = useState(() => initData(STORAGE_KEYS.RESUME_DOWNLOADS, []));

  const persist = useCallback((key, setter, data) => {
    storage.set(key, data);
    setter(data);
  }, []);

  const applyToJob = useCallback((userId, jobId) => {
    const existing = applications.find((a) => a.userId === userId && a.jobId === jobId);
    if (existing) return { success: false, error: "Already applied" };
    const app = {
      id: generateId(),
      userId,
      jobId,
      status: "applied",
      appliedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      statusHistory: [{ status: "applied", date: new Date().toISOString() }],
    };
    const updated = [app, ...applications];
    persist(STORAGE_KEYS.APPLICATIONS, setApplications, updated);
    addNotification(userId, "application_update", "Application Submitted", `Your application has been submitted successfully.`);
    return { success: true, application: app };
  }, [applications, persist]);

  const withdrawApplication = useCallback((applicationId) => {
    const updated = applications.map((a) =>
      a.id === applicationId
        ? { ...a, status: "withdrawn", updatedAt: new Date().toISOString(), withdrawnAt: new Date().toISOString() }
        : a
    );
    persist(STORAGE_KEYS.APPLICATIONS, setApplications, updated);
    return true;
  }, [applications, persist]);

  const toggleSaveJob = useCallback((userId, jobId) => {
    const existing = savedJobs.find((s) => s.userId === userId && s.jobId === jobId);
    if (existing) {
      const updated = savedJobs.filter((s) => !(s.userId === userId && s.jobId === jobId));
      persist(STORAGE_KEYS.SAVED_JOBS, setSavedJobs, updated);
      return { saved: false };
    }
    const updated = [...savedJobs, { userId, jobId, savedAt: new Date().toISOString() }];
    persist(STORAGE_KEYS.SAVED_JOBS, setSavedJobs, updated);
    return { saved: true };
  }, [savedJobs, persist]);

  const toggleFollowCompany = useCallback((userId, companyName) => {
    const existing = savedCompanies.find((s) => s.userId === userId && s.companyName === companyName);
    if (existing) {
      const updated = savedCompanies.filter((s) => !(s.userId === userId && s.companyName === companyName));
      persist(STORAGE_KEYS.SAVED_COMPANIES, setSavedCompanies, updated);
      return { following: false };
    }
    const updated = [...savedCompanies, { userId, companyName, followedAt: new Date().toISOString() }];
    persist(STORAGE_KEYS.SAVED_COMPANIES, setSavedCompanies, updated);
    addNotification(userId, "company_followed", "Following Company", `You are now following ${companyName}`);
    return { following: true };
  }, [savedCompanies, persist]);

  const saveSearch = useCallback((userId, query, filters) => {
    const search = { id: generateId(), userId, query, filters, createdAt: new Date().toISOString() };
    const updated = [search, ...savedSearches];
    persist(STORAGE_KEYS.SAVED_SEARCHES, setSavedSearches, updated);
    return search;
  }, [savedSearches, persist]);

  const deleteSavedSearch = useCallback((searchId) => {
    const updated = savedSearches.filter((s) => s.id !== searchId);
    persist(STORAGE_KEYS.SAVED_SEARCHES, setSavedSearches, updated);
  }, [savedSearches, persist]);

  const addNotification = useCallback((userId, type, title, message, data = {}) => {
    const notif = {
      id: generateId(),
      userId,
      type,
      title,
      message,
      data,
      isRead: false,
      createdAt: new Date().toISOString(),
    };
    const updated = [notif, ...notifications];
    persist(STORAGE_KEYS.NOTIFICATIONS, setNotifications, updated);
  }, [notifications, persist]);

  const markNotificationRead = useCallback((notifId) => {
    const updated = notifications.map((n) =>
      n.id === notifId ? { ...n, isRead: true, readAt: new Date().toISOString() } : n
    );
    persist(STORAGE_KEYS.NOTIFICATIONS, setNotifications, updated);
  }, [notifications, persist]);

  const markAllNotificationsRead = useCallback(() => {
    const updated = notifications.map((n) => ({ ...n, isRead: true, readAt: new Date().toISOString() }));
    persist(STORAGE_KEYS.NOTIFICATIONS, setNotifications, updated);
  }, [notifications, persist]);

  const sendMessage = useCallback((senderId, receiverId, conversationId, body, attachment = null) => {
    const msg = {
      id: generateId(),
      conversationId,
      senderId,
      receiverId,
      body,
      attachment,
      isRead: false,
      createdAt: new Date().toISOString(),
    };
    const updated = [...messages, msg];
    persist(STORAGE_KEYS.MESSAGES, setMessages, updated);

    const convUpdated = conversations.map((c) =>
      c.id === conversationId
        ? { ...c, lastMessage: body, lastMessageAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
        : c
    );
    persist(STORAGE_KEYS.CONVERSATIONS, setConversations, convUpdated);

    addNotification(receiverId, "message_received", "New Message", body, { conversationId });
    return msg;
  }, [messages, conversations, persist, addNotification]);

  const createConversation = useCallback((participants, subject = "") => {
    const conv = {
      id: generateId(),
      participants,
      subject,
      lastMessage: "",
      lastMessageAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updated = [conv, ...conversations];
    persist(STORAGE_KEYS.CONVERSATIONS, setConversations, updated);
    return conv;
  }, [conversations, persist]);

  const markMessageRead = useCallback((messageId) => {
    const updated = messages.map((m) =>
      m.id === messageId ? { ...m, isRead: true, readAt: new Date().toISOString() } : m
    );
    persist(STORAGE_KEYS.MESSAGES, setMessages, updated);
  }, [messages, persist]);

  const trackRecentlyViewed = useCallback((userId, jobId) => {
    const filtered = recentlyViewed.filter((r) => !(r.userId === userId && r.jobId === jobId));
    const updated = [{ userId, jobId, viewedAt: new Date().toISOString() }, ...filtered].slice(0, 20);
    persist(STORAGE_KEYS.RECENTLY_VIEWED, setRecentlyViewed, updated);
  }, [recentlyViewed, persist]);

  const getRecommendedJobs = useCallback((userId) => {
    const apps = applications.filter((a) => a.userId === userId);
    const appliedJobIds = new Set(apps.map((a) => a.jobId));
    const saved = savedJobs.filter((s) => s.userId === userId);
    const savedJobIds = new Set(saved.map((s) => s.jobId));
    const viewed = recentlyViewed.filter((r) => r.userId === userId).map((r) => r.jobId);
    const scored = allJobs
      .filter((j) => j.is_active && !appliedJobIds.has(j.id))
      .map((j) => ({
        ...j,
        matchScore: Math.floor(Math.random() * 30) + 70,
        isSaved: savedJobIds.has(j.id),
        isViewed: viewed.includes(j.id),
      }))
      .sort((a, b) => b.matchScore - a.matchScore);
    return scored;
  }, [applications, savedJobs, recentlyViewed]);

  const getDashboardStats = useCallback((userId) => {
    const userApps = applications.filter((a) => a.userId === userId);
    const interviews = userApps.filter((a) => a.status === "interview");
    const saved = savedJobs.filter((s) => s.userId === userId);
    const views = profileViews.filter((v) => v.profileUserId === userId);
    const downloads = resumeDownloads.filter((d) => d.userId === userId);
    const following = savedCompanies.filter((s) => s.userId === userId);

    return {
      totalApplications: userApps.length,
      interviews: interviews.length,
      savedJobs: saved.length,
      profileViews: views.length,
      resumeDownloads: downloads.length,
      companiesFollowing: following.length,
    };
  }, [applications, savedJobs, profileViews, resumeDownloads, savedCompanies]);

  const value = {
    applications, savedJobs, savedCompanies, savedSearches,
    notifications, conversations, messages, recentlyViewed, profileViews, resumeDownloads,
    applyToJob, withdrawApplication,
    toggleSaveJob, toggleFollowCompany,
    saveSearch, deleteSavedSearch,
    addNotification, markNotificationRead, markAllNotificationsRead,
    sendMessage, createConversation, markMessageRead,
    trackRecentlyViewed, getRecommendedJobs, getDashboardStats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
