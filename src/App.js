import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchQuotes, getPokemon } from "./api/api";
import FullPokemonList from "./components/FullPokemonList";
import Navbar from "./components/Navbar";
import PokemonPage from "./components/PokemonPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Link, and Route
import { formatText } from "./functions/utils";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemonName, setSelectedPokemonName] = useState(null); // Use selectedPokemonId instead of currentSelectedPokemon
  const [apiLimit, setAPILimit] = useState(151);

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

  const getPokemonName = (name) => {
    setSelectedPokemonName(name);
  };

  const handleBackButton = () => {
    setSelectedPokemonName(null);
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <FullPokemonList
                pokemonData={pokemonData}
                getPokemonName={getPokemonName}
              />
            }
          ></Route>
          <Route
            path="/pokemon/:id"
            element={
              <PokemonPage
                selectedPokemonName={selectedPokemonName}
                pokemonData={pokemonData}
                handleBackButton={handleBackButton}
                formatText={formatText}
              />
            }
          ></Route>
        </Routes>
      )}
    </>
  );
};
export default App;
