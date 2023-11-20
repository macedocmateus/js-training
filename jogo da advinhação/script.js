let result = prompt ("avinhe o numero que eu estou pensando ? está entre 0 e 10");
/* função matemática Math com a funcionalidade .round para
pegar o proximo numero inteiro e a funcionalidade .random para gerar um numero aleatório*/
const randomNumber = Math.round(Math.random() * 10)  
let xAttempts = 1;


while (Number(result) != randomNumber) {
  result = prompt("erro, tente novamente");
  xAttempts++;
}

alert (`parabéns você acerto em ${xAttempts} tentativas`)
