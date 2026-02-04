import React from "react";
import ReactDom from "react-dom/client";

class NewCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "red", brand: "Ford" };
    }
    changeColor = () => {
        this.setState({ color: "blue" });
    }
    render() {
        return (
            <>
                <h2>I am a {this.state.color} {this.state.brand}!</h2>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

export default NewCar;