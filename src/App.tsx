import styles from "App.module.css";
import { useThemeSelector } from "app/selectors/theme";

const App = () => {
  const themeSelector = useThemeSelector();
  console.log(themeSelector);

  return <div className={styles.app}></div>;
};

export default App;
