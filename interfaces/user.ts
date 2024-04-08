export interface ILoggedUser {
  name: string
  role: "organizer" | "attendee" | null
}