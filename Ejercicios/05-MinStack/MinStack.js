/*
push(value) : añadir el elemento, value, al stack.
pop() : sacar un elemento del stack.
min() : obtener el elemento con el valor mínimo.
peek(): obtener el elemento que está el en top del Stack

  |   |     
  | 2 |  <- peek
  | 1 |
  -----

    |   |  
    | 1 |  <- min
    | 1 |
    -----
Importante
TODOS los métodos mencionados anteriormente deben ser de O(1).
Para la resolución del ejercicio no se puede utilizar ningún Array method
*/
class Stack {
  constructor() {
    this.top = null;
  }
}

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
    this.min = null;
  }
}

Stack.prototype.push_stack = function (value) {
  if (!this.top) {
    this.top = new Node(value);
    this.top.min = this.top.value;
  } else {
    const newTop = new Node(value);
    value < this.top.min ? (newTop.min = value) : newTop.min = this.top.min;
    newTop.next = this.top;
    this.top = newTop;
  }
};

Stack.prototype.pop = function () {
  var value;
  this.top ? (value = this.top.value) : null;
  this.top ? (this.top = this.top.next) : null;
  return value;
};

Stack.prototype.peek = function () { 
  return this.top.value;
};
Stack.prototype.min = function () {
  return this.top.min;
};

const stack = new Stack();
stack.push_stack(11); // min  11
stack.push_stack(2); // min  2
stack.push_stack(3); // min  2
stack.push_stack(-23); // min -23
stack.push_stack(4); // min -23
stack.push_stack(104); // min -23

// this.aux= -23

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
// const node1 = new Node(1)
// const node2 = new Node(2)
// const node3 = new Node(3)
// stack.top = node1
// var newTop = node2
// newTop.next = stack.top
// stack.top = newTop

// newTop = node3
// newTop.next = stack.top
// stack.top = newTop

// function peek(stack){
//    return stack.top.value
// }
console.log("01 stack", stack);
// console.log("02 node1",node1)

console.log("02 peek", stack.peek());
console.log("03 min", stack.min());

// Heredar
class MinStack {}


module.exports = {
  Node,
  MinStack
}
