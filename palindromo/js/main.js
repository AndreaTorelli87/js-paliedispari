let valore = prompt("Inserisci qualcosa");
console.log("Hai scritto: " + valore);

if (valore == reverseFunc(valore)) {
   console.log("Il valore inserito è palindromo!!!")
} else {
   console.log("Il valore inserito non è palindromo!!!")
}

function reverseFunc(valore) {

   let valoreAlContrario = "";

   for (let i = valore.length - 1; i >=  0; i--) {

      valoreAlContrario += (valore[i]); 
   }
   return valoreAlContrario;
}