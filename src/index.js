import ReactDom from "react-dom/client";
import React from 'react';
import Car from "./components/Car";
// Class component
// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }
// Functional component

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Car/>);
