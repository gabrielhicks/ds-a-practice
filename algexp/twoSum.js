function twoNumberSum(array, targetSum) {
  // Write your code here.
	// if any two nums from the array add to target return them
	for(let i = 0; i <= array.length; i++) {
		// first for loop is O(n)
		for(let j = i + 1; j <= array.length; j++) {
			//second for loop is O(n)
			if(array[i] + array[j] === targetSum) {
				return [array[i], array[j]]
			}
		}
	}
	return []
}
// two for loops time complexity is O(n^2)
// space complexity is linear O(1)