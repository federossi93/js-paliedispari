// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//prompt 
//funzione per capire il tipo di parola

var parola = prompt('inserisci parola')

var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
    } else {
    console.log('la parola non è palindroma');
    }


    //il method split:divide una stringa in un array di sottostringhe e sestituisce l'array 

    //il method revers:inverte l0ordine degli elementi in un array

    //il method join:restituisce un array come stringa
function invertiParola(str){
    var strInversa = str.split('').reverse().join('');  
    return strInversa;
}
