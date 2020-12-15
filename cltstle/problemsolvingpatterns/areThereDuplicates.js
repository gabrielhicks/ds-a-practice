// write a function that takes a variable number of arguements
// check if there are duplicates
// time and space O(n)
// bonus: O(n log n), O(1)

// Frequency Counter Method --- O(n)
function areThereDuplicates(...args) {
  let freqCount = {}
  for(let item of args) {
    freqCount[item] = ++freqCount[item] || 1;
  }
  for(let key in freqCount) {
    if(freqCount[key] > 1) {
      return true
    }
  }
  return false
}
// Frequency Counter Method --- O(n)
//////////////////////////////////////////////////////////////
// Multiple Pointers
function areThereDuplicates(...args) {
  let first = 0;
  let second = 1;

  args.sort()

  while(second < args.length) {
    if(args[first] === args[second]) {
      return true
    }
    first++
    second++
  }
  return false
}
// Multiple Pointers
//////////////////////////////////////////////////////////////
// Future: O( n log n) solution
// Future: O( n log n) solution


areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates("a", "b", "c", "a") // true