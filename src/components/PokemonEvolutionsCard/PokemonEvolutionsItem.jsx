import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const PokemonEvolutionsItem = ({ pokemon, imageUrl, isLastItem }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-center ${
          isSmallScreen ? "flex-col md:flex-row" : "flex-row"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="circle">
            <img
              className="evolution-chain-img p-8"
              src={imageUrl}
              alt={`Image of ${pokemon}`}
            />
          </div>

          <div className="text-center">
            <p className="font-bold text-xl my-4">{pokemon.toUpperCase()}</p>
          </div>
        </div>
        <div className={`text-${isSmallScreen ? "3xl" : "4rem"} mx-8`}>
          {isSmallScreen
            ? !isLastItem && <FontAwesomeIcon icon={faArrowDown} />
            : !isLastItem && <FontAwesomeIcon icon={faArrowRight} />}
        </div>
      </div>
    </>
  );
};

export { PokemonEvolutionsItem };
