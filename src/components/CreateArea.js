import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      if (name === "content" && value.trim() === "") {
        return prevNote;
      }
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (note.content !== "") {
      props.onAdd(note);
    }
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClickState() {
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            name="title"
            placeholder="title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="take a note..."
          value={note.content}
          onChange={handleChange}
          onClick={handleClickState}
          rows={isClicked ? 3 : 1}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
