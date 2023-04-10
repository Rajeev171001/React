// var React=require('react');
// var ReactDOM=require('react-dom');
//OR
import React from 'react';
import ReactDOM from 'react-dom';


// with the help of JSX- Javascript extension
// ReactDOM.render(<h1>Hello World</h1>,
// document.getElementById("root"));

//without jsx with javascript only
var h1=document.createElement("h1");
h1.innerHTML="Hello World!!";
document.getElementById("root").appendChild(h1); //to append h1 child in html
