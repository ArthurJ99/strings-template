// Prática guiada

/*const nome = prompt("Qual o seu nome?")
const cor = prompt("Qual a sua cor favorita?")

const frase = "A cor favorita do " + nome + " é " + cor

console.log(frase)

console.log(`A cor favorita do ${nome} é ${cor}`)


const citacao = prompt("Escreva uma citação:")

const fraseCitacao = " \" " + citacao + " \" "
console.log(fraseCitacao)

// Quebrar a linha
console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

// Letra maiuscula 

console.log(`Nome: ${nome.toUpperCase()} \nCor favorita: ${cor}`)

//
console.log(nome.length)

console.log(nome.includes('a')) */

//Exercicio strings

const nome = prompt("Qual o seu nome?")
const eMail = prompt("qual o seu e-mail?")

const frase =(`O e-mail ${eMail} foi cadastrado com sucesso. 
Boas vindas, ${nome}! O nome possui ${nome.length} caracteres`)
console.log(frase)

const novaFrase =frase.replaceAll("r", "l")
console.log(novaFrase)

console.log(eMail.includes("@"))






