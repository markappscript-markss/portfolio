// Cycle bold colors per category so each one is visually distinct.
// Add more if you add more categories.
const palette = [
  { bg: "bg-teal-500", text: "text-teal-950" },
  { bg: "bg-amber-400", text: "text-amber-950" },
  { bg: "bg-violet-500", text: "text-violet-50" },
  { bg: "bg-pink-500", text: "text-pink-50" },
  { bg: "bg-orange-500", text: "text-orange-50" },
];

export function colorForCategory(categoryId: string | null, categoryIds: string[]) {
  if (!categoryId) return palette[0];
  const index = categoryIds.indexOf(categoryId) % palette.length;
  return palette[index] ?? palette[0];
}
