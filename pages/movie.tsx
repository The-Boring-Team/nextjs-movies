import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Movie() {
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
    </div>
  );
}
