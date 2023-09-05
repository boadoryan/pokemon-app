import React from "react";
import PokemonStatsCard from "./PokemonStatsCard";
import PokemonMovesCard from "./PokemonMovesCard";
import PokemonEvolutionsCard from "./PokemonEvolutionsCard/PokemonEvolutionsList";
import PokemonCard from "./PokemonCard";
import { useParams } from "react-router-dom";
import { SelectedPokemonCard } from "./SelectedPokemonCard";
import { PokemonInfoCard } from "./PokemonInfoCard";

const PokemonPage = ({
  selectedPokemonName,
  pokemonData,
  handleBackButton,
  formatText,
  fetchEvolutionChain,
}) => {
  const { id: currentPokemonId } = useParams();
  return (
    <div className="mx-4 md:mx-12 md:px-20 py-8">
      <button className="mt-4 md:mt-8" onClick={handleBackButton}>
        Back
      </button>
      <div className="flex flex-col mt-4 md:flex-col md:gap-4 lg:flex-col xl:flex-row">
        <div className="w-full my-4">
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Pokemon
          </div>
          <div className="h-full">
            <SelectedPokemonCard
              currentPokemonId={currentPokemonId}
              selectedPokemonName={selectedPokemonName}
              pokemonData={pokemonData}
              formatText={formatText}
            />
          </div>
        </div>

        <div className="w-full my-4">
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Info</div>
          <div className="h-full">
            <PokemonInfoCard
              pokemonData={pokemonData}
              currentPokemonId={currentPokemonId}
              selectedPokemonName={selectedPokemonName}
              formatText={formatText}
            />
          </div>
        </div>

        <div className="w-full my-4">
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Stats
          </div>
          <div className="h-full">
            <PokemonStatsCard
              pokemonData={pokemonData}
              currentPokemonId={currentPokemonId}
              selectedPokemonName={selectedPokemonName}
            />
          </div>
        </div>
        {/* end of first row  */}
      </div>
      <div className=" flex flex-col mt-12 md:flex-row md:gap-4">
        <div className="w-full md:w-2/5 my-4">
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Moves
          </div>
          <PokemonMovesCard
            pokemonData={pokemonData}
            currentPokemonId={currentPokemonId - 1}
            selectedPokemonName={selectedPokemonName}
            formatText={formatText}
          />
        </div>
        <div className="w-full md:w-3/5 lg:w3/5 my-4">
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Evolution Chain
          </div>
          <PokemonEvolutionsCard
            currentPokemonId={currentPokemonId}
            selectedPokemonName={selectedPokemonName}
            pokemonData={pokemonData}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
