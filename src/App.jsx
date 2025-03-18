import './App.css'
import Entry from './Components/Entry'
import emojipedia from './Components/emojipedia'

function emojiCreator(emojiTerm) {
  return ( <Entry
      key = {emojiTerm.id}
      emoji = {emojiTerm.emoji}
      name = {emojiTerm.name}
      meaning = {emojiTerm.meaning}
    /> );
}

function App() {
  return (
    <>
      <h1> <span> EmojiMeans </span> </h1>
      <p class="credit">
        Created by <a href="https://www.linkedin.com/in/avadhut-noola/" target="_blank">Avadhut Noola</a> ❤️
      </p>
      <dl className="dictionary">
        {emojipedia.map(emojiCreator)}
      </dl>
    </>
  )
}

export default App
