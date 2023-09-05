import React from "react";
import { useParams } from "react-router-dom";

const PokemonMovesTable = ({
  pokemonData,
  formatText,
  selectedPokemonName,
  currentPokemonId,
}) => {
  const allMoves = pokemonData[currentPokemonId]?.moves.sort((a, b) => {
    const levelA = a.version_group_details[0]?.level_learned_at || 999;
    const levelB = b.version_group_details[0]?.level_learned_at || 999;
    return levelA - levelB;
  });

  return (
    <div className="overflow-auto max-h-[25.5rem] border rounded-3xl ">
      <table className="w-full">
        <thead className="rounded-2xl sticky top-0">
          <tr className="bg-[#eeeeee]">
            <th className="px-6 py-4 text-lg">Move Name</th>
            <th className="px-6 py-4 text-lg">Level Learned At</th>
            <th className="px-6 py-4 text-lg">Learn Method</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {allMoves?.map((move, index) => (
            <tr className="border-b" key={index}>
              <td className="px-6 py-4">
                <span>{formatText(move.move.name)}</span>
              </td>
              <td className="px-6 py-4">
                {move.version_group_details[0]?.level_learned_at || "N/A"}
              </td>
              <td className="px-6 py-4">
                {move.version_group_details[0]?.move_learn_method.name ===
                "machine"
                  ? "TM"
                  : formatText(
                      move.version_group_details[0]?.move_learn_method.name ||
                        "N/A"
                    )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonMovesTable;
