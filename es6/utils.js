 // a constante está isolada neste arquivo

const message = "mensagem"
const outraMensagem = "olá como que vai ?"

// O export default não obriga a você colocar um nome especifico no arquivo que irá usar na hora da importação

//export default message // exportando a constante message com valor "mensagem"

// exportando somente valores e tipos de dados e não variáveis/constantes

//export default 'olá' // exportante um valor de string
// export default 23 // exportante um valor de um numero
// export default function () {
//     return 'bem-vindo'
// }

// export sem o default

export {message, outraMensagem} // exportando um objeto em formato lista

// uma alternativa ao export sem default é colocar export antes da declaração da variável/constante
    //export const message = "mensagem"
    //export const outraMensagem = "olá como que vai ?"

// OBS: só é válido 1 export default por arquivo

// para exporta mais de um código é preciso utilizar o named export




//exemplo 2 - named export

export const today = Date.now() // constante recebendo uma função Date que trás a hora atual em milissegundos

const double = number => number * 2
export {double}

// está exportando diversos dados
// exportando {today, double}



// exemplo 3 - misto named export com default

const date = new Date()
const greeting = name => `hello ${name}`

export default function (argument) {
    console.log(date, greeting(argument));
}

export {date, greeting}




// exemplo 4 - export as

export function sum(a, b) {
    return a + b
}

// exemplo 4 - export as with multi as

export const summary = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b
// ou
// export {sum, multiply, subtract, divide}
