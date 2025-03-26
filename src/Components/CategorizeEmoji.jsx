import React, { useState } from "react";
import emojipedia from "./emojipedia";
import Entry from "./Entry";
import "./CategorizeEmoji.css";

function CategorizeEmoji() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from emojipedia, including 'All' for showing everything
  const categories = ["All", ...new Set(emojipedia.map(emoji => emoji.category))];

  // Filter emojis based on selected category
  const filteredEmojis = selectedCategory === "All"
    ? emojipedia
    : emojipedia.filter(emoji => emoji.category === selectedCategory);

  return (
    <div>
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

      {/* Display the filtered emoji list */}
      <dl className="dictionary">
        {filteredEmojis.map(({ id, emoji, name, meaning }) => (
          <Entry key={id} emoji={emoji} name={name} meaning={meaning} />
        ))}
      </dl>
    </div>
  );
}

export default CategorizeEmoji;
