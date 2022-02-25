import styles from "../styles/Select.module.css";

type Props = {
  label: string;
};

export const Select = ({ label }: Props) => {
  return (
    <div className={styles.container}>
      {label}

      <div>&#11167;</div>
    </div>
  );
};
