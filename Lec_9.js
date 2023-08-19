import react from "react";
import ReactDOM from "react-dom";
import myfav, {favprog, myName} from "./App";
import * as ques from "./App";  // jab ek sath saare import krne ho


ReactDOM.render(
  <>
    <ol>
      <li>Rajeev</li>  
      <li>{myfav}</li>   //<li>{ques.myfav}</li> 
      <li>{favprog}</li>  //<li>{ques.favprog}</li>
      <li>{myName()}</li>  //<li>{ques.myName()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
