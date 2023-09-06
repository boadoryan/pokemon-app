import React from "react";

const PokemonInfoCard = ({
  pokemonData,
  currentPokemonId,
  selectedPokemonName,
  formatText,
}) => {
  return (
    <div className="flex border p-8 rounded-3xl h-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row border bg-[#e8e8e8] justify-center rounded py-4 md:gap-20 text-lg justify-self-end mb-10">
          <div className="flex flex-col gap-2 font-bold">
            <p className="font-bold text-xl">Wgt:</p>
            <p className="text-3xl">
              {pokemonData[currentPokemonId - 1]?.weight} kg
            </p>
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <p className="font-bold text-xl">Hgt:</p>
            <p className="text-3xl">
              {pokemonData[currentPokemonId - 1]?.height} m
            </p>
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <p className="font-bold text-xl">Base Xp:</p>
            <p className="text-3xl">
              {pokemonData[currentPokemonId - 1]?.base_experience} xp
            </p>
          </div>
        </div>
        <div className="mb-8">
          <p className="font-bold text-2xl mb-2">Held Items:</p>
          <ul className="flex gap-4">
            {selectedPokemonName ? (
              pokemonData[currentPokemonId - 1]?.held_items.length > 0 ? (
                pokemonData[currentPokemonId - 1]?.held_items.map(
                  (item, index) => (
                    <li key={index} className="border p-2 rounded">
                      {formatText(item.item.name)}
                    </li>
                  )
                )
              ) : (
                <li className="">
                  {`${selectedPokemonName} has no held items`}
                </li>
              )
            ) : (
              <li className="border p-2 rounded">Loading...</li> // Replace with loading indicator if needed
            )}
          </ul>
        </div>
        <div className="mb-8">
          <p className="font-bold text-2xl mb-2">Abilities:</p>
          <ul className="flex gap-4">
            {pokemonData[currentPokemonId - 1]?.abilities.map((item, index) => (
              <li key={index} className="border p-2 rounded">
                {formatText(item.ability.name)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { PokemonInfoCard };
