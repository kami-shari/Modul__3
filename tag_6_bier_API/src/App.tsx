import { useEffect, useState } from "react";
import { beerAPI } from "./components/API";
import { BeerList } from "./components/API";
import Description from "./components/Description";
import RandomBeer from "./components/RandomBeer";


function App() {
  const [beerBrand, setBeerBrand] = useState<BeerList[]>([])
  const fetchBeer = async () => {
    try {
      const response = await fetch(beerAPI);
      const data = await response.json();
      setBeerBrand(data);
    } catch (error) {
      console.error("Fehler", error);
    }
  }


useEffect(() => {
  fetchBeer()
}, [])

return (
  <div>
    <h1>Zufällige Biersorte</h1>

       <RandomBeer />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />

    <h1>Bierliste</h1>
    <div className="beer-list">
      {beerBrand.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url}  style={{ height: "100px" }} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p><strong>Produzent:</strong> {beer.contributed_by}</p>
        
        </div>
      ))}
    </div>
  </div>
);
}



export default App