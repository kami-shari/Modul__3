import { NavLink } from "react-router-dom";
import carsData from "./Data";

function CarList() {
  return (
    <div className="grid">
      {carsData.map((car) => (
        <div key={`${car.CarMake}-${car.CarYear}`}>
          <h2>{car.carModel}</h2>
          <p>{car.CarMake}</p>
          <p>{car.CarYear}</p>
        <NavLink to={`/cars/${car.id}`}>Read more</NavLink>      
        </div>
      ))}
    </div>
  );
}

export default CarList
