
function LinkedList(x) {
    this.next = null;
    this.value = x;
}

//add
LinkedList.prototype.add = function (arg) {
    if (this.next == null)
        this.next = new LinkedList(arg);
    else
        this.next.add(arg);
}

//remove
LinkedList.prototype.remove = function (arg, prev) {
    if (this.value === arg) {
        prev.next = this.next;
    } else {
        if (this.next)
            this.next.remove(arg, this);
    }
}
//print
LinkedList.prototype.print = function () {
    console.log(this.value);
    if (this.next)
        this.next.print();
}
linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};