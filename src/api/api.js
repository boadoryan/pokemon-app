import axios from "axios";

const fetchQuotes = async (limit, apiURL) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPokemon = async (res, stateToSet) => {
  try {
    const pokemonPromises = res.map(async (item) => {
      const result = await axios.get(item.url);
      return result.data;
    });

    const pokemonData = await Promise.all(pokemonPromises);
    stateToSet(pokemonData);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};

const fetchEvolutionChain = async (pokemonId, pokemonName, stateToSet) => {
  try {
    const speciesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
    );
    const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
    const evolutionChainResponse = await axios.get(evolutionChainUrl);
    let chain = evolutionChainResponse.data.chain;
    const evolutionData = {};

    while (chain) {
      const pokemonName = chain.species.name;
      const pokemonResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
      );
      const imageUrl = pokemonResponse.data.sprites.front_default;
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

export { fetchQuotes, getPokemon, fetchEvolutionChain };
