function bubbleSort(array) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let skipSwap;
  for (let i = array.length; i > 0; i--) {
    skipSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
        skipSwap = false;
        swap(array, j, j + 1);
      }
    }
    if (skipSwap) break;
  }
  return array;
}
