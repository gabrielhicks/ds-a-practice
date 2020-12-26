function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].slice(1)];
  }
  let solution = capitalizeFirst(array.slice(0, -1));
  let string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].slice(1);
  solution.push(string);
  return solution;
}
