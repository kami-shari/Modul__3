import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { beerByID } from "../lip/API";
import { BeerList } from "../lip/API";

export default function DetailPage() {
  const { id } = useParams();

  const beerQuery = useQuery<BeerList>({
    queryKey: ["brand", id],
    queryFn: () => beerByID(id!),
  });
  if (beerQuery.isError) {
    return "Keine Daten vorhanden";
  }
  if (beerQuery.isPending) {
    return "Im Ladevorgang...";
  }

  return (
    <div>
      <h2>Bierdetails{id}</h2>
      <h1>{beerQuery.data.name}</h1>
    </div>
  );
}
