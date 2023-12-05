/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 
las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. 
Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres 
dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, 
por lo que debes invertir los caracteres en el orden correcto.

Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, 
no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.
*/
/* function decode(message) {
    const openP = [];
    const closeP = [];
    let newMessage = "";
    for (const index in message) {
        if (message[index] == "(") {
            openP.push(index);
        }
        if (message[index] == ")") {
            closeP.push(index);
        }
    }
    if (openP.length == 1) {
        newMessage += message.substring(0, openP[0]);
        openP[0]++;
        const middle = message.substring(openP[0], closeP[0]);
        const reverseM = middle.split("").reverse().join("");
        newMessage += reverseM + message.substring(closeP[0], message.length - 1);
        return newMessage;
    } else if (openP[1] < closeP[0]) {
        newMessage += message.substring(0, openP[0]);
        closeP[1]++;
        closeP[0]++;
        let middle = message.substring(openP[0], openP[1]);
        if (openP[1] < closeP[0]) {
            middle += decode(message.substring(openP[1], closeP[0]));
        }        middle += message.substring(closeP[0], closeP[1]);
        middle = decode(middle);
        newMessage += middle;
        newMessage += message.substring(closeP[1], message.length);
        return newMessage;
    } else {
        newMessage += message.substring(0, openP[0]);
        closeP[0]++;
        newMessage += decode(message.substring(openP[0], closeP[0]))
        newMessage += message.substring(closeP[0], openP[1]);
        closeP[1]++;
        newMessage += decode(message.substring(openP[1], closeP[1]))
        return newMessage;
    }
} */

function decode(message) {
    let pila = [];
    let result = '';

    for (const char of message) {
        if (char === '(') {
            pila.push(result);
            result = '';
        } else if (char === ')') {
            result = pila.pop() + result.split('').reverse().join('');
        } else {
            result += char;
        }
    }

    return result;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus