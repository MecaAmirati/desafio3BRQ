let inputNome = document.querySelector('.inputNome');
let comecar = document.querySelector('.comecar');
let nome = document.querySelector('.nome');
let quantTentativas = document.querySelector('.quantTentativas');
let jogar = document.querySelector('.jogar');
let reset = document.querySelector('.reset');
var numSorteado = 0;
let tentativas = 3;

//Habilita/Desabilita os botões antes de colocar o nome
inputNome.addEventListener('input', function () {
    if (inputNome.value === "") {
        comecar.disabled = true;
        comecar.style.backgroundColor = '#b0a3a3';
        jogar.style.backgroundColor = '#b0a3a3';
    } else {
        comecar.disabled = false;
        comecar.style.backgroundColor = '#1180e6';
    }
});

//Parâmetros de inicialização (nome, sorteio do número troca de cor dos botões)
comecar.addEventListener('click', function(){
    quantTentativas.innerHTML = "Você tem 3 tentativas!"
    nome.innerHTML = inputNome.value;
    sortear();
    comecar.disabled = true;
    comecar.style.backgroundColor = '#b0a3a3';
    jogar.disabled = false;
    jogar.style.backgroundColor = '#F2890D';
})

//Reinicia o jogo atualizando a página
function resetar() {
    window.location.reload()
}

//Sorteia um número, usando Math.random, baseado na opção escolhida 
function sortear() {
    let opcoes = document.querySelector('#opcoes');
    let valor = opcoes.options[opcoes.selectedIndex].value;
    let min, max;
    // console.log(valor);

    switch (valor) {
        case 'opcao1':
            min = 1;
            max = 10;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            // console.log(numSorteado);
            return numSorteado
        case 'opcao2':
            min = 1;
            max = 100;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            // console.log(numSorteado);
            return numSorteado
        case 'opcao3':
            min = 1;
            max = 200;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            // console.log(numSorteado);
            return numSorteado
        default:
            break;
}}

//Analisa escolhas do jogador mostrando dicas e valida as condições de vitória ou derrota
function jogo() {
    let jogada = parseInt (document.querySelector('#jogada').value);
    let dica = document.querySelector('.dica');
    
    if (jogada == numSorteado) {
        dica.innerHTML = "Parabéns, você conseguiu adivinhar!";
        jogar.style.display = 'none'
        reset.style.display = 'block'
        reset.addEventListener('click', resetar)
    
    } else if (jogada > numSorteado){
        dica.innerHTML = "Digite um número menor..."
        tentativas --
    
    } else {
        dica.innerHTML = "Digite um número maior..."
        tentativas --
    }

    quantTentativas.innerHTML = `Você ainda tem ${tentativas} tentativas!`
    if (tentativas == 0) {
        dica.innerHTML = "GAME OVER!"
        jogar.style.display = 'none'
        reset.style.display = 'block'
        reset.addEventListener('click', resetar)
        quantTentativas.innerHTML = `Você não acertou. <br> O número era ${numSorteado}!`
    }

    // if (jogada == numSorteado) {
    //     dica.innerHTML = "Parabéns, você conseguiu adivinhar!";

    // } else if (jogada > numSorteado){
    //     dica.innerHTML = "O número é maior"
        
    // } else if (jogada < numSorteado){
    //     dica.innerHTML = "O número é menor"
    // }
    // else {
    //     dica.innerHTML = "ERRO!"
    // }
}

jogar.addEventListener('click', jogo)
