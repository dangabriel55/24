/*console.log('subset');

var subsets = function(nums) {
    const result = [];

    const dfs = (i,nums,slate) => {
        if(i === nums.length) {
            result.push(slate.slice());
            return;
        }
        dfs(i+1, nums, slate);

        slate.push(nums[i]);
        dfs(i+1,nums,slate);
        slate.pop();
    }
    dfs(0,nums,[]);
    return result;
}


console.log(subsets([1,2,3]));  */



 const per = (nums) => {
    const result = []

        const dfs = (i, nums) => {
            if (i=== nums.lenght) {
                nums.push(nums.slice());
                return;
            }
            let hash = {};
            for(let j=i; j<= nums.lenght; j++) {

            }
        }
 }