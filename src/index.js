import ReactDom from "react-dom/client";
import React from 'react';

const x = 5;

const Element = <h1>{(x) <10 ? "If statement!": "GoodBye"}</h1>;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(Element);
