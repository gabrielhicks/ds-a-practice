// return the minimum amount of contiguous integers that add to or greater than the target
function minSubArrayLen(array, target) {
    let start = 0;
    let finish = 0;
    let tempTotal = 0;
    let minLen = Infinity;
    while(start < array.length) {
        if(tempTotal < target && finish < array.length) {
            tempTotal += array[finish]
            finish++
        }
        else if(tempTotal >= target) {
            minLen = Math.min(minLen, finish - start)
            tempTotal -= array[start]
            start++
        }
        else break
    }

    return minLen === Infinity ? 0 : minLen
}