// Given a sorted array, count the unique values

function countUniqueValues(array){
    let i = 0
    let j = i + 1
    while(j < array.length) {
        if (array[j] !== array[i]) {
            i++;
            array[i] = array[j];
        }
        j++;
    }
    if(i === 0) {
        return 0
    } else {
        return i + 1
    }
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,5,4,3,2,1,1,4,6,2,3,8]) // 5
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])