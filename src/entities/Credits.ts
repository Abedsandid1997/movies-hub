export interface Crew {
  id: number;
  name: string;
  profile_path: string;
  job: string;
  gender: number;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string;
  gender: number;
}

export default interface Credits {
  cast: Cast[];
  crew: Crew[];
}
