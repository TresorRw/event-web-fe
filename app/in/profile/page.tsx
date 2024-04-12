"use client";
import { useAuthStore } from "@/app/store/auth.store";
import { useStore } from "@/app/store/useStore";
import React from "react";

const ProfilePage = () => {
  const isAuthenticated = useStore(
    useAuthStore,
    (state) => state.isAuthenticated,
  );
  const loggedInUser = useStore(useAuthStore, (state) => state.loggedInUser);

  return (
    <div>
      <p>is Autheticated: {JSON.stringify(isAuthenticated)}</p>
      <p>loggedInUser: {loggedInUser?.name}</p>
    </div>
  );
};

export default ProfilePage;
