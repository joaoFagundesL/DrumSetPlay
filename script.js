function tocarSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const idTecla = tecla.classList[1];

    const idAudio = `#som_${idTecla}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    }
}