console.log('aa')
function ListNode(val, next) {
    this.val = (val=== undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
    let cur = head;
    let prev = null;
    let next;

    while(cur !== null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
console.log(reverseList([1,2,3,4,5]));



