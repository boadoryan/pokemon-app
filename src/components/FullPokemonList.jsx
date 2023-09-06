import React from "react";
import { Link } from "react-router-dom";
import { FullPokemonListItem } from "./FullPokemonListItem";

const FullPokemonList = ({ pokemonData, getPokemonName }) => {
  return (
    <>
      {pokemonData && pokemonData.length > 0 && (
        <div className="flex flex-wrap justify-center align-center gap-2 p-20">
          {pokemonData.map((item, index) => (
            <Link to={`/pokemon/${item.id}`} key={item.id}>
              <FullPokemonListItem
                key={item.id}
                item={item}
                index={index}
                getPokemonName={getPokemonName}
              ></FullPokemonListItem>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default FullPokemonList;
