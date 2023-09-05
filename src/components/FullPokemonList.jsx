import React from "react";
import typeColors from "../ColorTypes";

const FullPokemonList = ({ pokemonData, getId }) => {
  return (
    <>
      {pokemonData && pokemonData.length > 0 && (
        <div className="flex flex-wrap justify-center align-center gap-2 p-20">
          {pokemonData.map((item, index) => (
            <div key={index}>
              <div
                className="p-4 pokemon-card rounded shadow-md"
                onClick={() => getId(item.id, item.name)}
              >
                <div className="card-details flex justify-between">
                  <p className="text-lg font-bold">{item.name.toUpperCase()}</p>
                  <p className="text-md">{`#${item.id
                    .toString()
                    .padStart(4, "0")}`}</p>
                </div>
                <div className="image-container flex justify-center max-w-full overflow-hidden">
                  <img
                    className="max-h-32 mt-10" // Adjust the max height as needed
                    src={item.sprites.other.dream_world.front_default}
                    alt=""
                  />
                </div>
                <div className="flex gap-2">
                  {item.types.map((type, typeIndex) => (
                    <p
                      className="border text-xs rounded p-1"
                      key={typeIndex}
                      style={{
                        backgroundColor:
                          typeColors[type.type.name.toLowerCase()],
                      }}
                    >
                      {type.type.name.toUpperCase()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FullPokemonList;
