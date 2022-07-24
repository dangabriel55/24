console.log('fa')

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        }
}

class Link {
    constructor() {
        this.head = null;
    }
    append(val) {
        if (this.head === null){
            this.head = new Node(val);
            return;
        }
        let curr = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new Node(val);
    }
}

const list = new Link();
list.append('a');
list.append('c');
list.append('e');
list.append('g');
list.append('j');

console.log(list.head);




