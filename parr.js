
 var isValid = function(s) {
    const stack = [] ;
    const parens = '()[]{}' ;
    let i= 0;
     while(i<s.length) {
        stack.push(s[i]);
        i++;
        console.log(stack);
        let open = stack[stack.length-2];
        let close = stack[stack.length-1];
        let potParens = open + close;
        if(parens.includes(potParens)) {
            stack.pop();
            stack.pop(); 
        }
     }
     return stack.length === 0;
 }

 console.log(isValid("{}[()]"));
