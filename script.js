const html =  document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnDescansoCurto = document.querySelector('.app__card-button--curto');
const btnDescansoLongo = document.querySelector('.app__card-button--longo');
const cardTemporizador = document.querySelector('#timer');
const imagemBanner= document.querySelector('.app__image');
const tituloSite = document.querySelector('.app__title');
const btnPausarIniciar = document.querySelector('.app__card-primary-button');
const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;
const botoes = document.querySelectorAll('.app__card-button');
const musicaFoco = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');

musica.loop = true;
musicaFoco.addEventListener('change',()=>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})
btnFoco.addEventListener('click',()=>{
    alterarEstiloPadrao('foco');
    btnFoco.classList.add('active');
})

btnDescansoCurto.addEventListener('click',()=>{
    alterarEstiloPadrao('descanso-curto');
    btnDescansoCurto.classList.add('active');
})

btnDescansoLongo.addEventListener('click',()=>{
    alterarEstiloPadrao('descanso-longo');
    btnDescansoLongo.classList.add('active');
})

function alterarEstiloPadrao(btnChave){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto',btnChave);
    imagemBanner.setAttribute('src',`./imagens/${btnChave}.png`);
    switch (btnChave){
        case "foco":
            tituloSite.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
        break;
        case "descanso-curto":
            tituloSite.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `
            break;
        case "descanso-longo":
            tituloSite.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;

    }
}