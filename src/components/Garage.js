function Garage(props) {
    const cars = props.cars
    return (
      <div>
        <h1>How many cars in my garage?</h1>
        {cars.length > 0 && (
          <h1>I have {cars.length} in your garage</h1>
        )}
      </div>
    );
}

export default Garage;