import { useQuery } from "@tanstack/react-query";
import { BeerList } from "../lip/API";

const fetchBeers = async () => {
  const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
  if (!response.ok) {
    throw new Error("Fehler beim Abrufen der Biere");
  }
  return response.json();
};

const AllBeers = () => {
  const { data: beers, error, isLoading } = useQuery({
    queryKey: ["beers"], 
    queryFn: fetchBeers, 
  });

  if (isLoading) {
    return <div>Lade Biere...</div>; 
  }

  if (error instanceof Error) {
    return <div>Fehler: {error.message}</div>; 
  }

  return (
    <div>
      <h1>Bier Galerie</h1>
      <div className="beer-gallery">
        {beers.map((beer: BeerList) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{ height: "100px" }} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBeers;