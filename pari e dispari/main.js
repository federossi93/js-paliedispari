//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//prompt pari o dispari
//prompt inserire numero
//funzione per generare un numero da 1 a 5
//sommare i 2 risultati e vedere se il risultatro sommato è pari o dispai

var pariDispari = prompt('pari o dispari ?')
console.log(pariDispari);

var numeroSelezionato = Number(prompt('Inserisci un numero da 1 a 5'))
console.log(numeroSelezionato);

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

const numeroRandom = generateRandomNumber(1, 5);
console.log(numeroRandom);

const somma = numeroSelezionato + numeroRandom


function risultatoSomma(int) {
    if(somma  % 2 === 0){
        console.log('la somma dei numeri è pari');
    }else{
        console.log('la somma dei numeri è dispari');
    }
}

risultatoSomma()



if(pariDispari === 'pari' && somma %2 == 0){
    console.log('hai vinto');
}else if(pariDispari === 'dispari' && somma %2 !== 0){
    console.log('hai vinto');
}else{
    console.log('hai perso');
}