/* O que eu preciso fazer 
-calcular a média 
como?
somar os numeros
dividir pela quantidade de numeros 

Classe aluno 
objeto aprovado  usar uma regex para testar ?????
objeto reprovado

const n01
const n02

class Aluno {
    
    constructor(notas) { 
        if (notas != null) {
            this.notas = notas
        }
    }

    addNota(novaNota) {
        if (this.notas == null) {
            this.notas = []
        }
        this.notas.push(novaNota)
    }

    calculaSoma(notas) {
        if (this.notas == null) {
            return 0
        }
        let soma = 0;
        for( notas = 0; notas < notas.length; notas++) {
            soma += notas[c];
        }
        return soma
    }
    calculaMedia() {

        return soma / notas.length
    }

    estaAprovado() {
        return this.calculalMedia() >= 8
    }

    condicao() {
        return this.estaAprovado() ? "aprovado" : "reprovado"
    }

    toString() {
        return 'Média: ' + this.calculaMedia() + ' - Resultado: ' + this.condicao();
    }

}

let greice = new Aluno([5, 9])
let jeffrei = new Aluno()
jeffrei.addNota(7)
jeffrei.addNota(5)
jeffrei.addNota(9)

console.log(greice.toString())
console.log(jeffrei.toString())

*/

class Aluno {

    constructor(nome = 'pessoa', notas = []) {
        this.nome = nome
        this.notas = notas
    }

    addNota(novaNota) {
        if (this.notas == null) {
            this.notas = []
        }
        this.notas.push(novaNota)
    }

    calculaSoma() {
        let soma = 0
        this.notas.forEach(
            nota => soma += nota
        )

        return soma

    }

    calculaMedia() {
        let media = 0
        media = this.calculaSoma() / this.notas.length;

        return media
    }

    condicao() {

        return this.calculaMedia() >= 7 ? "aprovado" : "reprovado";
    }

}

const a01 = new Aluno('Pedro', [5, 7])
const a02 = new Aluno('Paulo', [7, 7])
const a03 = new Aluno('Thiago', [8, 7])
const a04 = new Aluno('Joao', [9, 7])
const turma01 = [a01, a02, a03, a04]

turma01.forEach(aluno => console.log('A média do ' + aluno.nome + ' é ' + aluno.calculaMedia() + ' - o aluno foi ' + aluno.condicao()))

let somaMedias = 0
turma01.forEach(aluno => somaMedias += aluno.calculaMedia())
let mediaTurma = somaMedias / turma01.length

console.log('A média da turma foi: ' + mediaTurma)

// console.log('A média do aluno é ' + a01.calculaMedia())