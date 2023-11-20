let numberOne = prompt('digite o primeiro numero');
let numberTwo = prompt('digite o segundo numero');
// Number é um função construtora para converter dado para numérico, pois prompt retorna sempre uma string
let result = (Number(numberOne) + Number(numberTwo)) / 2; //type conversion (type casting) com grouping (precedência)

alert(`seu resultado é ${result}`);