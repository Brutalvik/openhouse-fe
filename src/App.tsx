import { lazy, Suspense } from "react";
import styles from "App.module.css";

import CustomSpinner from "components/Customspinner/Customspinner";

const Home = lazy(() => import("components/Home/Home"));

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<CustomSpinner />}>
        <Home />
      </Suspense>
    </div>
  );
};

export default App;
