          //chiedo di inserire >
let pariODispariPrompt = prompt('Scegli "pari" o "dispari"');

           //chiedo di inserire >
let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log("il tuo numero è: " + numeroUtente);

      //Genero un  numero random tra >
let numeroComputer = generaNumeroRandom(1,5);
console.log("il numero del computer è: " + numeroComputer);

//sommo il valore dell'utente a quello random
let sommaNumeri = numeroUtente + numeroComputer;
console.log("la somma dei numeri è: " + sommaNumeri);

//stabilisco se la somma è pari o dispari
console.log(pariODispari(sommaNumeri));

//stabilisci il risultato
if (sommaNumeri == pariODispariPrompt) {
   console.log("Hai Vinto!!!");
} else {
   console.log("Hai perso...");
}


function pariODispari(numeroDaVerificare) {

   let risultato;

   if (numeroDaVerificare % 2 == 0){
      risultato = "pari";
   } else {
      risultato = "dispari";
   }
   return risultato;

}

function generaNumeroRandom(min, max) {
   const numeroRandom = Math.floor( Math.random() * (max - min + 1) ) + min;
   return numeroRandom;
}