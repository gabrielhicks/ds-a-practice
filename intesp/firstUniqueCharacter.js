// can be found on leetcode #387 - hash table

// find first unique character (def):
// Given a string, find the first non-repeating character in it and return it's index.
// If it doesnt exist, return -1

function firstUniqueCharacter(string) {
  // we need to loop through the string and look at each character
  // use a hash table to cache the characters to lookup in constant time
  let hashTable = {};

  // handle edge case of empty string
  if (string === '') return -1;

  //populate the hash table
  for (char of string) {
    if (hashTable[char]) hashTable[char]++;
    else hashTable[char] = 1;
  }

  // check each index for 1 to return
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (hashTable[char] == 1) return i;
  }

  // return -1 for non-unique chars
  return -1;
}

// this solution is O(n) time with two separate for loops
// this solution is O(1) space because of the second for loop maxing out at 64 characters

function firstUniqueCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) === string.lastIndexOf(char)) return i;
  }
  return -1;
}

// this solution is O(n^2) still because we used indexOf operations inside a loop
// constant space O(1)

// firstUniqueCharacter('aaaaaa'); // -1
// firstUniqueCharacter(''); // -1
// firstUniqueCharacter('aabchd'); // 2
