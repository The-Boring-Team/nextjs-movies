import styles from "../styles/Navbar.module.css";
import { Select } from "./select";
import { TextField } from "./textfield";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appName}>TOPMovies</div>

      <div className={styles.actions}>
        <Select label="Genres" />
        <TextField label="Search..." icon="&#x1F50E;&#xFE0E;" />
      </div>
    </div>
  );
};
