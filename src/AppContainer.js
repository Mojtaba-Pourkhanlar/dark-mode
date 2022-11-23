import { useContext } from "react";
import { ChangeTheme } from "./frontend/components/ChangeTheme";
import Landing from "./frontend/components/landing";
import { ThemeContext } from "./frontend/Theme";

function AppContainer() {
  const { toggle, toggleFunction } = useContext(ThemeContext);
  return (
    <>
      <Landing />
      <ChangeTheme toggle={toggle} toggleFunction={toggleFunction} />
    </>
  );
}

export default AppContainer;
