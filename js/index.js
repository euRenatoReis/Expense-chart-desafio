
const avisosDinheiro = document.querySelectorAll('.aviso');
const barraSegunda = document.querySelector('.barra-segunda');
const barraTerca = document.querySelector('.barra-terca');
const barraQuarta = document.querySelector('.barra-quarta');
const barraQuinta = document.querySelector('.barra-quinta');
const barraSexta = document.querySelector('.barra-sexta');
const barraSabado = document.querySelector('.barra-sabado');
const barraDomingo = document.querySelector('.barra-domingo');


barraSegunda.addEventListener('click', () => {

    avisosDinheiro[0].classList.remove('oculto');

})

barraTerca.addEventListener('click', () => {

    avisosDinheiro[1].classList.remove('oculto');

})

barraQuarta.addEventListener('click', () => {

    avisosDinheiro[2].classList.remove('oculto');

})

barraQuinta.addEventListener('click', () => {

    avisosDinheiro[3].classList.remove('oculto');

})

barraSexta.addEventListener('click', () => {

    avisosDinheiro[4].classList.remove('oculto');

})

barraSabado.addEventListener('click', () => {

    avisosDinheiro[5].classList.remove('oculto');

})

barraDomingo.addEventListener('click', () => {

    avisosDinheiro[6].classList.remove('oculto');

})


