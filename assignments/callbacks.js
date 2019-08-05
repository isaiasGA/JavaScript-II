// // Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



//   //Given this problem: 
  
//   function firstItem(arr, cb) {
//     // firstItem passes the first item of the given array to the callback function.
//     console.log(cb(arr));
//   }

//   // Potential Solution:

//   // Higher order function using "cb" as the call back
//   function firstItem(arr, cb) {
//     return cb(arr[0]);
//   }

//   // Function invocation 
//   firstItem(items, function(leng) {
//     console.log(leng)
//   });




//   function getLength(arr, cb) {
//     return cb(arr.length);
//   }
  
//    getLength(items, function(first) {
//       console.log(first)
//     });



   
//     function last(arr, cb) {
//       return cb(arr.pop());
//       // last passes the last item of the array into the callback.
//     }
//     last(items, function(last) {
//         console.log(last)
//       });



// function sumNums(x, y, cb) {
//   return cb(x + y); 
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

// sumNums(4, 6, function(callback){
//   console.log(callback) 
// });



// function multiplyNums(x, y, cb) {
//    cb( x * y)
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }

// multiplyNums(4, 5, function(call){
//   console.log(call)
// })

// function contains(item, list, cb) {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === item) {
//       return cb(true)
//     } 
//   }
// return cb(false)
// }

// contains('Notebook', items, function(included){
//   console.log(included);
// })

// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
