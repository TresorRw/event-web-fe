"use client"
import { ILoggedUser } from "@/interfaces"
import {create} from "zustand"

export type AuthStore = {
  isAuthenticated: boolean,
  authToken: string,
  loggedInUser: ILoggedUser,
  saveUserData: (authToken: string, loggedInUser: ILoggedUser) => void,
  clearUserData: () => void,
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  authToken: "",
  loggedInUser: {
    name: "",
    role: null
  },
  clearUserData: () => {
    set({
      isAuthenticated: false,
      authToken: "",
      loggedInUser: {
        name: "",
        role: null
      }
    })
  },
  saveUserData: (authToken, loggedInUser) => {
    set({
        isAuthenticated: true,
        authToken,
        loggedInUser,
      })
  },
}));