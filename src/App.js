import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  {
    /** adding there dummy notes in our useState hooks for notes */
  }
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/25/2022",
    },
    {
      id: nanoid(),
      text: "Adding another note",
      date: "03/30/2022",
    },
    {
      id: nanoid(),
      text: "Buy more food",
      date: "04/25/2022",
    },
  ]);

  {
    /** searching text and toggle mode */
  }
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={""} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
