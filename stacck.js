console.log('saas');
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }}

class Stack {
    constructor() {
        this.top = null;
    }
    push(val) {
        if (this.size === 0){
            this.top = new Stack(val);
        } else {
            const pushedNode = new Stack(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        this.size++;    }
}


    
const myStack = new Stack();
myStack.push(a);
myStack.push(b);
myStack.push(c);
console.log(myStack);