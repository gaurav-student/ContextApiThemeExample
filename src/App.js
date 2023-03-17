import { useContext, useEffect } from "react";
import { ThemeContext } from "./components/theme";
import "./styles.css";

export default function App() {
  const [{ theme, isDark }, toggletheme] = useContext(ThemeContext);
  // console.log(theme);

  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div>It's {isDark ? "Dark" : "Light"}</div>
      <button onClick={toggletheme}>Toggle theme</button>
    </div>
  );
}
