import Link from "next/link";

export default function Movie() {
  return (
    <div>
      My first movie page!
      <Link href="/">
        <a>Homepage</a>
      </Link>
    </div>
  );
}
