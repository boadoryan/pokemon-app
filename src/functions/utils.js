const formatText = (text) => {
  const newText = text.split("-");
  return newText
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// const getPokemonName = (name, stateToSet) => {
//   stateToSet(name);
// };

export { formatText };
