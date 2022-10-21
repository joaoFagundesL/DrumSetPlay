function tocarSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio)
    
    console.log(elemento);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento nao existe');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const idTecla = tecla.classList[1];

    const idAudio = `#som_${idTecla}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }   

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}