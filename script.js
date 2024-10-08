const imgCandidato = document.querySelector('.urna__candidato');
const nameCandidato = document.querySelector('.name__candidato');


function insert(num) 
{
    let number = document.querySelector('.show__numbers-display').innerHTML;
    document.querySelector('.show__numbers-display').innerHTML = number + num;
}

function votoNulo() {
    if(true) {
        document.querySelector('.show__numbers-display'). innerHTML = "Voto Nulo?";
        imgCandidato.style.display = 'none';
        nameCandidato.innerHTML = '';    
    }
}

function corrigeVoto() 
{
    var resultado = document.querySelector('.show__numbers-display').innerHTML;
    document.querySelector('.show__numbers-display').innerHTML = resultado.substring(0, resultado.length -1);    
}

