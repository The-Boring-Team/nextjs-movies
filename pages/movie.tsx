import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { getMovieData, MovieProps } from "../lib/getMovieData";

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
      <Image
        src="/images/profile.png"
        alt="profile picture"
        width={256}
        height={256}
      />
      <div>{movieData.title}</div>
      <div>{movieData.releaseYear}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const movieData = getMovieData();

  return {
    props: {
      movieData,
    },
  };
};
