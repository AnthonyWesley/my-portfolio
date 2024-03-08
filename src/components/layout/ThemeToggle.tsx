"use clenti";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="cursor-pointer self-start text-3xl hover:text-zinc-600"
    >
      {darkMode && (
        <Icon icon="line-md:sunny-outline-to-moon-loop-transition" />
      )}
      {!darkMode && (
        <Icon icon="line-md:moon-alt-to-sunny-outline-loop-transition" />
      )}
    </div>
  );
}
