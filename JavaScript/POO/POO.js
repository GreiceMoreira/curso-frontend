var ingredientes = ['água', 'mel', 'sal', 'mostarda'];


function capitalizar(ingredientes) {
    var modificado = [];
    for (var i = 0; i < ingredientes.length; i++) {
        var letraInicial = ingredientes[i].charAt(0).toLocaleUpperCase();
        var restoTexto = ingredientes[i].slice(1);
        var resultado = letraInicial + restoTexto;

        modificado[i] = resultado;

    }

    return modificado;
}

function ordenar(ingredientes){
    return ingredientes.sort(function(a,b){
        return a.localeCompare(b);

    });

}

var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenacao = ordenar(resultadoCapitalizado);


