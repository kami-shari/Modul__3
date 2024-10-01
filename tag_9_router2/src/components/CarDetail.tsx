import { useParams } from "react-router-dom";
import carsData from "./Data"



const getCar = (id: string) => {
    return carsData.find((car) => car.id === Number(id));
  };

  function CarDetail() {
    const { id } = useParams()
   
    if (!id) {
        return "404 no car";
      }

    const car = getCar(id);



    return (
        <>
      <h1>{car.carModel}</h1>
      <p>Brand: {car.CarMake}</p> 
      <p>Year: {car.CarYear}</p> 
    </>
    )
  }
  

  export default CarDetail