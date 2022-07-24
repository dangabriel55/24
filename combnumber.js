var letterCombinations = function(digits) {
    const result = [];

    const alpha = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    const dfs = (i, digits, slate) => {
        if(i=== digits.length) { console.log(digits.length);
            result.push(slate.join(''));
            return;
        }
        let chars = alpha[digits[i]]; 

        for(let char of chars) {
            slate.push(char); 
            dfs(i+1, digits, slate); 
            slate.pop();
        }
    }
    dfs(0, digits, []);
    return result;
};

console.log(letterCombinations('45'));