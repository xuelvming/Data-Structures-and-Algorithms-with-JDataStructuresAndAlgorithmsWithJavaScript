/**
 * dictionary impl using javascript object
 */

var utils_m = require("../utils.js");
print = utils_m.print;

module.exports = HashTable;

function HashTable () {
    this.table = new Array(137);
}


HashTable.prototype.simpleHash = function(data) {
    var total = 0;
    for (var i = 0;i< data.length;++i){
        total += data.charCodeAt(i);
    }
    total = total %this.table.length;
    print("simpleHash for data="+data +"'s total="+total);
    return total;
};

HashTable.prototype.betterHash = function(string) {
    var H = 31;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length-1;
    }
    return parseInt(total);
};

HashTable.prototype.put = function(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
};

HashTable.prototype.showDistro = function() {
    var n = 0;
    for(var i = 0; i< this.table.length;i++){
        if(this.table[i] != undefined){
            print(i + ": "+this.table[i]);
            n++;
        }
    }
    print("totally we have item count="+n);
};