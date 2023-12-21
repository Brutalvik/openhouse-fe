import { FC } from "react";
import styles from "components/Customspinner/Customspinner.module.css";
import { Center } from "@chakra-ui/react";

const CustomSpinner: FC = () => {
  return (
    <Center h="100vh">
      <div className={styles.circle}></div>
    </Center>
  );
};

export default CustomSpinner;
