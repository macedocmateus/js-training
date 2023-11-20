/* 

capture 5 items para compor a lista de um supermercado.

Após capturar os 5 items, imprima-os, separando por vírgula.

*/

let items = []; // criando array vazio

for (let i = 1; i <= 5; i++) { // vai repetir 5 vezes os códigos abaixo
  let item = prompt(`digite o item ${i}`); // o usuário vai entrar com os 5 items
  items.push(item) // colocando todos os 5 valores criados no item e organizando e colocando eles no array items através da função push
}

alert(`seus items são: ${items}`) // mostrando todos os 5 items que estão no array items

