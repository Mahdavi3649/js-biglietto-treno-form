/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

const enter = document.getElementById("enter")
enter.addEventListener("click", function(){

// get values from inputs
const name = document.getElementById("name").value;
const km = document.getElementById("km").value;
const age = document.getElementById("age").value;
//console.log(name,km,age);

// prezzo totale del viaggio per persone tra i 19 e 64 anni
const prezzo_al_km = 0.21;
let prezzo_finale;
const prezzo_standard = km * prezzo_al_km;
//console.log(prezzo_standard);

// prezzo per i minnorenni di uno sconto 20%
const prezzo_minnoreni = prezzo_standard - (prezzo_standard * 0.2)

//uno sconto del 40% per gli over 65
const prezzo_over_65 = prezzo_standard - (prezzo_standard * 0.4)
//console.log(prezzo_minnoreni, prezzo_over_65);

if (isNaN(km)) {
  alert("devi inserire un numero per i km da percorrere")
}

if(age <= 18){
   messaggio = "hai diritto al prezzo di scontato 20%";
   prezzo_finale = prezzo_minnoreni

}else if(age >= 65){
   messaggio = "hai diritto al prezzo di scontato 40%";
   prezzo_finale = prezzo_over_65
} else{
   messaggio = "mi dispace, nessun sconto applicabile";
   prezzo_finale = prezzo_standard
}


     const carrozza = Math.floor(Math.random()*9) + 1;
     const cp = Math.floor(Math.random() * 100000) + 1;
   
      document.getElementById('nome_passeggero').innerHTML = name;
      document.getElementById('offerta').innerHTML = `SCONTO ${age.toUpperCase()}`;
      document.getElementById('costo').innerHTML = prezzo_finale.toFixed(2);
      if (age ==='maggiorenne') {
        document.getElementById('offerta').innerHTML = `SCONTO NON DISPONIBILE`
    }
    if(isNaN(prezzo_finale)){
        document.getElementById('prezzo_finale').innerHTML = `RICONTROLLA I DATI INSERITI`
    }
      document.getElementById('codice-cp').innerHTML = cp;
      document.getElementById('carrozza').innerHTML = carrozza;
});

const reset = document.getElementById('reset');
reset.addEventListener('click',function(){
   document.getElementById('nome_passeggero').innerHTML = "";
   document.getElementById('offerta').innerHTML = "";
   document.getElementById('costo').innerHTML = "";
   document.getElementById('codice-cp').innerHTML = ""; 
     document.getElementById('carrozza').innerHTML = "";
   document.getElementById('name').value = "";
   document.getElementById('age').value = "";
   document.getElementById('km').value = "";
 });