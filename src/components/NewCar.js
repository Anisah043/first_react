import React from "react";
import ReactDom from "react-dom/client";

class NewCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red", brand: "Ford"};
    }
    render(){
        return(
            <h2>I am a {this.state.color} {this.state.brand}!</h2>
        )
    }
}

export default NewCar;