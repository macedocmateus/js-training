/* 

Capturar 2 números
e fazer as operações matemáticas
de soma, subtração, multiplicação,
divisão e resto da divisão

*/

let firstNumber =  Number( prompt('digite o primeiro numero'));
let secondNumber = Number ( prompt('digite o segundo numero'));
const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert(`Soma é: ${sum}`);
alert(`subtração é: ${sub}`);
alert(`multiplicação é: ${multi}`);
alert(`divisão é: ${div}`);
alert(`resto da divisão é: ${restDiv}`);

