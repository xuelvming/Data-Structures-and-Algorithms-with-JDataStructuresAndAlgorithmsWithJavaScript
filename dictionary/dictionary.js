/**
 * dictionary impl using javascript object
 */

var utils_m = require("../utils.js");
print = utils_m.print;

module.exports = Dictionary;


function Dictionary () {
    this.datastore = {};
}
/**
 * @param {[type]}
 * @param {[type]}
 */
Dictionary.prototype.add = function(key,value) {
    this.datastore[key] = value;
};

Dictionary.prototype.find = function(key) {
    return this.datastore[key];
};

Dictionary.prototype.remove = function(key) {
    delete this.datastore[key];
};

Dictionary.prototype.showAll = function() {
    var keys = Object.keys(this.datastore);
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        print(keys[i] + "  ->  "+ this.datastore[keys[i]]);
    }
};

Dictionary.prototype.count = function() {
    var n = 0;
    for (var key in this.datastore){
        n++;
    }
    return n;
};

Dictionary.prototype.clear = function() {
    for (var key in this.datastore){
        delete this.datastore[key];
    }
};





