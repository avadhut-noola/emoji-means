import './App.css'
import Entry from './Components/Entry'
import EmojiSearch from './Components/EmojiSearch';
import React, { useState, useEffect } from "react";
import ThemeToggle from "./Components/ThemeToggle";
import CategorizeEmoji from "./Components/CategorizeEmoji";

function App() {
  // Load theme from localStorage or default to "dark"
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  // Lift the category state up to App
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Apply theme to both body and documentElement
    document.body.setAttribute("data-theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute("data-theme", theme);

    // Save to localStorage
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

      <h1 className="main-title"> <span> EmojiMeans </span> </h1>
      <p className="credit">
        Created by <a href="https://www.linkedin.com/in/avadhut-noola/" target="_blank">Avadhut Noola</a> ❤️
      </p>
      
      {/* Create a wrapper for filter and search controls */}
      <div className="emoji-controls">
        {/* Extract just the category filter from CategorizeEmoji */}
        <div className="category-select-wrapper">
          <CategorizeEmoji 
            showEmojiList={false}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        
        {/* Search component */}
        <EmojiSearch />
      </div>
      
      {/* Emoji list display */}
      <CategorizeEmoji 
        showFilterControls={false}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  )
}

export default App;