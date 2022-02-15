import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data");

export function getMovieData(): MovieProps {
  const filePath = path.join(dataDirectory, "movie.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

export type MovieProps = {
  title: string;
  releaseYear: number;
}