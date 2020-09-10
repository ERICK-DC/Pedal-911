const iniciar = document.getElementById('iniciarS');
let grabar = document.getElementById('grabar');
iniciar.addEventListener('click',()=>{
    axios({
        method: 'GET',
        url: '../reloj.js'
    }).then(res=>{
        temporizador.innerHTML = tiempo.toFixed(2);
    }).catch(err => console.log(err))
});

grabar.addEventListener('click',()=>{
    axios({
        method: 'GET',
        url: '../reloj.js'
    }).then(res=>{
        
    }).catch(err => console.log(err))
});

iniciar.addEventListener('click',()=>{
    axios({
        method: 'GET',
        url: '../reloj.js'
    }).then(res=>{
        temporizador.innerHTML = tiempo.toFixed(2);
    }).catch(err => console.log(err))
});


const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');

buttonNext.addEventListener('click',()=>{
    axios({
        method: 'GET',
        url: '../reloj.js'
    }).then(res=>{
        buttonNext.onclick = () => mover(2);
    }).catch(err => console.log(err))
});