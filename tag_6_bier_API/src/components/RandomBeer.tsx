import { useState, useEffect } from "react";
import { beerAPI, BeerList, randomAPI } from "./API"; 


function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState<BeerList[]>([]);

  const fetchRandomBeer = async () => {
    try {
      const response = await fetch(randomAPI);
      const data = await response.json();
      setRandomBeer([data]);
    } catch (error) {
      console.error("Fehler", error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return (
    <div>
      <img src={randomBeer[0]?.image_url}  style={{ height: "50px" }}  />
      <h2> Name:{randomBeer[0]?.name}</h2>
      <p>{randomBeer[0]?.tagline}</p>
    
      <p>
        {randomBeer[0]?.description}
      </p>
      <p>
        {randomBeer[0]?.contributed_by}
      </p>
    </div>
  );
}

export default RandomBeer;