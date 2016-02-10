var Queue = require("../queue.js");
var utils_m = require("../../utils.js");

var print = utils_m.print;

function distribute(nums, queues, digit) {
    var n = queues.length;
    for (var i = 0; i < n; ++i) {
      if (digit == 1) {
         queues[nums[i]%10].enqueue(nums[i]);
      }
      else {
         queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
      }
    }
}

function collect(queues, nums) {
   var i = 0;
   for (var digit = 0; digit < 10; ++digit) {
      while (!queues[digit].empty()) {
         nums[i++] = queues[digit].dequeue();
      }
   }
}

function dispArray(arr) {
   for (var i = 0; i < arr.length; ++i) {
      putstr(arr[i] + " ");
   }
}


// main program

var queues = [];
for (var i = 0; i < 10; ++i) {
   queues[i] = new Queue();
}
var nums = [];
//generate 10 random numbers to sort
for (var i = 0; i < 10; ++i) {
   nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
print("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 1);
collect(queues, nums);
distribute(nums, queues, 10);
collect(queues, nums);
print("\n\nAfter radix sort: ");
dispArray(nums);