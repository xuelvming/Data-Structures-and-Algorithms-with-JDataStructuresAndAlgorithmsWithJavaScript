/**
 * Double link list
 */
var utils_m = require("../utils.js");
print = utils_m.print;

function Node(element) {
    this.element = element;
    this.previous = null;
    this.next = null;
}


function DoubleList() {
    this.head = new Node("head");
}

DoubleList.prototype.find = function(element) {
    var currNode = this.head;
    while(currNode !== null && currNode.element !== element){
        currNode = currNode.next;
    }
    return currNode;
};

DoubleList.prototype.insert = function(newData,element) {
    var newNode = new Node(newData);
    var targetNode = this.find(element);
    if(targetNode === null){
        return false;
    }
    if(targetNode === head){
        newNode.next = targetNode.next;
        newNode.previous = targetNode;
        targetNode.next = newNode;
    }
    else{
        newNode.next = targetNode.next.next;
        newNode.previous = targetNode;
        targetNode.nex
    }
};

DoubleList.prototype.display = function() {
    var currNode = this.head;
    while(currNode.next !== null){
        print(currNode);
    }
};

DoubleList.prototype.remove = function(element) {
    var targetNode = this.find(element);
    //no such element or element is the dummy head, not allowed to delete
    if(targetNode === null || element == this.head.element){
    return false;
    }

    targetNode.previous.next = targetNode.next;
    targetNode.next.previous = targetNode.previous;
    targetNode.previous = null
    targetNode.next = null
    delete targetNode;//help gc
};

DoubleList.prototype.findTail = function(){
    var currNode = this.head;
    while(currNode.next !=== null){
        currNode = currNode.next
    }
    return currNode;
};

DoubleList.prototype.dispReverse = function() {
    var tailNode = this.findTail();
    while(tailNode.next !== null){
        print(tailNode.element);
        tailNode = tailNode.next;
    }
};