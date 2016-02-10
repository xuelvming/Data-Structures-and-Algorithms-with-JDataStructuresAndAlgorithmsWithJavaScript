var utils_m = require("../utils.js");
print = utils_m.print;


module.exports = Queue;

function Queue () {
    this.dataStore = [];
    this.size = 0;
}

Queue.prototype.enqueue = function(element) {
    this.dataStore.push(element);
    this.size++;
};

Queue.prototype.dequeue = function(){
    if(this.empty()){
        return null;
    }
    this.size--;
    return this.dataStore.shift();
};

Queue.prototype.front = function() {
    return this.dataStore[0];
};

Queue.prototype.back = function(){
    return this.dataStore[this.size - 1]
};

Queue.prototype.toString = function() {
    var retStr = "";
    for (var i = 0; i < this.size; ++i) {
      retStr += this.dataStore[i] + "  ";
   }
   return retStr;
};

Queue.prototype.empty = function(){
    return this.size == 0;
};

Queue.prototype.count = function () {
    return this.size;
}

// test program

// var q = new Queue();
// print("is queue empty="+q.empty());

// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
// print("is queue empty="+q.empty());
// print("q>>"+q.toString());
// q.dequeue();
// print("q>>"+q.toString());
// print("Front of queue: " + q.front());
// print("Back of queue: " + q.back());