var Queue = require("../queue.js");
var utils_m = require("../../utils.js");

var print = utils_m.print;


function Dancer (name,sex) {
    this.name = name;
    this.sex = sex;
}

function parseLine (line,males,females) {
    print("parseLine");
    var dancer = null;
    var sex = null;
    var name = null;
    line = line.trim();
    dancer = line.split(" ");
    sex = dancer[0];
    name = dancer[1];

    if(sex == 'M'){
        males.enqueue(new Dancer(name,sex));
    }
    else if(sex == 'F'){
        females.enqueue(new Dancer(name,sex));
    }
}

function getDancers(males,females) {
    
    //official reader, not working TO be fixed
    // const readline = require('readline');
    // const fs = require('fs');

    // const rl = readline.createInterface({
    //   input: fs.createReadStream('dancers.txt'),
    //   terminal: false,
    //   output:process.stdout
    // });

    // print("getDancers begin>>");

    // rl.on('line', function (line) {
    //   print('Line from file:'+ line);
    //   parseLine(line,males,females);
    // });
    // rl.close();
    // 
    

    var lineReader = require('line-reader');

    lineReader.eachLine('dancers.txt', function(line, last) {
      console.log(line);

      // if (/* done */) {
      //   return false; // stop reading
      // }
      parseLine(line,males,females);
      if(last){//last line
          print(maleDancers);
          print(femaleDancers);
          dance(maleDancers, femaleDancers);
          if (!femaleDancers.empty()) {
             print(femaleDancers.front().name + " is waiting to dance.");
          }
          if (!maleDancers.empty()) {
             print(maleDancers.front().name + " is waiting to dance.");
          }
      }
    });

    
};


function dance(males, females) {
   print("The dance partners are: \n");
   while (!females.empty() && !males.empty()) {
      person = females.dequeue();
      print("Female dancer is: " + person.name);
      person = males.dequeue();
      print(" and the male dancer is: " + person.name);
   }
   print();
}


var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
