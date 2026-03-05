export interface Hobby {
  label: string;
  emoji: string;
  description: string;
  color: string;
}

export const hobbies: Hobby[] = [
  {
    label: "Biking",
    emoji: "🚴",
    description: "Hitting the open road — early morning rides that clear the mind.",
    color: "#ff5e1a",
  },
  {
    label: "Travel",
    emoji: "✈️",
    description: "Exploring new cultures, cuisines, and perspectives around the world.",
    color: "#ffd60a",
  },
  {
    label: "Music",
    emoji: "🎵",
    description: "Discovering new genres and artists. Music is the background to everything.",
    color: "#a855f7",
  },
  {
    label: "Gymming",
    emoji: "💪",
    description: "Consistent training — discipline in the gym reflects discipline in code.",
    color: "#22c55e",
  },
];
