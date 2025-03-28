"use client";
import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{ selectedProfile, setSelectedProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
