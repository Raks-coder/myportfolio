import { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import HobbiesList from "./components/HobbiesList/HobbiesList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <HobbiesList />
      <Contact />
    </div>
  );
};

export default App;