export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  color: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    color: "#f5e6d6",
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
    color: "#e5eddc",
  },
  {
    id: "ramen-bowl",
    title: "Ginger Miso Ramen",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Japanese",
    color: "#f1e4d3",
  },
  {
    id: "berry-pancakes",
    title: "Berry Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    color: "#f2e3e3",
  },
  {
    id: "green-curry",
    title: "Green Garden Curry",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Thai",
    color: "#e6ebd9",
  },
  {
    id: "lemon-pasta",
    title: "Creamy Lemon Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
    color: "#f5edcf",
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 55,
    difficulty: "Hard",
    cuisine: "French",
    color: "#eee0d5",
  },
  {
    id: "summer-salad",
    title: "Summer Garden Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    color: "#e6eedf",
  },
];
