
function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Você deve inserir todos os números')
        res.innerHTML = `Impossível contar \u{1F635} !`
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem progressiva
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    }
}



/* res.innerHTML = 'Vivo'
(ini.value > 0 && fim.value > 0 && pas.value > 0)
if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('[ERRO] Você deve inserir todos os números')
} else if (ini.value > 0 && fim.value > 0 && pas.value > 0){
    for (ini.value; (ini + pas) <= fim; (ini + pas) ){
        res.innerHTML = `Passo ${ ini } `
    }
} else {
    window.alert('Valores inseridos são inválidos')
}

if (ini.value.lenght == 0 || fim.value.lenght == 0 || pas.value.lenght == 0) {
    window.alert('[ERRO] Você deve inserir todos os números')
} 
      for (ini.value; soma <= fim; soma + pas){
            res.innerHTML = `Passo ${ soma } `
        }

res.innerHTML = `\u{1F635}`
*/


