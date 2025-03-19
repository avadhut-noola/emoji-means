import { useState } from "react";
import emojipedia from "./emojipedia";
import Entry from "./Entry";

function EmojiSearch() {
  const [query, setQuery] = useState("");

  // Filter matching emojis
  const filteredEmojis = emojipedia.filter(emoji =>
    emoji.emoji.includes(query) || 
    emoji.name.toLowerCase().includes(query.toLowerCase()) ||
    emoji.meaning.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by emoji, name or meaning"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Search Results Section */}
      {query && (
        <div>
          <h2 className="section-title">Search Results 🔍</h2>
          <div className="dictionary">
            {filteredEmojis.map(emoji => (
              <Entry key={emoji.id} emoji={emoji.emoji} name={emoji.name} meaning={emoji.meaning} />
            ))}
          </div>
        </div>
      )}

      {/* Full Emoji List will be loaded in App.jsx*/}
      <h2 className="section-title">All Emojis 😃</h2>
    </div>
  );
}

export default EmojiSearch;
