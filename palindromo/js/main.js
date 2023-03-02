let valore = prompt("Inserisci qualcosa");
console.log("hai scritto: " + valore);

function reverseFunc(valore) {

   let valoreAlContrario = "";

   for (let i = valore.length - 1; i >=  0; i--) {

      valoreAlContrario += (valore[i]); 
   }
   console.log(valoreAlContrario);
   return valoreAlContrario;
}

if (valore == reverseFunc(valore)) {
   console.log("Il valore inserito è palindromo!!!")
} else {
   console.log("Il valore inserito non è palindromo!!!")
}