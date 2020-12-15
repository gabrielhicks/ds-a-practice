function averagePair(array, target){
    let first = 0
    let last = array.length - 1

    while(first < last) {
        if((array[first] + array[last]) / 2 < target) {
            first++
        } else {
            last--
        }
        if((array[first] + array[last]) / 2 === target) {
            return true
        }
    }
    return false
}