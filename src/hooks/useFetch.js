import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);

        if (response.data && response.data.results) {
          getPokemon(response.data.results);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const getPokemon = async (res) => {
      try {
        const pokemonPromises = res.map(async (item) => {
          const result = await axios.get(item.url);
          return result.data;
        });

        const pokemonData = await Promise.all(pokemonPromises);
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error, pokemon };
};

export { useFetch };
