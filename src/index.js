import ReactDom from "react-dom/client";
import React from 'react';

const x = 5;
let text = 'Goodbye'
if(x < 10){
  text = 'If condition'
}
const Element = <h1>{text}</h1>;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(Element);
