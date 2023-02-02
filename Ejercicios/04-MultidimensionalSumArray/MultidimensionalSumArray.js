function mdArraySum (arr) {


  const result = arr.reduce(
    (acum, elem) => acum + (Array.isArray(elem) ? mdArraySum(elem) : elem),
    0
  );
  return result;

}



// versión no recursiva
// function sumArrayNoRecursive(arr) { // [ 2, [3,4]]
//   let sum = 0;
//   let queue = [arr]; // [  [ 2, [3,4]]  ]
//   while (queue.length > 0) {
//     let current = queue.shift(); // current -> [3,4] queue -> [ ]
//     for (let i = 0; i < current.length; i++) {
//       if (Array.isArray(current[i])) {
//         queue.push(current[i]); // queue -> [ [3,4] ]
//       } else {
//         sum += current[i];
//       }
//     }
//   }
//   return sum;
// }
// ​
/*
sum = 14
                 i
[ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ] -> 4 elementos
​
O n
*/

module.exports = mdArraySum
