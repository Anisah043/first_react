import CarWithProps from "./CarWithProps";

function Garage() {
    const carInfo = {model: "Mustang", year: 1964};
    return (
      <div>
        <h1>Who lives in my garage?</h1>
        <CarWithProps brand={carInfo} />
      </div>
    );
}

export default Garage;