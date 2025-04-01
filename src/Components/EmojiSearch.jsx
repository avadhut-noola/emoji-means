import { useState } from "react";
import emojipedia from "../Components/emojipedia.json";
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
          placeholder="Search by emoji or name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Search Results Section */}
      {query && (
        <div>
          <h2 className="section-title">Search Results 🔍</h2>
          {/* Search results container */}
          <div className="search-results">
            {filteredEmojis.length > 0 ? (
              filteredEmojis.map(emoji => (
                <div key={emoji.id} className="term">
                  <dt>
                    <span className="emoji" role="img" aria-label={emoji.name}>
                      {emoji.emoji}
                    </span>
                    <span>{emoji.name}</span>
                  </dt>
                  <dd>{emoji.meaning}</dd>
                </div>
              ))
            ) : (
              <p className="no-results">No emojis found for "{query}"</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EmojiSearch;