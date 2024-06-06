const html =  document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnDescansoCurto = document.querySelector('.app__card-button--curto');
const btnDescansoLongo = document.querySelector('.app__card-button--longo');
const cardTemporizador = document.querySelector('#timer');
const imagemSite= document.querySelector('.app__image');
const imagemTitulo = document.querySelector('.app__title');
const btnPausarIniciar = document.querySelector('.app__card-primary-button');
const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;

btnFoco.addEventListener('click',()=>{
    html.setAttribute('data-contexto','foco');
})

btnDescansoCurto.addEventListener('click',()=>{
    html.setAttribute('data-contexto','descanso-curto');
})

btnDescansoLongo.addEventListener('click',()=>{
    html.setAttribute('data-contexto','descanso-longo');
})