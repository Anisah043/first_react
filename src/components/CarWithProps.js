import ReactDom from "react-dom/client";

function CarWithProps(props){
    return <h2>I am a {props.color} {props.brand.model}!</h2>;
}

export default CarWithProps;