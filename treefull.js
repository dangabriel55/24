 // Definitie Nod
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// DFS
const depthFirstPrint = (root) => {
    const stack = [root];
    console.log(stack);
    while (stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.val);

        if (curr.right !== null) {
            stack.push(curr.right);
        }
        if (curr.left !== null) {
            stack.push(curr.left);
        }
    }
}
depthFirstPrint(a);

 // Metoda Alta
var levelOrder = function(root) {
    if(!root) return [];

    const queue = [root];
    const result = [];

    while(queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));

        while(len--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
};

console.log(levelOrder(a));

// DFS base case
const depthFirstPrint2 = (root) => {
    if (root === null) return;

    console.log(root.val);
    depthFirstPrint2(root.left);
    depthFirstPrint2(root.right)
};


depthFirstPrint2(a);
