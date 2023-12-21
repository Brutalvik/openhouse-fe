import { FC, lazy } from "react";
import styles from "components/Header/Header.module.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { setDarkMode } from "app/reducers/theme";
import { useThemeSelector } from "app/selectors/theme";
import { AppDispatch } from "app/store";

const Header: FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { darkmode }: { darkmode: boolean } = useThemeSelector();

  //toggle theme
  const toggleTheme = () => {
    import("features/actions").then((module) => {
      module.handleToggle(dispatch, setDarkMode);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.theme}>
        {darkmode ? (
          <MoonIcon w={8} h={8} onClick={toggleTheme} />
        ) : (
          <SunIcon w={8} h={8} onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
};

export default Header;
