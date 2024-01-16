import useToggleTheme from "@/hooks/use-toggle-theme";
import { useEffect, useState } from "react";

const ColorModeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useToggleTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-input"
        checked={currentTheme === "dark"}
        onChange={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      />
      <div className="toggle-switch-label">
        {/* <span className="mode-text">Dark Mode</span>
        <span className="mode-text">Light Mode</span> */}
      </div>
    </label>
  );
};

export default ColorModeSwitcher;
