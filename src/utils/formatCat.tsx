export const formatCat = (cat: string) =>
  cat.split(" ").map((w, i) => <span key={i}>{w}</span>);
