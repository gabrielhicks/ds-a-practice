function maxSubarraySum(array, num){
    if(array.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < num; i++) {
        maxSum += array[i]
    }
    tempSum = maxSum
    for(let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

maxSubarraySum([1,2,3,4], 2) // 7
maxSubarraySum([1,2], 3) // null
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5