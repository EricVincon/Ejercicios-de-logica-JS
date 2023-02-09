function BinaryToDecimal (binary) {
  var sum = 0;
  let index = 0;
  while (index < binary.length) {
    // sum += Math.pow(2, index) * binary[binary.length - 1 - index];
    sum += Math.pow(2, binary.length - 1 - index) * binary[index];  
    index++
  }
  return sum;

}

module.exports = BinaryToDecimal
