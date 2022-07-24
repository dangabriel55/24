const merge = (arr1,arr2) => {
    let result = [];
    let i=0;
    let j=0;
    while(i<arr1.length && j< arr2.length) {
        if(arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        }   else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i< arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j< arr2.length) {
        result.push(arr2[j]);
        j++
    }
    return result;
}
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length/ 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid)); console.log(right);
    return merge(left, right);
}

console.log(sortArray([234, 43, 55, 63,  4, 6, 235, 547]));