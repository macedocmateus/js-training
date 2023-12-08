// from é para indicar qual arquivo que é para adquirir os dados
//import mensagemVindaDoUtils from './utils.js' // está estabelecendo um acesso aos códigos do utils
import {message, outraMensagem} from './utils.js'
import {double, today} from './utils.js'

//alert(mensagemVindaDoUtils) // exibir a mensagem no html

//alert(mensagemVindaDoUtils()) // para pegar a função la do utils

console.log(message, outraMensagem);

// importando pelo menos 1 dado em relação aos 2 dados exportados do utils
    // import {message} from './utils.js' // 
    // console.log(message);


    // importação do utils, exemplo 2
    console.log(double(3), today);

    // importação do utils, exemplo 3

    import funcaoPadrao, {date, greeting} from './utils.js'

    //console.log(date);
    //console.log(greeting('chica'));

    funcaoPadrao('mateus')


    // importação do utils, exemplo 4

    import {sum as soma } from './utils.js' // foi importado o sum do utils, porém para utilização nesse aquivo a funcao foi renomeada para soma pelo uso do as

    console.log(soma(5, 8));

    // importação do utils, exemplo 5

    import * as calculator from './utils.js' // * importar tudo e chamar todas elas  de calculator

    console.log(calculator.summary(5, 4)); // função soma
    console.log(calculator.multiply(5, 5)); // função multiplicação
    console.log(calculator.subtract(10, 4)); // função subtração
    console.log(calculator.divide(21, 7)); // função divisão
