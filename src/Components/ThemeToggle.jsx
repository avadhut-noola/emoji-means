import React from "react";
import "./Styles/ThemeToggle.css"; // Styles for toggle theme mode

function ThemeToggle({ theme, toggleTheme }) {
    return (
      <div className="toggle-container">
        <span className="toggle-text">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
        <input
          type="checkbox"
          id="theme-toggle"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <label htmlFor="theme-toggle" className="toggle-label">
          <span className="toggle-slider"></span>
        </label>
      </div>
    );
  }
  
  export default ThemeToggle;