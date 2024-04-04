import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertDate = (date: Date) => {
  return new Date(date).toDateString() + ", " + new Date(date).toLocaleTimeString();
}