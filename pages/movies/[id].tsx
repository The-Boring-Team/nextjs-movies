import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Genre, MovieProps } from "../../types";
import styles from "../../styles/Movie.module.css";

type Props = {
  movieData: MovieProps;
};

export default function Movie({ movieData }: Props) {
  const movieGenres: string = movieData.genres
    .map((genre: Genre) => genre.name)
    .join(", ");

  const releaseYear: number = new Date(movieData.release_date).getFullYear();

  const movieDuration: string = `${Math.floor(movieData.runtime / 60)} h ${
    movieData.runtime % 60
  } min`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{movieData.title}</title>
        <link rel="icon" href="/images/profile.png" />
      </Head>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <div>
        <h2>{movieData.title}</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.primaryContainer}>
          <div className={styles.posterContainer}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
              alt="Movie image"
              layout="fill"
            />
          </div>
          <h5>About</h5>
          <p>{movieData.overview}</p>
        </div>
        <div className={styles.secondaryContainer}>
          <p className={styles.chip}>{releaseYear}</p>
          <p className={styles.chip}>{movieDuration}</p>
          <h5>Genres</h5>
          <span>{movieGenres}</span>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4311457e3cc8a7c606a63fb963646ad1"
  );
  const popularMovies = await req.json();
  const movieIds = popularMovies.results.map((movie: MovieProps) => ({
    params: {
      id: movie.id.toString(),
    },
  }));

  return {
    paths: movieIds,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4311457e3cc8a7c606a63fb963646ad1`
  );
  const data = await req.json();

  return {
    props: {
      movieData: data,
    },
  };
};
