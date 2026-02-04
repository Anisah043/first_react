import ReactDom from "react-dom/client";
import React from 'react';
import Car from "./components/Car";
import NewCar from "./components/NewCar";

const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<Car/>);
root.render(<NewCar />);