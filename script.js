const html =  document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnDescansoCurto = document.querySelector('.app__card-button--curto');
const btnDescansoLongo = document.querySelector('.app__card-button--longo');
const cardTemporizador = document.querySelector('#timer');
const imagemBanner= document.querySelector('.app__image');
const tituloSite = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFoco = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const btnPausarIniciar = document.querySelector('#start-pause');
const musicaPause = new Audio('/sons/pause.mp3');
const musicaStart = new Audio('/sons/play.wav');
const musicaFinalTempo = new Audio('/sons/beep.mp3');
const iniciarOuPausarBtn = document.querySelector('#start-pause span');
const imgIniciarOuPausar = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');
let tempoEmSegundos = 10;
let intervaloID = null;

musica.loop = true;
musicaFoco.addEventListener('change',()=>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})
btnFoco.addEventListener('click',()=>{
    tempoEmSegundos = 1500;
    alterarEstiloPadrao('foco');
    btnFoco.classList.add('active');
})

btnDescansoCurto.addEventListener('click',()=>{
    tempoEmSegundos = 300;
    alterarEstiloPadrao('descanso-curto');
    btnDescansoCurto.classList.add('active');
})

btnDescansoLongo.addEventListener('click',()=>{
    tempoEmSegundos = 900;
    alterarEstiloPadrao('descanso-longo');
    btnDescansoLongo.classList.add('active');
})

function alterarEstiloPadrao(btnChave){
    mostrarTempo();
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

const contagemRegressiva = () =>{
    if(tempoEmSegundos <= 0){
        musicaFinalTempo.play();
        const alertaFinalTempo = confirm('Tempo Finalizado!');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo){
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        if (alertaFinalTempo){
            musicaFinalTempo.pause();
        }
        zerar();
        return
    }
    tempoEmSegundos -= 1
    mostrarTempo();
}

btnPausarIniciar.addEventListener('click',iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloID){
        zerar();
        musicaPause.play();
        return
    }
    musicaStart.play();
    intervaloID = setInterval(contagemRegressiva,1000);
    iniciarOuPausarBtn.textContent = "Pausar";
    imgIniciarOuPausar.setAttribute('src',`./imagens/pause.png`);
}

function zerar(){
    clearInterval(intervaloID);
    iniciarOuPausarBtn.textContent = "Começar";
    imgIniciarOuPausar.setAttribute('src',`./imagens/play_arrow.png`);
    intervaloID = null;
}

function mostrarTempo(){
    const tempo = new Date(tempoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br',{minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();