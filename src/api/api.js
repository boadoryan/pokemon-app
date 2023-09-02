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

export { fetchQuotes, getPokemon };
