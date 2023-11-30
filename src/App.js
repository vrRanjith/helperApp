import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoteApp from "./pages/NoteApp";
import TodoApp from "./pages/TodoApp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/NoteApp" exact element={<NoteApp />}></Route>
          <Route path="/TodoApp" exact element={<TodoApp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
