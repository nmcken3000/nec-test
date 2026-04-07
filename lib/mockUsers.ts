import { User } from "@/lib/types";

export const mockUsers: User[] = [
  {
    id: "1",
    fullName: "Bukayo Saka",
    age: 24,
    country: "England",
    interests: ["Tactics", "Fantasy Football"],
  },
  {
    id: "2",
    fullName: "Martin Ødegaard",
    age: 27,
    country: "Norway",
    interests: ["Tactics", "Coaching", "Match Analysis"],
  },
  {
    id: "3",
    fullName: "Gabriel Martinelli",
    age: 24,
    country: "Brazil",
    interests: ["Fantasy Football", "Transfers"],
  },
  {
    id: "4",
    fullName: "Declan Rice",
    age: 27,
    country: "England",
    interests: ["Coaching", "Match Analysis", "Tactics"],
  },
  {
    id: "5",
    fullName: "David Raya",
    age: 30,
    country: "Spain",
    interests: ["Coaching", "Tactics"],
  },
];

// The fixed list of interest options for the form checkboxes
export const INTERESTS = [
  "Tactics",
  "Transfers",
  "Fantasy Football",
  "Coaching",
  "Match Analysis",
] as const;

// The fixed list of country options for the form checkboxes
export const COUNTRIES = [
  "Brazil",
  "England",
  "France",
  "Germany",
  "Italy",
  "Norway",
  "Portugal",
  "Spain",
] as const;
