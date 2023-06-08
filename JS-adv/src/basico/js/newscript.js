/* O que eu preciso fazer 
-calcular a média 
como?
somar os numeros
dividir pela quantidade de numeros 

Classe aluno

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
