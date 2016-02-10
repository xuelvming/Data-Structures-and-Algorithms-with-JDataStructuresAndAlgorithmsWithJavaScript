var utils_m = require("../utils.js");
print = utils_m.print;

function Node(element) {
    this.element = element;
    this.next = null;
}

function LList(){
    this.head = new Node('head');
}

/**
 * find previous node before item
 * @param  {[type]} item anchor item
 * @return {[type]}      [description]
 */
LList.prototype.findPrevious = function(item) {
    var currNode = this.head;
    while((currNode.next !== null) && (currNode.next.element  != item)){
      currNode = currNode.next;
    }
    if(currNode.next === null){
      return null;
    }
    return currNode;
};

/**
 * [remove description]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
LList.prototype.remove = function(item) {
    var preNode = this.findPrevious(item);
    if(preNode === null){
        return false;
    }
    if(preNode.next !== null){
       preNode.next = preNode.next.next;
    }
    return true;
};

/**
 * display the link list
 * @return {none} none return type
 */
LList.prototype.display = function() {
    var currNode = this.head;
    var message = "%%%";
    while(currNode.next !== null){
      message = message + ">>>";
      message = message + currNode.next.element;
      currNode = currNode.next;
    }
    message = message + ">>>$$$";
    print(message);
};


// LList.prototype.display = function(){
//    var currNode = this.head;
//    while (!(currNode.next === null)) {
//       print(currNode.next.element);
//       currNode = currNode.next;
//    }
// }

/**
 * find the node whose element equals item
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
LList.prototype.find = function(item) {
    var currNode = this.head;
    while(currNode.element !== item){
      currNode = currNode.next;
    }
    return currNode;
};

/**
 * insert a newElement after the target item,if item is not found
 * do nothing, return false;
 * @param  {[type]} newElement [description]
 * @param  {[type]} item       [description]
 * @return {[type]}            [description]
 */
LList.prototype.insert = function(newElement,item) {
    var anchor = this.find(item);
    if(anchor === null){
         return false;
    }
    var newNode = new Node(newElement);
    newNode.next = anchor.next;
    anchor.next = newNode;
    return true;
};


var cities = new LList();
print(cities.insert("Conway", "head"));
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
print();
cities.remove("Carlisle");
cities.display();