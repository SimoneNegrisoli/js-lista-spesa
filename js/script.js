// MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
// - Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
// - Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"
// MILESTONE 2 - STAMPA DELLA LISTA DELLA SPESA
// Data la lista della spesa creata in precedenza, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Consigli:
// - Cerchiamo di individuare il tipo di ciclo (for/while) più adatto alla situazione
// - Per il ciclo while
// 	- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// 	- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


let toBuy = [];
let whatBuy = '';


while (whatBuy !== 'stop' && whatBuy !== ' ' ){

   whatBuy = prompt('Quali sono i prodotti da acquistare? (scrivi stop per termiare)')

   if (whatBuy !== 'stop'){
    toBuy.push(whatBuy);
   }
}
console.log(whatBuy);

const toBuyEl = document.getElementById("lista");

for (i = 0 ; i < toBuy.length; i++){

    const whatBuyEl = document.createElement("li");
    whatBuyEl.innerHTML = toBuy[i];
    toBuyEl.appendChild(whatBuyEl);

    console.log(toBuy[i])
}