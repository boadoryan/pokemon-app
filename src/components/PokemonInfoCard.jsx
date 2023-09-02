import React from "react";

const PokemonInfoCard = ({ pokemonData, currentSelectedPokemon }) => {
  const statAbbreviations = {
    hp: "HP",
    attack: "Atk.",
    defense: "Def.",
    "special-attack": "Sp. Atk.",
    "special-defense": "Sp. Def.",
    speed: "Spd.",
  };

  return (
    <div className="flex border justify-center w-full rounded-3xl">
      <div className="grid grid-cols-3 p-9 gap-4">
        {pokemonData[currentSelectedPokemon].stats.map((stat, index) => (
          <div key={index} className="p-10">
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-bold w-100">
                {statAbbreviations[stat.stat.name] || stat.stat.name}
              </p>
              <p className="text-5xl mt-2 text-center font-bold">
                {stat.base_stat}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonInfoCard;
