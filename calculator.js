var calculate = function(s) {
    let len = s.length;
    if (len === 0) return 0;
    let stack = [];
    let res = 0;
    let sign = 1;
    
    // remove space
    s.replace(" ", "");
    for (let i = 0; i < len; i++) {
        let n = s.charAt(i);
        if (!isNaN(parseInt(n))) {
            let cur = parseInt(n);
            while (i + 1 < len && !isNaN(parseInt(s.charAt(i + 1)))) {
                cur = cur * 10 + parseInt(s.charAt(i + 1));
                i++;
            }
            res += cur * sign;
        } else if (n === '-') {
            sign = -1;
        } else if (n === '+') {
            sign = 1;
        } else if (n === '(') {
            stack.push(res);
            res = 0;
            stack.push(sign);
            sign = 1;
        } else if (n === ')') {
            res = res * stack.pop() + stack.pop();
        }
    }
    
    return res;
};
s = " 2-1 + 2 "
console.log(calculate(s));