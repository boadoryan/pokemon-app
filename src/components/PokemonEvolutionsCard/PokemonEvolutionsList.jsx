import React, { useEffect, useState } from "react";
import { fetchEvolutionChain } from "../../api/api";
import { PokemonEvolutionsItem } from "./PokemonEvolutionsItem";
import { LoadingComponent } from "../LoadingComponent";
import axios from "axios";

const EvolutionChain = ({ currentPokemonId, pokemonName, pokemonData }) => {
  const [evolutionChain, setEvolutionChain] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchEvolutionChain(currentPokemonId, setEvolutionChain, pokemonData)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching evolution chain:", error);
        setLoading(false);
      });
  }, [currentPokemonId]);

  return (
    <div>
      {loading ? (
        <LoadingComponent text={"Loading evolution chain.."} />
      ) : (
        <div className="rounded-3xl border flex-col md:flex-row flex justify-center content-center p-[5.25rem]">
          {Object.entries(evolutionChain).map(([pokemon, imageUrl], index) => (
            <PokemonEvolutionsItem
              key={index}
              pokemon={pokemon}
              imageUrl={imageUrl}
              pokemonData={pokemonData}
              isLastItem={index === Object.entries(evolutionChain).length - 1}
            ></PokemonEvolutionsItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default EvolutionChain;
