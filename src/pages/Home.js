import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import "../styles.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header title={"Helper App"} backButton={false} />

      <div className="wrapper">
        <div className="container">
          <Link to="/NoteApp">
            <Button title={"Note App"} />
          </Link>
          <Link to="/TodoApp">
            <Button title={"ToDo"} />
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
