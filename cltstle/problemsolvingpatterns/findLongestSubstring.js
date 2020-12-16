function findLongestSubstring(string){
    let start = 0;
    let freqCount = {};
    let longest = -Infinity;
    for(let i = 0; i < string.length; i++) {
        let char = string[i]
        if(freqCount[char]) {
        start = Math.max(start, freqCount[char]);
        }
        longest = Math.max(longest, i - start + 1);
        freqCount[char] = i + 1;
    }
    return longest === -Infinity ? 0 : longest
}
