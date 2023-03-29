function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22 // data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12) {
        //BOM DIA! 
        img.src = '1.jpg'
        document.body.style.background = "#EDDCBD"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = '3.jpg'
        document.body.style.background = '#EA8069'
    } else {
        //BOA NOITE!
        img.src = '2.jpg'
        document.body.style.background = "#8D7384"
    }


}
