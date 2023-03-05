let valore = prompt("Inserisci qualcosa");
console.log("Hai scritto: " + valore);

if (valore == reverseFunc(valore)) {
   alert(`${valore} è palindromo!!!`)
} else {
   alert(`${valore} non è palindromo!!!`)
}

location.reload(); 

function reverseFunc(valore) {

   let valoreAlContrario = "";

   for (let i = valore.length - 1; i >=  0; i--) {

      valoreAlContrario += (valore[i]); 
   }
   return valoreAlContrario;
}