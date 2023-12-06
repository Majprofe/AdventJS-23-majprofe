/*
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
*/
/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
/*
El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de Code Wars.
*/

function cyberReindeer(road, time) {
    let i = 0;
    let pila = ".";
    let s = 0;
    const array = [];
    let pos = 0;
    array.push(road);
    while (i < time-1) {
        if (i >= 4) {
            console.log(array)
            let text = array[i].replace(/\|/g, "*");
            console.log(text)
            text = text.split("");
              console.log(text);
            text[s] = pila;
            pila = text[pos + 1];
            s++;
            text[s] = "S";
            console.log(text)
            text = text.join("")
            console.log(array[i])
            array.push(text)
            pos++;
            i++;
        }else{
            console.log(array[i])
            let text = array[i].split("")
            console.log(text[pos+1])
            if(text[pos+1] === "|"){
                text = text.join("");
                console.log(pila)
                array.push(text);
                i++;
            }else{
                text[s]=pila;
                pila=text[pos+1]
                s++;
                text[s]="S";
                text = text.join("")
                console.log(text)
                console.log(array)
                array.push(text)
                pos++;
                i++;
            }

        }
    }
    return array
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result);
