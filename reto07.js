/*
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')


   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####


drawGift(5, '*')

    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####


drawGift(1, '^')

#

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/

function drawGift(size, symbol) {
    if(size===1){
        return "#\n";
    }
    let gift="";
    gift += `${" ".repeat(size-1)}${"#".repeat(size)}\n`;
    for (let i = 1; i < size-1; i++) {
        gift+=`${" ".repeat(size-i-1)}#${symbol.repeat(size-2)}#${symbol.repeat(i-1)}#\n`;
    }
    gift += `${"#".repeat(size)}${symbol.repeat(size-2)}#\n`;
    for (let i = size-1; i > 1; i--) {
        gift+=`#${symbol.repeat(size-2)}#${symbol.repeat(i-2)}#\n`;
    }
    gift += `${"#".repeat(size)}\n`;
    return gift;
}

console.log(drawGift(4, '+'));
console.log(drawGift(5, '*'));
console.log(drawGift(1, '^'));
