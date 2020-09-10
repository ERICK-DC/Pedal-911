/*let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciarS');
let grabar = document.getElementById('grabar');
let almacenarTiempos = document.getElementById('almacenarTiempos');
*/

let tiempo =0; intervalo = 0;
let verificador = false;

init();
function init(){
    iniciar.addEventListener('click', iniciarContador);
    grabar.addEventListener('click', grabarContador);
}

function iniciarContador(){
    if(verificador==false){
        intervalo = setInterval(function(){
            tiempo += 0.0001;
            temporizador.innerHTML = tiempo.toFixed(2);
        },10);
        verificador = true;
    }
}


function grabarContador(){
    if(temporizador.textContent === '00.00'){
        alert('Primero dar click en el boton inicar')

    }
    else {
        tiempo += 0.000001;
        verificador = false;
        clearInterval(intervalo);
        let p = document.createElement('ul');
        p.innerHTML = `<li>Tiempo : ${tiempo.toFixed(2)}</li>`;
        alert('El valor a pagar es de: '+ temporizador.textContent +'$')
    }
        
}



const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => mover(1);
buttonNext.onclick = () => mover(2);

function mover(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

