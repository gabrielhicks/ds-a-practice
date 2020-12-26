function flatten(array) {
  let solution = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      solution = solution.concat(flatten(array[i]));
    } else {
      solution.push(array[i]);
    }
  }
  return solution;
}
