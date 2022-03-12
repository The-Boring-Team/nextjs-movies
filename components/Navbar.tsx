import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "../styles/Navbar.module.css";

type Props = {
  children: ReactElement;
};

export default function Navbar({ children }: Props) {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/">
          <a>TOPMovies</a>
        </Link>
      </div>
      {children}
    </div>
  );
}
