import React from 'react';
import ReactDOM from 'react-dom';


const flname="Rajeev Sharma";
ReactDOM.render(
  <>
    <h1>My name is {flname}</h1>
    <p>My number is {3+4}</p>
    <p>My another number id {Math.random()}</p>
    
  </>,
  document.getElementById("root")
)

//in {} - expression only used not statements
