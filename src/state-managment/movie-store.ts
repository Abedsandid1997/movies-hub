import { create } from "zustand";

interface MovieQuery {
  genreId?: number;
  searchText?: string;
  sortBy?: string;
  withAdult?: boolean;
}

interface movieQueryStore {
  movieQuery: MovieQuery;
  setGenreId: (genreId: number) => void;
  setSearchText: (searchText: string) => void;
  setSortBy: (sortBy: string) => void;
  setWithAdult: (withAdult: boolean) => void;
}

const useMovieQueryStore = create<movieQueryStore>((set) => ({
  movieQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),
  setSearchText: (searchText) => set(() => ({ movieQuery: { searchText } })),
  setSortBy: (sortBy) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sortBy } })),
  setWithAdult: (withAdult) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, withAdult } })),
}));

export default useMovieQueryStore;
