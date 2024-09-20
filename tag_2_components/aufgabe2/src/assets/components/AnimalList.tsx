import type { Animal } from "../../types";
import AnimalCard from "./AnimalFunction";

const animals: Animal[] = [
  
    {
        name: "Pangolin",
        species: "Pholidota",
        habitat: "Tropical Regions",
        lifespan: 20,
        diet: "Insectivore",
        funFacts: [
            "Pangolins are covered in tough, overlapping scales made of keratin.",
            "They are the only mammals with this type of protective armor.",
            'Pangolins are often referred to as "scaly anteaters."',
        ],
        emoji: "🦛",
    },
    {
        name: "Gazelle",
        species: "Antilopinae",
        habitat: "Grasslands",
        lifespan: 12,
        diet: "Herbivore",
        funFacts: [
            "Gazelles are known for their incredible speed and agility.",
            "They have a keen sense of hearing and eyes positioned to detect predators.",
            "Gazelles are social animals and often form large herds for protection.",
        ],
        emoji: "🦌",
    },
];

function AnimalList() {
    return (
        <div>
            {animals.map((animal) => (
              <AnimalCard animal={animal} />
              
            ))}
        </div>
    );
}


export default AnimalList;