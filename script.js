const imgCandidato = document.querySelector('.urna__candidato');
const nameCandidato = document.querySelector('.name__candidato');
const numberDisplay = document.querySelector('.show__numbers-display');

const candidato = ['zé da esquina', 'jamal', 'bão'];
const numberCandidato = [233, 33455, 6567, 8787, 5454];

l


function insert(num) {
    let number = document.querySelector('.show__numbers-display').innerHTML;
    let voto = document.querySelector('.show__numbers-display').innerHTML = number + num;

    if (voto == numberCandidato) {
        imgCandidato.src = './images/zeca.avif';
        nameCandidato.innerHTML = candidato;
    }
}

function votoNulo() {
    document.querySelector('.show__numbers-display'). innerHTML = "Voto Nulo?";
    nameCandidato.innerHTML = '';
}

function corrigeVoto() {
    var resultado = document.querySelector('.show__numbers-display').innerHTML;
    document.querySelector('.show__numbers-display').innerHTML = resultado.substring(0, resultado.length -1);
    nameCandidato.innerHTML = ''   
}

function confirmVoto() {
    nameCandidato.innerHTML = '';
    numberDisplay.innerHTML = '';
    imgCandidato.src = './images/img-person-placeholder.jpg'
}