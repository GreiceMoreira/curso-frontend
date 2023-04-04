
var branco = "preto";
var preto = "cinza"
var cinza = "branco";
var carro = "preto";

branco == "branco" //true
branco == cinza    //false 
carro === branco    //true
var cavalo = carro == "preto" ? "cinza" : "marron"; //marron

//Somando as variaveis de cores é formada um string de quantos caracteres?
    var soma = 'branco' + 'preto' + 'cinza'
    var c = soma.length
    console.log(soma)
    console.log(c)

function calcular() {
    let val = window.document.getElementById('valor')
    let pres = window.document.getElementById('prestacao')
    let entr = window.document.getElementById('entrada')
    let res = window.document.getElementById('res')

    if (val.value.length == 0 || pres.value.length == 0 || entr.value.length < 0) {
        window.alert('[ERRO] Você deve inserir todos os valores corretamente')
        res.innerHTML = ` Impossivel contar \u{1F635} ! `
    } else {
        var v = Number(val.value)
        var p = Number(pres.value)
        var e = Number(entr.value)
        if (v > e && v > p) {
            var c = (v - e) / p
            res.innerHTML += `Número de prestações: ${c}`
        } else {
            res.innerHTML = ` Impossivel contar \u{1F635} ! `
        }

    }
}