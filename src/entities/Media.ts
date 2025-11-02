import type Genres from "./Genre";

export default interface Media {
  title?: string;
  genre_ids: number[];
  id: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  popularity: number;
  vote_average: number;
  release_date: string;
  adult: boolean;
  name?: string;
  first_air_date?: string;
  genres?: Genres[];
  status?: string;
}
