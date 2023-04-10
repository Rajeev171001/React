import React from 'react';
import ReactDOM from 'react-dom';

//How to print more than one elements using render
ReactDOM.render(
  //JSX elements- <h1>, <p>, <div>, etc
  //render take only one elements before comma(,) so we make it onle one element div and inside div we can make many elements
  // <div>
  //   <h1>Hello</h1>
  //   <p>RAjeev Sharma</p>
  //   <h2>How Are You?</h2>
  // </div>,
// by using array
  [
    <h1>Hello</h1>,
    <p>Rajeev Sharma</p>,
    <h2>How Are You?</h2>
  ],// by using array , here JSX elements are elements of Array
  document.getElementById("root")
)
