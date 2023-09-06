import axios from "axios";
import { useState, useEffect } from "react";

const fetchEvolutionChain = async (pokemonId, stateToSet) => {
  try {
    const speciesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
    );
    const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
    const evolutionChainResponse = await axios.get(evolutionChainUrl);
    let chain = evolutionChainResponse.data.chain;
    console.log(chain);
    const evolutionData = {};

    while (chain) {
      const pokemonName = chain.species.name;
      const pokemonResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
      );
      console.log(pokemonResponse.data);
      const imageUrl =
        pokemonResponse.data.sprites.other.dream_world.front_default;
      evolutionData[pokemonName] = imageUrl;

      if (chain.evolves_to.length > 0) {
        chain = chain.evolves_to[0];
      } else {
        break;
      }
    }

    stateToSet(evolutionData);
  } catch (error) {
    console.error("Error fetching evolution chain:", error);
  }
};

export { fetchEvolutionChain };
