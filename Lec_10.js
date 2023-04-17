import react from "react";
import ReactDOM from "react-dom";
import {add,sub,mul,div}from "./cal"


ReactDOM.render(
  <>
    <ul>
      <li>{add(1,2)}</li>
      <li>{sub(1,3)}</li>
      <li>{mul(1,3)}</li>
      <li>{div(1,3)}</li>
    </ul>
  </>,document.getElementById("root")
);
