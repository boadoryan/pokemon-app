import React, { useEffect, useState } from "react";
import axios from "axios";
import FullPokemonList from "./views/FullPokemonList/FullPokemonList";
import Navbar from "./Navbar";
import PokemonPage from "./views/SelectedPokemonPage/SelectedPokemonPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Link, and Route
import { formatText } from "./functions/utils";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [selectedPokemonName, setSelectedPokemonName] = useState(null); // Use selectedPokemonId instead of currentSelectedPokemon
  const {
    pokemon: pokemonData,
    error,
    loading,
  } = useFetch("https://pokeapi.co/api/v2/pokemon/?limit=151");

  const getPokemonName = (name) => {
    setSelectedPokemonName(name);
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
                setSelectedPokemonName={setSelectedPokemonName}
              />
            }
          ></Route>
          <Route
            path="/pokemon/:id"
            element={
              <PokemonPage
                selectedPokemonName={selectedPokemonName}
                pokemonData={pokemonData}
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
