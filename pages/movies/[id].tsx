import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Head from "next/head";
import { MovieProps } from "../../types";

type Props = {
  movieData: MovieProps;
};

export default function Movie({ movieData }: Props) {
  return (
    <div>
      <Head>
        <title>Iron Man</title>
        <link rel="icon" href="/images/profile.png" />
      </Head>
      My first movie page!
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <div>{movieData.title}</div>
      <div>{movieData.release_date}</div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4311457e3cc8a7c606a63fb963646ad1");
  const popularMovies = await req.json();
  const movieIds = popularMovies.results.map((movie: MovieProps) => ({
    params: {
      id: movie.id.toString(),
    },
  }));

  return {
    paths: movieIds,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4311457e3cc8a7c606a63fb963646ad1`);
  const data = await req.json();

  return {
    props: {
      movieData: data,
    },
  };
};
