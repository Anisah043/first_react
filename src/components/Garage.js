import CarWithProps from "./CarWithProps";
function Garage(props) {
    const cars = props.cars
    return (
      <div>
        <h1>What is in my garage?</h1>
        <ul>
          {cars.map((car) => <CarWithProps cars={car}/>)}
        </ul>
      </div>
    );
}

export default Garage;