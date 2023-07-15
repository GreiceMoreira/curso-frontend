import works from './works.js'

// Filtra meses
const filteredWorks = works.filter((works) => {
    return works.tecnica === 'Crochet'
})

console.log(filteredWorks)

let toPrint = ''

// Lista meses
filteredWorks.forEach(works => {
    toPrint += works.nomeReceita + ', '
});

// Reduce - função com todos os itens do array e devolve um valor único
let sumWorksHoras = filteredWorks.reduce((prev, next) => {
    return { horas: prev.horas + next.horas }
})


document.getElementById('main').innerHTML =
    toPrint + '<br> Soma de horas dos trabalhos selecionados: '
    + sumWorksHoras.horas