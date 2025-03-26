import './App.css'
import Entry from './Components/Entry'
import EmojiSearch from './Components/EmojiSearch';
import React, { useState, useEffect } from "react";
import ThemeToggle from "./Components/ThemeToggle";
import CategorizeEmoji from "./Components/CategorizeEmoji";

function App() {
  // Load theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("Theme switched to:", theme); // Debugging check
  };

  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <h1> <span> EmojiMeans </span> </h1>
      <p className="credit">
        Created by <a href="https://www.linkedin.com/in/avadhut-noola/" target="_blank">Avadhut Noola</a> ❤️
      </p>
      <EmojiSearch />
      <CategorizeEmoji />
    </>
  )
}

export default App;
