var HashTable = require("./hashtable_collion1.js");
var utils_m = require("../utils.js");
var print = utils_m.print;
var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
                 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
   hTable.put(someNames[i]);
}
for (var i = 0; i < someNames.length; ++i) {
   hTable.put(someNames[i]);
}

hTable.showDistro();

print(hTable.get("David"));