import ReactDom from "react-dom/client";
import React from 'react';

const Element = <h1 className="myclass">Hello World!</h1>;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(Element);
