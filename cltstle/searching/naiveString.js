function naiveString(str, sub) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] !== str[i + j]) break;
      if (j === sub.length - 1) count += 1;
    }
  }
  return count;
}

naiveString('hello world', 'll');
