/**
 * dictionary impl using javascript object
 */

var utils_m = require("../utils.js");
print = utils_m.print;

module.exports = HashTable;

function HashTable() {
    this.table = new Array(137);
}

HashTable.prototype.buildChains = function() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = [];
    }
};


HashTable.prototype.simpleHash = function(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    total = total % this.table.length;
    print("simpleHash for data=" + data + "'s total=" + total);
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
        total += this.table.length - 1;
    }
    return parseInt(total);
};

HashTable.prototype.put = function(data) {
    var pos = this.betterHash(data);
    var index = 0;
    if (this.table[pos][index] === undefined) {
        this.table[pos][index] = data;
    } else {
        while (this.table[pos][index] !== undefined) {
            ++index;
        }
        this.table[pos][index] = data;
    }
};

HashTable.prototype.showDistro = function() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i][0] != undefined) {
            print(i + ": " + this.table[i]);
        }
    }
};

HashTable.prototype.get = function(key) {
    var index = 0;
    var pos = this.betterHash(key);
    if (this.table[pos][index] == key) {
        return this.table[pos][index + 1];
    } else {
        while (this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }
    return undefined;

};
