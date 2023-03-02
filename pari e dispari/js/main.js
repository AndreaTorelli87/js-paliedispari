let pariODispariPrompt;

do {     //chiedo di inserire >                            <finche non scrive esattamente "pari" o "dispari"
   pariODispariPrompt = prompt('Scegli "pari" o "dispari"');
   console.log(pariODispariPrompt);
} while ((pariODispariPrompt != "pari") && (pariODispariPrompt != "dispari"));
console.log("Hai scelto: " + pariODispariPrompt);

let numeroUtente;

do {       //chiedo di inserire >                            <finche non scrive un numero da 1 a 5
   numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
   console.log(numeroUtente);
} while ((numeroUtente > 5) || (numeroUtente < 1));

console.log("Il tuo numero è: " + numeroUtente);

       //Genero un  numero random tra >
let numeroComputer = generaNumeroRandom(1,5);
console.log("Il numero del computer è: " + numeroComputer);

//sommo il valore dell'utente a quello random
let sommaNumeri = numeroUtente + numeroComputer;
console.log("La somma dei numeri è: " + sommaNumeri);

//stabilisci il risultato
if ((pariODispari(sommaNumeri)) == pariODispariPrompt) {
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