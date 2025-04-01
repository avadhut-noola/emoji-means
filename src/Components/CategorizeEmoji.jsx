import React from "react";
import emojipedia from "../Components/emojipedia.json";
import Entry from "./Entry";
import "./Styles/CategorizeEmoji.css";

function CategorizeEmoji({ 
  showFilterControls = true, 
  showEmojiList = true, 
  selectedCategory = "All", 
  setSelectedCategory 
}) {
  // Get unique categories from emojipedia, including 'All' for showing everything
  const categories = ["All", ...new Set(emojipedia.map(emoji => emoji.category))];

  // Filter emojis based on selected category
  const filteredEmojis = selectedCategory === "All"
    ? emojipedia
    : emojipedia.filter(emoji => emoji.category === selectedCategory);

  return (
    <div>
      {showFilterControls && (
        <div className="category-select-wrapper">
          {/* Dropdown to select emoji category */}
          <label htmlFor="category-select">Filter by Category: </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display the filtered emoji list */}
      {showEmojiList && (
        <dl className="dictionary">
          {filteredEmojis.map(({ id, emoji, name, meaning }) => (
            <Entry key={id} emoji={emoji} name={name} meaning={meaning} />
          ))}
        </dl>
      )}
    </div>
  );
}

export default CategorizeEmoji;