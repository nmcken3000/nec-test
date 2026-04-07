export type Country = "Norway" | "Brazil" | "England" | "Spain";
export type User = {
  id: string;
  fullName: string;
  age: number;
  country: Country;
  interests: string[];
};
