import styles from "../styles/TextField.module.css";

type Props = {
  label: string;
  icon?: string;
};

export const TextField = ({ label, icon }: Props) => {
  return (
    <div className={styles.container}>
      <div>{icon}</div>

      {label}
    </div>
  );
};
