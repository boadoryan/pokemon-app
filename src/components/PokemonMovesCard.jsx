import React from "react";

const PokemonMovesTable = ({
  pokemonData,
  currentSelectedPokemon,
  formatText,
}) => {
  const allMoves = pokemonData[currentSelectedPokemon].moves.sort((a, b) => {
    const levelA = a.version_group_details[0]?.level_learned_at || 999;
    const levelB = b.version_group_details[0]?.level_learned_at || 999;
    return levelA - levelB;
  });

  return (
    <div className="w-full border rounded-3xl p-2">
      <div className="overflow-auto max-h-96">
        {" "}
        {/* Add max height for scrolling */}
        <table className="w-full">
          <thead className="rounded-2xl sticky top-0">
            <tr className="bg-white">
              <th className="px-6 py-4 text-lg">Move Name</th>
              <th className="px-6 py-4 text-lg">Level Learned At</th>
              <th className="px-6 py-4 text-lg">Learn Method</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allMoves.map((move, index) => (
              <tr className="border-b" key={index}>
                <td className="px-6 py-4">
                  <span>{formatText(move.move.name)}</span>
                </td>
                <td className="px-6 py-4">
                  {move.version_group_details[0]?.level_learned_at || "N/A"}
                </td>
                <td className="px-6 py-4">
                  {move.version_group_details[0].move_learn_method.name ===
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
    </div>
  );
};

export default PokemonMovesTable;
