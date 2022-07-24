var sortArray = function(nums) {
    for(let i= 1; i<nums.length; i++) {
        let j = i;

        while(j> 0 && nums[j] < nums[j-1]) {
            [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            j--;
        }
    }
    return nums;
}
console.log(sortArray([234, 43, 55, 63,  5, 6, 235, 547]));