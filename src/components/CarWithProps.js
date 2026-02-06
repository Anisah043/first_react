import ReactDom from "react-dom/client";

function CarWithProps(props){
    return <li>Car brand: {props.brand}</li>;
}

export default CarWithProps;