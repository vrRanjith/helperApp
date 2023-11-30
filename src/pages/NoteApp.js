import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateArea from "../components/CreateArea";
import { useEffect, useState } from "react";
import Note from "../components/Note";

const getNotes = () => {
  let notesList = localStorage.getItem("notesList");
  if (notesList) {
    return JSON.parse(localStorage.getItem("notesList"));
  } else {
    return [];
  }
};

export default function NoteApp() {
  const [notes, setNotes] = useState(getNotes);

  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header title={"Note It"} backButton={true} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
