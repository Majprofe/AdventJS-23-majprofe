/*
En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

Si ya es un palíndromo, un array vacío.
Si no es posible, null.
Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
Por ejemplo:

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.
*/

function getIndexsForPalindrome(word) {
  if (word === word.split('').reverse().join('')) return []

  const wordArray = word.split('')
  const length = wordArray.length

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i !== j && wordArray[i] !== wordArray[j]) {
        const temp = wordArray[i]
        wordArray[i] = wordArray[j]
        wordArray[j] = temp

        let isPalindrome = true
        for (let k = 0; k < length / 2; k++) {
          if (wordArray[k] !== wordArray[length - 1 - k]) {
            isPalindrome = false
            break
          }
        }

        if (isPalindrome) return [i, j]

        wordArray[j] = wordArray[i]
        wordArray[i] = temp
      }
    }
  }

  return null
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null