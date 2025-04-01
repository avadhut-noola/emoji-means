import React from "react";
import "./Styles/ThemeToggle.css";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="toggle-container">
      <button
        className={`theme-toggle-button ${theme}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <div className="toggle-content">
          <div className="mode light-mode">
            <span className="icon sun">☀️</span>
            <span className="mode-text">Light Mode</span>
          </div>
          <div className="mode dark-mode">
            <span className="icon moon">🌙</span>
            <span className="mode-text">Dark Mode</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ThemeToggle;