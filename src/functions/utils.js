const formatText = (text) => {
  const newText = text.split("-");
  return newText
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export { formatText };
