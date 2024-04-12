export const BackendAPI =
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

export enum EventCategories {
  CONFERENCE = "conference",
  TRAVEL_ADVENTURES = "travel_adventures",
  CHARITY = "charity",
  SPORTS_FITNESS = "sports_fitness",
  CINEMA_MEDIA = "cinema_media",
  ARTS_CULTURE = "arts_culture",
  CONCERT = "concert",
  FOOD_DRINKS = "food_drinks",
  PERFORMANCE = "performance",
}
