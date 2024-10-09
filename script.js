
const imgCandidato = document.querySelector('.urna__candidato');
const nameCandidato = document.querySelector('.name__candidato');
const numberDisplay = document.querySelector('.show__numbers-display');
const confirmar = document.querySelector('.onfirma__btn');


const bioCandidatos = [
    {
        name: "Antônio Rocha",
        numeroVoto: 17231,
        fotoCandidato: './images/grandfather.png'
    },
    {
        name: "Mariana Almeida",
        numeroVoto: 135627,
        fotoCandidato: './images/woman-pink.png'
    }, 
    {
        name: "Cauã Alves",
        numeroVoto: 111231,
        fotoCandidato: './images/man-red-tie.png'
    },
    {
        name: "Alex Gomes",
        numeroVoto: 993423,
        fotoCandidato: './images/man.png'
    }
];

function insert(num) {
    let number = document.querySelector('.show__numbers-display').innerHTML;
    let voto = document.querySelector('.show__numbers-display').innerHTML = number + num;

    if (voto == bioCandidatos[0].numeroVoto) {    
        nameCandidato.innerHTML = bioCandidatos[0].name;
        imgCandidato.src = bioCandidatos[0].fotoCandidato;

    } else if (voto == bioCandidatos[1].numeroVoto) {
        nameCandidato.innerHTML = bioCandidatos[1].name;
        imgCandidato.src = bioCandidatos[1].fotoCandidato;  
    } else if (voto == bioCandidatos[2].numeroVoto) {
        nameCandidato.innerHTML = bioCandidatos[2].name;
        imgCandidato.src = bioCandidatos[2].fotoCandidato;
    } else if (voto == bioCandidatos[3].numeroVoto) {
        nameCandidato.innerHTML = bioCandidatos[3].name;
        imgCandidato.src = bioCandidatos[3].fotoCandidato;
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
    imgCandidato.src = './images/img-person-placeholder.jpg';
}