

### Calculo de media de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7] 
]

var nota = 0;
for (var i = 0; i < alunos.length; i++) {
    
    nota = 0 
    aluno = alunos[i]
    console.log("Aluno:" + parseInt(i + 1));
    
    for(c = 0; c < aluno.length; c++) {
        nota += aluno[c]
    }

    media = nota / 4 

    if(media >= 7) {
        resultado = "aprovado"
    } else {
        resultado = "reprovado"
    }

    console.log("Media: " + media + " - " + resultado);

}


### Funções 
    - Evitar a repetição de código
    - Realizar chamadas dinâmidas de algoritimos

function calcularMedia( notas ){

    var soma = 0
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];

    }

    media = soma / notas.length;

    return media;

}

console.log("Média" + calcularMedia([8,8]))

// Funçao Recursiva

funciton 