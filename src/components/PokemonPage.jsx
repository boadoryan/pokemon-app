import React from "react";
import PokemonInfoCard from "./PokemonInfoCard";
import PokemonMovesCard from "./PokemonMovesCard";
import PokemonEvolutionsCard from "./PokemonEvolutionsCard";
import PokemonCard from "./PokemonCard";

const PokemonPage = ({
  currentSelectedPokemon,
  pokemonData,
  handleBackButton,
  formatText,
  fetchEvolutionChain,
}) => {
  const [pokemonName, pokemonId] = currentSelectedPokemon.split("-");

  console.log(JSON.stringify(pokemonData));

  return (
    <div className="mx-4 md:mx-20">
      <button className="mt-4 md:mt-8" onClick={handleBackButton}>
        Back
      </button>
      <div className="text-2xl md:text-5xl">
        {pokemonData[pokemonId - 1]?.name?.toUpperCase()}
      </div>
      <PokemonEvolutionsCard pokemonId={pokemonId} pokemonName={pokemonName} />
      {/* <PokemonCard /> */}
      <div className="flex flex-col mt-4 md:flex-row md:gap-4">
        <div className="w-full md:w-2/5 my-4">
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Stats
          </div>
          <PokemonInfoCard
            pokemonData={pokemonData}
            currentSelectedPokemon={pokemonId - 1}
            pokemonName={pokemonName}
          />
        </div>
        <div className="w-full md:w-3/5 my-4">
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Moves
          </div>
          <PokemonMovesCard
            pokemonData={pokemonData}
            currentSelectedPokemon={pokemonId - 1}
            formatText={formatText}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
