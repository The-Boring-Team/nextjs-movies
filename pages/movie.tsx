import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { MovieProps } from "../types";

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
      <div>{movieData.release_date}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch("https://api.themoviedb.org/3/movie/550?api_key=4311457e3cc8a7c606a63fb963646ad1");
  const movieData = await req.json();

  return {
    props: {
      movieData,
    },
  };
};
