var utils_m = require("../utils.js");
print = utils_m.print;

module.exports = Set;

function Set() {
    this.dataStore = [];
}

Set.prototype.add = function(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
};

Set.prototype.remove = function(data) {
    var pos = this.dataStore.indexOf(data);
    if(pos === -1){
        return false;
    }
    else{
        this.dataStore.splice(pos,1);
        return true;
    }
};

Set.prototype.show = function() {
    print(this.dataStore);
};


Set.prototype.contains = function(data) {
    return this.dataStore.indexOf(data) > -1;
};

Set.prototype.union = function(set) {
    var tempSet = new Set();
    for(var data of this.dataStore){
        tempSet.add(data);
    }
    for(var j of set.dataStore){
        if(!tempSet.contains(j)){
            tempSet.dataStore.push(j);
        }
    }
    return tempSet;
};