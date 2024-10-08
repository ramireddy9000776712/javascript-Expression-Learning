import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p className="heading" contentEditable="true">
      Created by {name}
    </p>
    <p className="headins">Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
