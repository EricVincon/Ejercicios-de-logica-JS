// acciones: [4, 3, 2, 5, 11]
// mayor ganancia: 9

function MaxValue (shares) {
  let minPrecio = shares[0];                // 3
  let diffMax = 0;                          //                i
  for (let i = 1; i < shares.length; i++) { // [23, 7, 200, 3, 4, 8, 6]
    if (shares[i] - minPrecio > diffMax) {
      diffMax = shares[i] - minPrecio;
    }
    if (minPrecio > shares[i]) {
      minPrecio = shares[i];
    }
  }
  return diffMax;
};




module.exports = MaxValue
