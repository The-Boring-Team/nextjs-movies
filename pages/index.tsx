import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Carousel } from "../components/carousel";
import styles from "../styles/Home.module.css";
import { MovieProps } from "../types";

const noImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

type Props = {
  popularMovies: MovieProps[];
};

const Home: NextPage<Props> = ({ popularMovies }) => {
  console.log(popularMovies);

  return (
    <div className={styles.container}>
      <Carousel
        title="Popular"
        items={popularMovies.map((movie) => ({
          img: movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : noImageUrl,
          title: movie.title,
        }))}
      />

      <Carousel
        title="Comedy"
        items={popularMovies.map((movie) => ({
          img: movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : noImageUrl,
          title: movie.title,
        }))}
      />

      <Carousel
        title="Action"
        items={popularMovies.map((movie) => ({
          img: movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : noImageUrl,
          title: movie.title,
        }))}
      />

      <Carousel
        title="SF & Fantasy"
        items={popularMovies.map((movie) => ({
          img: movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : noImageUrl,
          title: movie.title,
        }))}
      />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4311457e3cc8a7c606a63fb963646ad1");
  const popularMoviesData = await req.json();

  return {
    props: {
      popularMovies: popularMoviesData.results,
    },
  };
};
