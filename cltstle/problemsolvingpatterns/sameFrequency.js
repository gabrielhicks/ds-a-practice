// Given two positive integers, find out if the two numbers have the same frequency of digits
// use frequency counter method
// O(n) time

function sameFrequency(num1, num2){
    //first I will need two define two counter objects
    let arr1 = `${num1}`.split("") // O(1)
    let rr2 = `${num2}`.split("") // O(1)
    let freqCount1 = {} // O(1)
    let freqCount2 = {} // O(1)
    // get rid of uneven sized arrays
    if(arr1.length > arr2.length || arr1.length < arr2.length) {
        return false
    }
    //next I will need to iterate over each and populate the objects
    for(let num of arr1) {  // O(n)
        freqCount1[num] = ++freqCount1[num] || 1;
    }
    for(let num of arr2) {  // O(n)
        freqCount2[num] = ++freqCount2[num] || 1;
    }
    //finally I will compare the keys and lengths to check frequency
    for (let key in freqCount1) {  // O(n)
        if (freqCount1[key] !== freqCount2[key]) {
            return false
        }
    }
    return true
}

sameFrequency(182,281) // t
sameFrequency(34,14) // f
sameFrequency(3589578,5879385) // t
sameFrequency(22,222) // f