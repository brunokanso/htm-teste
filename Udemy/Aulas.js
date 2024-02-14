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

// var numero = 1 
// {
//     var numero = 2
//     console.log('Dentro do bloco',numero)
// }
// console.log('Fora do Bloco', numero)


// var numero2 = 1 
// {
//     let numero2 = 2
//     console.log('Dentro do bloco',numero2)
// }
// console.log('Fora do Bloco', numero2)   





// For


// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log('I é =',i)


// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log('I é =',i)

// const numb = []

// for (var i = 0; i < 10; i++){
//     numb.push(function(){
//         console.log(i)
//     })
// }

// numb[2]()
// numb[8]()

// const numb = []

// for (let i = 0; i < 10; i++){
//     numb.push(function(){
//         console.log(i)
//     })
// }

// numb[2]()
// numb[8]()


// hoisting (var mesmo que não declarado em cascata o interpretador vai ''jogar'' ele para cima)

// console.log(a) // mesmo não declarado vai aparecer undefined em vez de dar um erro de declaração
// var a = 2
// console.log(a)


// objeto vs  function


// console.log(typeof Object)
// console.log(typeof new Object) // no JS se declara objetos apartir de uma função.

// class produto {}
// console.log(typeof produto)
// console.log(typeof new produto)





// // Par nome/valor


// const saudacao = 'opa' //contexto lexico

// function exe(){
//     const saudacao = 'fala'
//     return saudacao
// }

// // Objetos sao grupos aninhados de pares nome/valor

// const cliente = {
//     nome: 'Pedro',
//     sobrenome: 'Henrique',
//     idade: 23,
//     endereco: {
//         lougradoro: 'Rua nova iguaçu',
//         CEP: '70080-115'        
//     }    
// }


// console.log(saudacao)

// console.log(exe())

// console.log(cliente)



//  Notacao ponto "."

// console.log(Math.ceil(6.1))

// const obj1 = {}
// obj1.nome = 'Bola'

// console.log(obj1.nome)


// function Obj (nome){
//     this.nome = nome
//     this.exec = function (){
//         console.log('Exec...')
//     }
// }


// const obj2  = new Obj('Cadeira')
// const obj3  = new Obj('Mesa')

// console.log(obj2.nome)
// console.log(obj3.nome)
// obj3.exec()





// Atribuição


// const a = 7
// let b = 3

// b += a   // b = b + a
// console.log(b)

// b -= 4   // b = b - 3  (valor de b se mantem devido a soma de b + a)
// console.log(b)

// b *= 2   // b = b * 2
// console.log(b)

// b /= 2   // b = b / 2 
// console.log(b)

// b %= 2   // b = b % 2
// console.log(b)






// desctructuring 


// const pessoa = {
//     nome: 'Ana',
//     idade: 23, 
//     endereco: {
//                 lougradoro: 'Rua nova iguaçu',
//                 CEP: '70080-115'        
//             } 

<<<<<<< HEAD
// }

// const {nome,idade} = pessoa

// console.log(nome,idade)

// const {nome: n, idade:i} = pessoa
// console.log (n,i)

// const {sobrenome, bemHumorada = true} = pessoa
// console.log(sobrenome,bemHumorada)

// const {endereco:{lougradoro,CEP,numero = 'N 23'}} = pessoa 
// console.log(lougradoro,CEP,numero)



// function rand  ({min = 0, max = 200}){
//     const valor = Math.random() * (max - min)
//     return Math.floor(valor)
// }

// const obj = {max:50, min:10}

// console.log(rand(obj))
// console.log(rand({min:30}))
// console.log(rand({}))
// console.log(rand())


// function rand ([min =0, max = 1000]){
//     if (min >= max ) [min, max] = [max, min]
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// console.log(rand([50,40]))
// console.log(rand([992]))
// console.log(rand([,10]))
// console.log(rand([]))
// console.log(rand())



// OPERADORES ARITIMETICOS

// const [a,b,c,d] = [3,5,1,15]

// const soma = a + b + c + d
// const subtracao = soma - 10;
// const divisao = subtracao / 2
// const modulo = divisao % 2


// console.log(soma,subtracao,divisao,modulo)



//OPERADORES RELACIONAIS


console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 > 2)
console.log('06)', 3 < 2)
console.log('07)', 3<=2)
console.log('08)', 3>=2)


const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())


console.log('12)', undefined == null)
console.log('12)', undefined === null)


=======
// const pessoa = {
//     nome: 'Ana',
//     idade: 23, 
//     endereco: {
//                 lougradoro: 'Rua nova iguaçu',
//                 CEP: '70080-115'        
//             } 

// }

// const {nome,idade} = pessoa

// console.log(nome,idade)

// const {nome: n, idade:i} = pessoa
// console.log (n,i)

// const {sobrenome, bemHumorada = true} = pessoa
// console.log(sobrenome,bemHumorada)

// const {endereco:{lougradoro,CEP,numero = 'N 23'}} = pessoa 
// console.log(lougradoro,CEP,numero)



// OPERADORES ARITIMETICOS

// const [a,b,c,d] = [3,5,1,15]

// const soma = a + b + c + d
// const subtracao = soma - 10;
// const divisao = subtracao / 2
// const modulo = divisao % 2


// console.log(soma,subtracao,divisao,modulo)



//OPERADORES RELACIONAIS


// console.log('01)', '1' == 1)
// console.log('02)', '1' === 1)
// console.log('03)', '3' != 3)
// console.log('04)', '3' !== 3)
// console.log('05)', 3 > 2)
// console.log('06)', 3 < 2)
// console.log('07)', 3<=2)
// console.log('08)', 3>=2)


// const d1 = new Date(0)
// const d2 = new Date(0)
// console.log('09)', d1 === d2)
// console.log('10)', d1 == d2)
// console.log('11)', d1.getTime() === d2.getTime())


// console.log('12)', undefined == null)
// console.log('12)', undefined === null)



// OPERADORES LOGICOS
>>>>>>> 942eb5d7104701ca5d7481d379d371ce9620dd63
