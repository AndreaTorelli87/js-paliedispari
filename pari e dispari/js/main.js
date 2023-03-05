let pariODispariDom = document.getElementById('pariODispariDom').value;

gioca.addEventListener("click",
   function () {

   const risultatiDOM = document.getElementById("risultati");
   risultatiDOM.className = `row p-3 d-flex`;

   const esitoDOM = document.getElementById("esito");

   let numeroComputer = generaNumeroRandom(1,5);
   const numeroComputerDOM = document.getElementById("numeroComputer");
   numeroComputerDOM.className = `mano${numeroComputer}`;

   let inputNumeroUtente = parseInt(formNumeroUtente.value);
   const numeroUtente = document.getElementById("numeroUtente");
   numeroUtente.className = `mano${inputNumeroUtente}`;

   let sommaNumeri = inputNumeroUtente + numeroComputer;
   console.log("La somma dei numeri è: " + sommaNumeri);

   if ((pariODispari(sommaNumeri)) == pariODispariDom) {
      document.getElementById("esito").innerHTML = "Hai Vinto!!!";
      esitoDOM.className = `p-5 fw-bold vittoria`;
   } else {
      document.getElementById("esito").innerHTML = "Hai Perso...";
      esitoDOM.className = `p-5 fw-bold sconfitta`;
   }

   document.getElementById("gioca").innerHTML = "RI-GIOCA";
   }
)


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