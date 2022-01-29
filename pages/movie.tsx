import Link from "next/link";
import Image from "next/image";

export default function Movie() {
  return (
    <div>
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
