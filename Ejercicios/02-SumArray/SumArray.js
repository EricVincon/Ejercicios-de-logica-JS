function SumArray (arr, n) {
/*
ARRAY NUM ENTEROS ORDENADOS
2 + 34 = 36
[1, 4, 5, 9, 11, 13, 14, 20, 23, 34]
          i       j

36 > 22    j--      25 > 22   j--   21 < 22  i++    24 > 22  --j    18 < 22 i++   19 < 22 i++   23 > 22 j--
x  < n     i++
n = 22
*/

let i = 0;
let j = arr.length - 1;
while (i < j) {
  console.log(arr[i], arr[j]);
  let sum = arr[i] + arr[j];
  if (sum === n) return true;
  else if (sum > n) {
    if (arr[i] > arr[i + 1]) {
      i++;
    } else j--;
  } else if (sum < n) {
    if (arr[i] > arr[i + 1]) {
      j--;
    } else i++;
  }
}
return false;
}


module.exports = SumArray
