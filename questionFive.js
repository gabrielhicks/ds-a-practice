// Sort the input string in ascending order for canonical total for each set of characters.

//  if A=1, B=2, C=3 canonical total will be 6;
//  if D=4, E=5, F=6 canonical total will be 15;
//  if G=7, H=8, I=9 canonical total will be 24;

//  var input = "efg,ghi,abc";
//  var ouput = "abc,efg,ghi";

    // function canSort(str) {
    //     let alphas = "abcdefghijklmnopqrstuvwxyz".split("")
    //     let subStrArr = str.split(",")
    //     let subStrObj = {}
    //     let canonicalOrder = [];
    //     for (let char of subStrArr[0]) {
    //         let numValue = alphas.indexOf(char) + 1
    //         subStrObj[subStrArr[0]] = numValue || subStrObj[subStrArr[0]] + numValue
    //     }
    //     for (let char of subStrArr[1]) {
    //         let numValue = alphas.indexOf(char) + 1
    //         subStrObj[subStrArr[1]] = numValue || subStrObj[subStrArr[1]] + numValue
    //     }
    //     for (let char of subStrArr[2]) {
    //         let numValue = alphas.indexOf(char) + 1
    //         subStrObj[subStrArr[2]] = numValue || subStrObj[subStrArr[2]] + numValue
    //     }
    //     for (key in subStrObj) {
    //         let min = 100
    //         if (subStrObj[key] > min) {
    //             canonicalOrder.push(key)
    //         } else if (subStrObj[key] < min){
    //             canonicalOrder.unshift(key)
    //             min = key
    //         }
    //     }
    //     console.log(canonicalOrder)
    //     console.log(subStrObj)
    // }

    // I learned that strings can have numberical value in JS. I thought about this way too much, was trying to implement several different
    // data structures.. when .sort() was there all along. I am sure it can be optimized with a minHeap or something else but this works.

    function canSort(str) {
        let subStrArr = str.split(",")
        return subStrArr.sort().join(",")
    }

    canSort("efg,ghi,abc")