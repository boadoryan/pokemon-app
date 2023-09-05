import React from "react";
import typeColors from "../ColorTypes";

const SelectedPokemonCard = ({
  currentPokemonId,
  selectedPokemonName,
  pokemonData,
  formatText,
}) => {
  console.log(pokemonData[currentPokemonId - 1]);
  return (
    <>
      <div className="rounded-3xl border p-8 flex flex-col">
        <div className="flex justify-between">
          <p className="font-bold text-5xl">
            {pokemonData[currentPokemonId - 1]?.name.toUpperCase()}
          </p>
          <p className="text-2xl">{`#${pokemonData[currentPokemonId - 1]?.id
            .toString()
            .padStart(4, "0")}`}</p>
        </div>
        <div className="flex gap-2 mt-4">
          {pokemonData[currentPokemonId - 1]?.types.map((item, index) => (
            <p
              className="border text-sm rounded p-1"
              key={index}
              style={{
                backgroundColor: typeColors[item.type.name.toLowerCase()],
              }}
            >
              {item.type.name.toUpperCase()}
            </p>
          ))}
        </div>
        <div className="flex justify-center">
          <p>
            {
              <img
                className="max-h-[280px] mt-20"
                src={
                  pokemonData[currentPokemonId - 1]?.sprites.other.dream_world
                    .front_default
                }
                alt=""
              />
            }
          </p>
        </div>
      </div>
    </>
  );
};

export { SelectedPokemonCard };
