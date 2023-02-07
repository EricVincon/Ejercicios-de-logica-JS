function HasBalancedBrackets (string) {
  
  const stack = [];                          // [ ]
  for (let i = 0; i < string.length; i++) {  // { [ ] ( ) }
    if(string[i]=== "{") stack.push("}")     //           i
    else if(string[i]=== "(") stack.push(")")
    else if(string[i]=== "[") stack.push("]")
    else if(stack.pop() !== string[i]) return false
  }
  return !stack.length
}

// O n 

console.log(HasBalancedBrackets("{[]()}")); // .to.equal(true)
console.log(HasBalancedBrackets("{[(])}")); // .to.equal(false)
console.log(HasBalancedBrackets("{[(")); // .to.equal(false)
console.log(HasBalancedBrackets("{[([{()[]{}}])]}")); // .to.equal(true)
console.log(HasBalancedBrackets("{[]}}")); // .to.equal(false)

module.exports = HasBalancedBrackets;



/*
¿Qué estructura de datos podemos utilizar para esto?
​
stack   []
queue   []
​
hashdictonary 
{}
​
*/

/*
Realizar un programa que ingrese los sueldos de 5 operarios en un vector. 
Realizar la creación y carga del vector en el constructor. Crear un método 
para imprimir el vector.
​
​
​
​
​
Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. 
En el constructor realizar el ingreso de datos. Definir otros dos métodos para 
imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)
​
*/




module.exports = HasBalancedBrackets
