import React from "react";
import PikachuImage from "../images/25.png"; // Adjust the import path

const PokemonCard = ({ img }) => {
  return (
    <div className="p-4 pokemon-card rounded shadow-md border-2">
      <div className="flex  gap-2"></div>
      <p className="text-2xl font-bold text-center">
        {/* {item.name.charAt(0).toUpperCase() + item.name.slice(1)} */}
        PIKACHU
      </p>
      <p className="text-md text-center">#0001</p>
      <div className="flex border justify-center mb-12">
        <img src={PikachuImage} alt="Pikachu" />
      </div>
    </div>
  );
};

export default PokemonCard;
