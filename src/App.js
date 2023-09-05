import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchQuotes, getPokemon } from "./api/api";
import FullPokemonList from "./components/FullPokemonList";
import Navbar from "./components/Navbar";
import PokemonPage from "./components/PokemonPage";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSelectedPokemon, setCurrentSelectedPokemon] = useState(null);
  const [apiLimit, setAPILimit] = useState(151);

  const test = "pikachu";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchQuotes(apiLimit);
        getPokemon(pokemonData.results, setPokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiLimit]);

  // console.log(pokemonData);

  const getMorePokemon = () => {
    setAPILimit((val) => val + 20);
    console.log(apiLimit);
  };

  const getId = (id, name) => {
    const newID = `${name}-${id}`;
    setCurrentSelectedPokemon(newID);
    // console.log(id);
    // console.log(name);
  };

  const handleBackButton = () => {
    if (currentSelectedPokemon !== null) {
      setCurrentSelectedPokemon(null);
    }
  };

  const formatText = (text) => {
    const newText = text.split("-");
    return newText
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Navbar />
          {currentSelectedPokemon === null ? (
            <>
              <FullPokemonList pokemonData={pokemonData} getId={getId} />
              {/* <button onClick={getMorePokemon}>More</button> */}
            </>
          ) : (
            <PokemonPage
              currentSelectedPokemon={currentSelectedPokemon}
              pokemonData={pokemonData}
              handleBackButton={handleBackButton}
              formatText={formatText}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default App;
