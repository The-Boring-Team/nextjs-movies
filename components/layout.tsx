import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "./navbar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>
    </div>
  );
}
