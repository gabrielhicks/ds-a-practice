function isSubsequence(sub, string) {
    let first = 0
    let second = 0

    while(second < string.length - 1) {
        if(sub[first] === string[second]) {
            first++
        }
        if(first === sub.length - 1) {
            return true
        }
        second++
    }
    return false
}

isSubsequence("hello", "hello world") // true
isSubsequence("sing", "sting") // true
isSubsequence("abc", "abracadabra") // true
isSubsequence("abc", "acb") // false