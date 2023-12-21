import { FC } from "react";
import styles from "components/Customspinner/Customspinner.module.css";

const CustomSpinner: FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.circle}></div>
    </div>
  );
};

export default CustomSpinner;
