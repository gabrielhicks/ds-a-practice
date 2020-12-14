// Given two strings, write a function to determine if the second string is an anagram of the first string.
// An anagram is a string that is formed by rearranging the characters of another string

// assume lowercase and no special characters or spaces

// Time Complexity goal is O(n)

function validAnagram(str1, str2){
  // I need to keep track of the characters and their frequency for each string
    let freqCount1 = {};
    let freqCount2 = {};
    // loop over each string to index key value pairs
    for (let char of str1) {
        freqCount1[char] = ++freqCount1[char] || 1;
    }
    for (let char of str2) {
        freqCount2[char] = ++freqCount2[char] || 1;
    }
  // I need to compare the resulting objects to check that the frequencies are the same
    for (let key in freqCount1) {
        if(freqCount1[key] !== freqCount2[key] && freqCount2[key] !== freqCount1[key]) {
            // if they are not the same I will return false
            return false;
        }
    }
    // if they are the same they are valid anagrams and will return true
    return true;
}

validAnagram("", "") // true
validAnagram("aaz", "zza") // false
validAnagram("qwerty", "yqtwer") // true
validAnagram("asdfgshjkl", "asdfghjlkj") // false