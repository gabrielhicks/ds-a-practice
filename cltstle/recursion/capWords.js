function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let newWords = capitalizeWords(array.slice(0, -1));
  newWords.push(array.slice(array.length - 1)[0].toUpperCase());
  return newWords;
}
