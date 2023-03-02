let parola = prompt("Inserisci una parola");
console.log("hai scritto: " + parola);

let parolaAlContrario = (reverseString(parola));

if (parola == parolaAlContrario) {
   console.log("La parola inserita è palindroma!!!")
} else {
   console.log("La parola inserita non è palindroma!!!")
}

function reverseString(str) {
   return str.split("").reverse().join("");
}