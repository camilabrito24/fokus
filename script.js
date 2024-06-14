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

btnFoco.addEventListener('click',()=>{
    alterarEstiloPadrao('foco');
})

btnDescansoCurto.addEventListener('click',()=>{
    alterarEstiloPadrao('descanso-curto');
})

btnDescansoLongo.addEventListener('click',()=>{
    alterarEstiloPadrao('descanso-longo');
})

function alterarEstiloPadrao(btnChave){
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