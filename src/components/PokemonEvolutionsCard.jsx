import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific FontAwesome icon
import { fetchEvolutionChain } from "../api/api";
import axios from "axios";

const EvolutionChain = ({ pokemonId, pokemonName }) => {
  const [evolutionChain, setEvolutionChain] = useState({});

  useEffect(() => {
    fetchEvolutionChain(pokemonId, setEvolutionChain);
  }, [pokemonId]);

  // console.log(evolutionChain);
  return (
    <div>
      <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
        Evolution Chain
      </div>
      <div className="evolution-chain-container border flex p-4">
        {Object.entries(evolutionChain).map(([pokemon, imageUrl], index) => (
          <div className="border">
            <p className="font-bold">{pokemon.toUpperCase()}</p>
            <img src={imageUrl} alt={`Image of ${pokemon}`} />
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvolutionChain;
