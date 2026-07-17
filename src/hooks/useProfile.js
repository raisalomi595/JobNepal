import { useState, useCallback } from "react";
import { storage } from "../services/storage";
import { STORAGE_KEYS } from "../utils/constants";
import { calculateProfileCompletion, generateId } from "../utils/helpers";

export function useProfile(userId) {
  const getProfile = useCallback(() => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    return all[userId] || {};
  }, [userId]);

  const [profile, setProfileState] = useState(getProfile);

  const saveProfile = useCallback((updates) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const updated = { ...current, ...updates };
    updated.completionPct = calculateProfileCompletion(updated);
    all[userId] = updated;
    storage.set(STORAGE_KEYS.PROFILE, all);
    setProfileState(updated);
    return updated;
  }, [userId]);

  const addEducation = useCallback((edu) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = current.education || [];
    list.push({ id: generateId(), ...edu });
    return saveProfile({ ...current, education: list });
  }, [userId, saveProfile]);

  const removeEducation = useCallback((eduId) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = (current.education || []).filter((e) => e.id !== eduId);
    return saveProfile({ ...current, education: list });
  }, [userId, saveProfile]);

  const addExperience = useCallback((exp) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = current.experience || [];
    list.push({ id: generateId(), ...exp });
    return saveProfile({ ...current, experience: list });
  }, [userId, saveProfile]);

  const removeExperience = useCallback((expId) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = (current.experience || []).filter((e) => e.id !== expId);
    return saveProfile({ ...current, experience: list });
  }, [userId, saveProfile]);

  const addSkill = useCallback((skill) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = current.skills || [];
    if (list.find((s) => s.name.toLowerCase() === skill.name.toLowerCase())) return current;
    list.push({ id: generateId(), ...skill });
    return saveProfile({ ...current, skills: list });
  }, [userId, saveProfile]);

  const removeSkill = useCallback((skillId) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = (current.skills || []).filter((s) => s.id !== skillId);
    return saveProfile({ ...current, skills: list });
  }, [userId, saveProfile]);

  const addLanguage = useCallback((lang) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = current.languages || [];
    if (list.find((l) => l.name.toLowerCase() === lang.name.toLowerCase())) return current;
    list.push({ id: generateId(), ...lang });
    return saveProfile({ ...current, languages: list });
  }, [userId, saveProfile]);

  const removeLanguage = useCallback((langId) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = (current.languages || []).filter((l) => l.id !== langId);
    return saveProfile({ ...current, languages: list });
  }, [userId, saveProfile]);

  const addCertificate = useCallback((cert) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = current.certificates || [];
    list.push({ id: generateId(), ...cert });
    return saveProfile({ ...current, certificates: list });
  }, [userId, saveProfile]);

  const removeCertificate = useCallback((certId) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = (current.certificates || []).filter((c) => c.id !== certId);
    return saveProfile({ ...current, certificates: list });
  }, [userId, saveProfile]);

  const addProject = useCallback((proj) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = current.projects || [];
    list.push({ id: generateId(), ...proj });
    return saveProfile({ ...current, projects: list });
  }, [userId, saveProfile]);

  const removeProject = useCallback((projId) => {
    const all = storage.get(STORAGE_KEYS.PROFILE, {});
    const current = all[userId] || {};
    const list = (current.projects || []).filter((p) => p.id !== projId);
    return saveProfile({ ...current, projects: list });
  }, [userId, saveProfile]);

  const uploadResume = useCallback((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const profile = saveProfile({
          resume_url: e.target.result,
          resume_name: file.name,
          resume_type: file.type,
        });
        resolve(profile);
      };
      reader.readAsDataURL(file);
    });
  }, [saveProfile]);

  const uploadPhoto = useCallback((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const profile = saveProfile({ avatar: e.target.result });
        resolve(profile);
      };
      reader.readAsDataURL(file);
    });
  }, [saveProfile]);

  return {
    profile,
    saveProfile,
    addEducation, removeEducation,
    addExperience, removeExperience,
    addSkill, removeSkill,
    addLanguage, removeLanguage,
    addCertificate, removeCertificate,
    addProject, removeProject,
    uploadResume, uploadPhoto,
  };
}
