import { FC, lazy, Suspense } from "react";
import CustomSpinner from "components/Customspinner/Customspinner";

const Header = lazy(() => import("components/Header/Header"));

const Home: FC = () => {
  return (
    <Suspense fallback={<CustomSpinner />}>
      <Header />
    </Suspense>
  );
};

export default Home;
