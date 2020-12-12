function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrIndex = 0
	let seqIndex = 0
	// loop is O(n) time O(1) space
	while(arrIndex < array.length && seqIndex < sequence.length) {
		if(array[arrIndex] === sequence[seqIndex]) {
			seqIndex++
		}
		arrIndex++
	}
	return seqIndex === sequence.length
}