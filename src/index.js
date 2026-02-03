import ReactDom from "react-dom/client";
import React from 'react';

// Class component
// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }
// Functional component
function Car(props){
  return <h2>I am a {props.color} Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car color="red"/>
      <Car color="green"/>
      <Car color="blue"/>
    </>
  );
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Garage/>);
