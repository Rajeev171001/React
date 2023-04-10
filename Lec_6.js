import React from 'react';
import ReactDOM from 'react-dom';


const fname="Rajeev";
const lname="Sharma";
ReactDOM.render(
  <>
    {/* <h1>My name is {fname} {lname}</h1>
    <h1>My name is {fname + " " +lname}</h1> */}

    
    <h1>{`my first name is ${fname} and last name is ${lname}`}</h1> 
    <p>My number is {3+4}</p>
    <p>My another number id {Math.random()}</p>
    
  </>,
  document.getElementById("root")
)

//in {} - expression only used not statements
