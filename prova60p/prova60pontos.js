//números maiores que 6
let numeros = [2, 5, 8, 3, 10, 7]

for(let i = 0; i < numeros.length; ++i){
    if(numeros[i] > 6){
        console.log(numeros[i])
    }
}
// posições pares
let letras = ['s', 'b', 'e', 'd', 'n', 'f', 'a', 'h', 'i']
let pares =[]

for(let i = 0; i < letras.length; ++i){
    if(i %2 == 0){
        pares.push(i)
    }
}
console.log(pares)
//retorene true se for par e false se for impar
function ehPar(valor){
    if(valor % 2 === 0){
        console.log(true)
    } else{
        console.log(false)
    }
}
ehPar(4)
ehPar(7)

//frase organizada
function resumoPessoa(nome, idade, cidade){
    console.log(`${nome} tem ${idade} e mora em ${cidade}`)
}
resumoPessoa('Maria', 25, 'Salvador')
//numeros negativos
function contarNegativos(array){
    let sequencia = array
    let contador = 0
    for(let i = 0; i < sequencia.length; ++i){
        if(sequencia[i] < 0){
            ++contador
        }
    }
console.log(contador)
}
contarNegativos([5, -2, 0, -7, 3])