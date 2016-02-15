var Set = require("./set.js");
var utils_m = require("../utils.js");

var print = utils_m.print;

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
   print("Mike added")
}
else {
   print("Can't add Mike, must already be in set");
}
print(names.show());
var removed = "Mike";
if (names.remove(removed)) {
   print(removed + " removed.");
}
else {
   print(removed + " not removed.");
}
names.add("Clayton");
print(names.show());
remove = "Alisa";
if (names.remove(remove)) {
   print(remove + " removed.");
}
else {
   print(remove + " not removed.");
}


print("\n\nbegin the new test set\n\n\n");
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
print(it.show());