import { useThemeContext } from "../contexts/themeContext";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useThemeContext();

    return (
      <button onClick={toggleTheme}>
        {theme === "light"
          ? "Turn it dark"
          : theme === "dark"
          ? "Turn it blue"
          : "Turn it light"}
      </button>
    );
}