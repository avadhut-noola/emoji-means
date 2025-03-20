import './App.css'
import Entry from './Components/Entry'
import EmojiSearch from './Components/EmojiSearch';
import emojipedia from './Components/emojipedia'
import React, { useState, useEffect } from "react";
import ThemeToggle from "./Components/ThemeToggle";



function emojiCreator(emojiTerm) {
  return ( <Entry
      key = {emojiTerm.id}
      emoji = {emojiTerm.emoji}
      name = {emojiTerm.name}
      meaning = {emojiTerm.meaning}
    /> );
}

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
      <p class="credit">
        Created by <a href="https://www.linkedin.com/in/avadhut-noola/" target="_blank">Avadhut Noola</a> ❤️
      </p>
      <EmojiSearch />
      <dl className="dictionary">
        {emojipedia.map(emojiCreator)}
      </dl>
    </>
  )
}

export default App;
