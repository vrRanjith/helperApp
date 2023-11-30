import React, { useEffect, useState } from "react";
import "../styles.css";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";

const getTodo = () => {
  let todoList = localStorage.getItem("todoList");
  if (todoList) {
    return JSON.parse(todoList);
  } else {
    return [];
  }
};

function TodoApp() {
  const [inputValue, setInput] = useState("");
  const [todoItems, setItems] = useState(getTodo);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoItems));
  }, [todoItems]);

  function handleInputChange(event) {
    const userInput = event.target.value;
    setInput(userInput);
    if (userInput !== null) {
    }
  }

  function handleTodoItems() {
    if (inputValue.trim() !== "") {
      setItems((prevList) => {
        return [...prevList, inputValue];
      });
    }
    setInput("");
  }

  function deleteItem(id) {
    setItems(
      todoItems.filter((value, index) => {
        return index !== id;
      })
    );
  }

  return (
    <>
      <Header title={"Todo App"} backButton={true} />
      <div className="todo-wrapper">
        <div className="todo-container">
          <div className="todo-heading">
            <h1>To-Do List</h1>
          </div>
          <div className="input-section">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleTodoItems}>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
              {todoItems.map((listItems, index) => {
                return (
                  <List
                    key={index}
                    id={index}
                    item={listItems}
                    onDelete={deleteItem}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TodoApp;
