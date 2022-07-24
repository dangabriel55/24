
class Node{
    constructor(data) {
       this.data = data;
       this.left = null;
       this.right = null;
    };
 };






console.log('aa')

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

console.log(levelOrder([3,9,20,null,null,15,7]));
