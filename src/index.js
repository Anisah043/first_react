import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
// const myFirstElement = (
//   <table>
//     <tbody>
//       <tr>
//         <td>Name</td>
//       </tr>
//       <tr>
//         <td>Name</td>
//         <td>Name</td>
//       </tr>
//     </tbody>
//   </table>
// )

// const myFirstElement = <h1>React is {5 + 5} times better with JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myFirstElement)

// ReactDOM.createRoot(document.getElementById('sandy')).render(<p>Hi, Sandy!</p>)

// function MyForm() {
//   const [textarea, setTextarea] = useState('Wow a textaera!')

//   const handleChange = (event) => {
//     setTextarea(event.target.value)
//   }

//   return (
//     <form>
//       <label htmlFor="my-textarea">Textarea:</label>
//       <textarea
//         id="my-textarea"
//         value={textarea}
//         onChange={handleChange}
//       ></textarea>
//       <p>{textarea.length} characters</p>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<MyForm />)

function MyForm(){
  const [car, setCar] = useState('Volvo')
  const handleChange = (event) => {
    setCar(event.target.value)
  }
  return (
    <form>
      <label htmlFor="cars">Choose a car:</label>
      <select id="cars" value={car} onChange={handleChange}>
        <option value="Volvo">Volvo</option>
        <option value="Saab">Saab</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
      </select>
      <p>Your selected car is: {car}</p>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyForm />)
