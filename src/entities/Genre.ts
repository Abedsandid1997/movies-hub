export default interface Genres {
  id: number;
  name: string;
}

export default interface Genre {
  genres: Genres[];
}
