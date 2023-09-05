import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific FontAwesome icon
import axios from "axios";

const EvolutionChain = ({ pokemonId }) => {
  const [evolutionChain, setEvolutionChain] = useState({});

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
        );
        const evolutionChainUrl = speciesResponse.data.evolution_chain.url;

        console.log("evolutionChainUrl is: ", evolutionChainUrl);
        const evolutionChainResponse = await axios.get(evolutionChainUrl);
        console.log("evolutionChainResponse is: ", evolutionChainResponse);

        let chain = evolutionChainResponse.data.chain;
        console.log("chain is :", chain);
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

        setEvolutionChain(evolutionData);
      } catch (error) {
        console.error("Error fetching evolution chain:", error);
      }
    };

    fetchEvolutionChain();
  }, [pokemonId]);

  console.log(evolutionChain);
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
