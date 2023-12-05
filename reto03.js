/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos,
 añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y 
la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o 
eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

function findNaughtyStep(original, modified) {
  for (let i = 0; i < modified.length; i++) {
    if (original[i] !== modified[i])
      return (original.length < modified.length) ? modified[i] : original[i]
  }
  return "";
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''
