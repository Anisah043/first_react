import ReactDom from "react-dom/client";
import React from 'react';

const Header = () => {
  const myStyle = {
    color: 'red',
    backgroundColor: 'lightgrey',
  };
  return (
    <>
      <h1 style={myStyle}>Red red</h1>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Header />);
