let inputNome = document.querySelector('.inputNome');
let comecar = document.querySelector('.comecar');
let nome = document.querySelector('.nome');
let quantTentativas = document.querySelector('.quantTentativas');
let jogar = document.querySelector('.jogar');
var numSorteado = 0;
let tentativas = 3;

inputNome.addEventListener('input', function () {
    if (inputNome.value === "") {
        comecar.disabled = true;
        comecar.style.backgroundColor = '#b0a3a3';
    } else {
        comecar.disabled = false;
        comecar.style.backgroundColor = '#1180e6';
    }
});

comecar.addEventListener('click', function(){
    quantTentativas.innerHTML = "Você tem 3 tentativas!"
    nome.innerHTML = inputNome.value;
    sortear();
})

function sortear() {
    let opcoes = document.querySelector('#opcoes');
    let valor = opcoes.options[opcoes.selectedIndex].value;
    let min, max;
    console.log(valor);//apagar

    switch (valor) {
        case 'opcao1':
            min = 1;
            max = 10;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            console.log(numSorteado);
            return numSorteado
        case 'opcao2':
            min = 1;
            max = 100;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            console.log(numSorteado);
            return numSorteado
        case 'opcao3':
            min = 1;
            max = 200;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            console.log(numSorteado);
            return numSorteado
        default:
            break;
}
}

function jogo() {
    let jogada = parseInt (document.querySelector('#jogada').value);
    let dica = document.querySelector('.dica');
    
    if (jogada == numSorteado) {
        dica.innerHTML = "Parabéns, você conseguiu adivinhar!";
        jogar.disabled = true;
        jogar.style.backgroundColor = '#b0a3a3';

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
        jogar.disabled = true;
        jogar.style.backgroundColor = '#b0a3a3';
        quantTentativas.innerHTML = `Você não acertou. <br> O número era ${numSorteado}`
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

