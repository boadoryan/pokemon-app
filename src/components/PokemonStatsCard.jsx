import React from "react";

const PokemonStatsCard = ({ pokemonData, currentPokemonId }) => {
  const statAbbreviations = {
    hp: "HP",
    attack: "Atk.",
    defense: "Def.",
    "special-attack": "Sp. Atk.",
    "special-defense": "Sp. Def.",
    speed: "Spd.",
  };

  return (
    <div className="flex w-full border justify-center p-6 md:p-[4.3rem] h-full rounded-3xl">
      <div className="grid grid-cols-3 gap-12">
        {pokemonData[currentPokemonId]?.stats.map((stat, index) => (
          <div key={index} className="">
            <div className="flex flex-col justify-center items-center">
              <p className=" md:text-xl font-bold w-100">
                {statAbbreviations[stat.stat.name] || stat.stat.name}
              </p>
              <p className="text-4xl md:text-7xl mt-2 text-center font-bold">
                {stat.base_stat}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStatsCard;
