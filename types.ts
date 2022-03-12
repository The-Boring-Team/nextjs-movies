export type Genre = {
  id: number;
  name: string;
};

export type MovieProps = {
  id: number;
  title: string;
  release_date: Date;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genres: Genre[];
  runtime: number;
};
