import ReactDom from "react-dom/client";
import React from 'react';
import Car from "./components/Car";
import NewCar from "./components/NewCar";
import CarWithProps from "./components/CarWithProps";
import Garage from "./components/Garage";
import Click from "./components/Click";
import Goal from "./components/Condition";
import MyForm from "./components/Form";

const myElement = <CarWithProps color="blue" brand="Ford" />;
const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<Car/>);
// root.render(<Goal isGoal={false}/>);
// const cars = [
//     { id: 1, brand: 'Ford' },
//     { id: 2, brand: 'BMW' },
//     { id: 3, brand: 'Audi' },
// ]
// root.render(<Garage cars={cars} />);
root.render(<MyForm />);