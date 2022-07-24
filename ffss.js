console.log('ggg')


const dfs = (root) => {
    const stack = [root];
    while(stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.val);
        if(curr.right) {
            stack.push(curr.right)
        }
        if(curr.left) {
            stack.push(curr.left);
        }
    }
}