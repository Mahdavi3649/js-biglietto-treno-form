
const enter = document.getElementById("enter")
enter.addEventListener("click", function(){

    // get values from inputs
    const name = document.getElementById("name").value;
    const km = document.getElementById("km").value;
    const age = document.getElementById("age").value;


   // prezzo totale del viaggio per persone tra i 19 e 64 anni
   // 0.21€ al km
    const costoBiglietto = km * 0.21;
    console.log(costoBiglietto);

    
    const offerta = 'Tariffa Standard'
   // sconto
   // 20% under 18
   // 40% over 65

    if (age == 'minorenne'){
        const calcoloScontoUnder = ((costoBiglietto * 20) / 100 );
        const costoBiglietto = costoBiglietto - calcoloScontoUnder;
   
        offerta = 'Sconto Minorenne'

      }else if (age == 'over 65'){
        const calcoloScontoOver = ((costoBiglietto * 40) / 100 );
        const costoBiglietto = costoBiglietto - calcoloScontoOver;
   
        offerta = 'Sconto Over 65'
      }
      const carrozza = Math.floor(Math.random()*9) + 1;
      const cp = Math.floor(Math.random() * (100000 - 90000 + 1)) +90000;
    
    
       document.getElementById('nome_passeggero').innerHTML = name;
       document.getElementById('offerta').innerHTML = offerta;
       document.getElementById('costo').innerHTML = costoBiglietto.toFixed(2);
       document.getElementById('codice-cp').innerHTML = cp;
       document.getElementById('carrozza').innerHTML = carrozza;
    
})


 