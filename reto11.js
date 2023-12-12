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
    const reverseWord = word.split("").reverse().join("");
    if (reverseWord === word) return [];

    let pos1, pos2;
    let pila;
    let palindromo = false;

    for (let i = 0; i < word.length; i++) {
        for (let k = word.length - 1; k >= 0; k--) {
            pos1 = i;
            pos2 = k;
            pila = word[i];
            word[i] = word[k];
            word[k] = pila;

            palindromo = true;
            for (let j = 0; j < Math.floor(word.length / 2); j++) {
                if (word[j] !== word[word.length - 1 - j]) {
                    palindromo = false;
                    break;
                }
            }

            // Restaura la palabra a su estado original antes de continuar
            word[k] = word[i];
            word[i] = pila;

            if (palindromo) {
                return [pos1, pos2];
            }
        }
    }

    return null;
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null