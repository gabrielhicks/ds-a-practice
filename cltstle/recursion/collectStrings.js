function collectStrings(obj) {
  let newArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      newArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      return newArr.concat(collectStrings(obj[key]));
    }
  }
  return newArr;
}
