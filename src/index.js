import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ToDo from "./pages/ToDo";
import { useState } from "react";
import React from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [toDos, setToDos] = useState(["toDo 1", "toDo 2"]);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <ToDo todos={toDos} />
      <hr />
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
    </>
  )
  // return(
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path="blogs" element={<Blogs />} />
  //         <Route path="contact" element={<Contact />} />
  //         <Route path="*" element={<NoPage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // )
}

// export default App;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
