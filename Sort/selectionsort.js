var sortArray = function(nums) {
    for(let i=0; i<nums.length; i++) {
        let minIdx = i; console.log(minIdx);

        for(let j=i+1; j< nums.length; j++) {
            if(nums[j] < nums[minIdx]) {
                minIdx = j;
            }
        }
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
    return nums;
};

console.log(sortArray([243, 45, 23, 356, 3, 5346, 35, 5]));