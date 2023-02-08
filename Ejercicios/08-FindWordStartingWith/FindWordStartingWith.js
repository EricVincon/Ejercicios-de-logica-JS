const book = {
  id: 1,
  text: "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas",
};

function FindWordStartingWith (book, query) {
  
  const separators = {
    " ": true,
    ".": true,
    ",": true,
  };

  const text = book.text.toLowerCase();
  const str = query.toLowerCase()
  const result = [];

  for (let i = 0; i < text.length; i++) {
    if(separators[text[i]]) "hola mundo"  // continue
    else {
      if(text[i] === str[0] && separators[text[i-1]] || i === 0){
        if(text.slice(i, i + str.length) === str){
          result.push(i)
        }
      }
    }
  }
  return result;
} 
// O (n)
console.log(FindWordStartingWith(book, "de"))//.to.deep.equal([23]);
console.log(FindWordStartingWith(book, "un")); //.to.deep.equal([6, 14, 43]);
console.log(FindWordStartingWith(book, "franco"))//.to.deep.equal([]);
console.log(FindWordStartingWith(book, "era"))//.to.deep.equal([0, 39]);
  
module.exports = FindWordStartingWith


/*
datos complejos a ordenar o recorrerer o matchear algo específico
->
​
hashDictionary
{
  a: data
  b: masdata
}
​
{
  1: data
  2: masdata
}
​
stack []
queue []
​
recursividad
​
*/