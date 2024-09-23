import type { Animal } from "../../types";

interface AnimalCardProps {
  animal: Animal;
}

function AnimalCard(props: AnimalCardProps) {
  return (
    <div>
      <div>{props.animal.name}</div>
      <div>{props.animal.species}</div>
      <div>{props.animal.habitat}</div>
      <div>{props.animal.lifespan}</div>
      <div>{props.animal.diet}</div>
      <div>{props.animal.funFacts}</div>
      <div>{props.animal.emoji}</div>
    </div>
  );
}

export default AnimalCard;
