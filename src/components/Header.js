import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const renderButton = props.backButton;
  return (
    <header>
      <h1>{props.title}</h1>
      {renderButton && (
        <Link to="/" className="back-button-link">
          <button>
            <div className="button-arrow">←</div>
          </button>
        </Link>
      )}
    </header>
  );
}

export default Header;
