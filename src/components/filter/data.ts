type FilterType = {
  title: string,
  value: "author" | "genre" | "order";
}

export const filters: FilterType[] = [
  {
    title: "Исполнителю",
    value: "author",
  },
  {
    title: "Жанр",
    value: "genre",
  },
  {
    title: "Году выпуска",
    value: "order",
  },
];
export const order = ["По умолчанию", "Сначала новые", "Сначала старые"];
