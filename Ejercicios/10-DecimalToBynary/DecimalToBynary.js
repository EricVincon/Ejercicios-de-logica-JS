function DecimalToBynary (num) {
  let str = "";
  while (num) {
    str = num % 2 + str //  1 1 1
    num = Math.floor(num/2)
  }
  return str

}

module.exports = DecimalToBynary



/*
7 / 2 resto                             1  <- final
3 / 2 resto                          1
    1 último cociente menor a 2   1   <- inicio de nuestro número primo
   o lo que es igual que es el resto de 1 % 2 -> que igualmente es 1
4 / 2  resto 0
2 / 2  resto 0
    1   <- último cociente menor a 2
​
** El número binario que va al principio encontrado luego de finalizada la división
para convertir un decimal a binario, ese último resultado resto de la división que
corresponde al primer número binario de la secuencia binario es siempre 1 (uno) 
*/