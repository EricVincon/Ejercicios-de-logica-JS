function SolveGraph(graph, start, end, register = {}) { // "a", "r"
                                                       // { a: true, c: true, s: true}
  console.log("...........", register)
  if(register[start]) return false 
  register[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    if (graph[start][i] === end) return true;
    //        ->   booleano
    else if (SolveGraph(graph, graph[start][i], end, register)){ // "c", "r"
      return true            
    }                        
  }                          
  return false
}

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

console.log(SolveGraph(graph, "a", "r")); // .to.equal(true)
// console.log(SolveGraph(graph, "a", "d")); // .to.equal(true)
// console.log(SolveGraph(graph, "s", "b")); // .to.equal(false)


module.exports = SolveGraph


const graph2 = {
  // "a" -> "b"
  a: ["c"],
  b: ["c"],
  c: ["s"],
  d: ["a"],
  s: ["a"],
};