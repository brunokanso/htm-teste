// Template String para quebrar linha, dar espaço ou concatenar STRING

// const nome = "bruno"
// const template = `teste 
// ${nome} !`

// console.log(template)

// console.log(`1 + 1 =  ${1 + 1}`)


// const up = texto => texto.toUpperCase()

// console.log(
//     `Ei... ${up('cuidado')}!`    
// )


//  Boolean

// let statusLet = false 
// console.log(statusLet)

// statusLet = true 
// console.log(statusLet)

// console.log(!(statusLet = true))


// Arrays

// const valores =  [2.3, 3.5, 4.6, 5.7, 6.2 ,9.2]
// console.log(valores)

// valores [6] = 20

// console.log(valores)
// console.log(valores.length)
// valores.push({id:3}, false , null, 'teste')
// console.log(valores)

// console.log(valores.pop())
// console.log(valores)

// delete valores[0]
// console.log(valores)


// Objeto

// const prod1 = {}
// prod1.nome = 'celular'
// prod1.preco = 4000
// console.log(prod1)

// const prod2 = {
//     nome: 'Camisa Men Top',
//     preco: 90.00,
//     cor:  'Preta',
//     tamanho: 'GG',
// }

// console.log(prod1, prod2)
// console.log(prod2.nome.length)



// nullUndefined

// let valor 
// console.log(valor)

// valor = null
// console.log(valor)


// Function

// function calculadora(a,b){
//     if(a + b > 0){
//       return a + b   
//     }
//     else{
//         return console.log("Numeros digitados não são validos")
//     }
// }

// console.log(calculadora(5,6))


// const imprimirSoma = function (a, b){
//     console.log(a + b)
// }
// imprimirSoma(2, 3)


// Função Arrow

// const soma = (a, b) => {
//     return a + b
// }
// console.log(soma(2,3))

// // Apenas quando a function vai executar apenas uma função

// const subtracao = (a, b) => a - b 
// console.log(subtracao (2,3))

// const imprimir = a => console.log(a)

// imprimir('Legal carai')


// var vs let

var numero = 1 
{
    var numero = 2
    console.log('Dentro do bloco',numero)
}
console.log('Fora do Bloco', numero)


var numero2 = 1 
{
    let numero2 = 2
    console.log('Dentro do bloco',numero2)
}
console.log('Fora do Bloco', numero2)   

