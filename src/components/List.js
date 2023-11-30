import React from "react";
import "../styles.css";

function List(props) {
  return (
    <div
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default List;
