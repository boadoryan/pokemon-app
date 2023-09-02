import React from "react";
import PokemonInfoCard from "./PokemonInfoCard";
import PokemonMovesCard from "./PokemonMovesCard";
import PokemonEvolutionsCard from "./PokemonEvolutionsCard";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonPage = ({
  currentSelectedPokemon,
  pokemonData,
  handleBackButton,
  formatText,
}) => {
  const [evolutionData, setEvolutionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiLimit, setAPILimit] = useState(151);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${
            currentSelectedPokemon + 1
          }/`
        );
        setEvolutionData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="mx-20">
        <button className="mt-8" onClick={handleBackButton}>
          {" "}
          Back
        </button>
        <div className="text-5xl">
          {pokemonData[currentSelectedPokemon].name.toUpperCase()}
        </div>
        {/* {pokemonData[currentSelectedPokemon].name}
         */}
        {/* <div className="flex gap-4 justify-center"> */}
        <PokemonEvolutionsCard
          pokemonData={pokemonData}
          currentSelectedPokemon={currentSelectedPokemon}
        />
        <PokemonCard />
        <div className="flex w-full h-full gap-4 my-32">
          <div className="w-2/5 flex-grow">
            <div className="text-2xl font-bold mb-4">Stats</div>
            <PokemonInfoCard
              pokemonData={pokemonData}
              currentSelectedPokemon={currentSelectedPokemon}
            />
          </div>
          <div className="w-3/5 flex-grow">
            <div className="text-2xl font-bold mb-4">Moves</div>
            <PokemonMovesCard
              pokemonData={pokemonData}
              currentSelectedPokemon={currentSelectedPokemon}
              formatText={formatText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
