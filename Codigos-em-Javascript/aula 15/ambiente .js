let num = [5,4,9,7,6]
console.log(`Nosso vetor e  o ${num} `)
num[3]=4 //Adicionar ou mudar conteudo do vetor
num.sort()//Exibir em forma crescente
num.push(1)//Adicionar conteudo na ultima posição no vetor
console.log(`Nosso vetor e  o ${num} `)
console.log(`O vetor tem ${num.length} posições`)//Tamanho do vetor
/*for(let pos= 0; pos<num.length;pos++ ){
    console.log(`O valor ${num[pos]} esta na posição ${pos}`)
}*/
for(let pos in num){
    console.log(`O valor ${num[pos]} esta na posição ${pos}`)
}//Forma simplificada para vetores e objetos
let vl =num.indexOf(6)
console.log(`${vl}`) 
