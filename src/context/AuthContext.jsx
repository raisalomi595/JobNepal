import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { storage } from "../services/storage";
import { STORAGE_KEYS } from "../utils/constants";
import { simpleHash, generateId } from "../utils/helpers";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = storage.get(STORAGE_KEYS.CURRENT_USER);
    if (saved) setUser(saved);
    setLoading(false);
  }, []);

  const login = useCallback((email, password) => {
    const users = storage.get(STORAGE_KEYS.USERS, []);
    const found = users.find((u) => u.email === email && u.password === simpleHash(password));
    if (!found) return { success: false, error: "Invalid email or password" };

    const sessionUser = {
      id: found.id,
      email: found.email,
      firstName: found.firstName,
      lastName: found.lastName,
      phone: found.phone,
      role: found.role || "user",
      avatar: found.avatar || null,
      createdAt: found.createdAt,
    };

    storage.set(STORAGE_KEYS.CURRENT_USER, sessionUser);
    setUser(sessionUser);
    return { success: true };
  }, []);

  const signup = useCallback((data) => {
    const users = storage.get(STORAGE_KEYS.USERS, []);
    if (users.find((u) => u.email === data.email)) {
      return { success: false, error: "Email already registered" };
    }

    const newUser = {
      id: generateId(),
      email: data.email,
      password: simpleHash(data.password),
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone || "",
      role: "user",
      avatar: null,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    storage.set(STORAGE_KEYS.USERS, users);

    const sessionUser = { ...newUser };
    delete sessionUser.password;
    storage.set(STORAGE_KEYS.CURRENT_USER, sessionUser);
    setUser(sessionUser);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    storage.remove(STORAGE_KEYS.CURRENT_USER);
    setUser(null);
  }, []);

  const updateProfile = useCallback((updates) => {
    const users = storage.update(STORAGE_KEYS.USERS, (list) =>
      list.map((u) => (u.id === user.id ? { ...u, ...updates } : u))
    , []);
    const updated = { ...user, ...updates };
    storage.set(STORAGE_KEYS.CURRENT_USER, updated);
    setUser(updated);
    return true;
  }, [user]);

  const value = { user, loading, login, signup, logout, updateProfile, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
