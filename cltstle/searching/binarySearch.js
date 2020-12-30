function binarySearch(arr, val) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middle = Math.floor((leftPointer + rightPointer) / 2);
  while (arr[middle] !== val && leftPointer <= rightPointer) {
    if (val < arr[middle]) {
      rightPointer = middle - 1;
    } else {
      leftPointer = middle + 1;
    }
    middle = Math.floor((leftPointer + rightPointer) / 2);
  }
  if (arr[middle] === val) return middle;
  return -1;
}
