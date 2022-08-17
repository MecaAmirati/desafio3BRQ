let inputNome = document.querySelector('.inputNome');
let comecar = document.querySelector('.comecar');
let nome = document.querySelector('.nome');
let jogada = document.querySelector('#jogada');
let jogar = document.querySelector('.jogar');
let dica = document.querySelector('.dica');
let quantTentativas = document.querySelector('.quantTentativas');

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
    nome.innerHTML = inputNome.value;
    sortear();
    
})

function sortear() {
    let opcoes = document.querySelector('#opcoes');
    let valor = opcoes.options[opcoes.selectedIndex].value;
    let min, max, numSorteado;
    console.log(valor);//apagar

    switch (valor) {
        case 'opcao1':
            min = 1;
            max = 10;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            console.log(numSorteado);
            break;
        case 'opcao2':
            min = 1;
            max = 100;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            console.log(numSorteado);
            break;
        case 'opcao3':
            min = 1;
            max = 200;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; 
            console.log(numSorteado);
            break;
        default:
            break;
}
}



