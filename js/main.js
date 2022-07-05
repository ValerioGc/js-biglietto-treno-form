//Dichiaro variabili KM ed Età
let distance = parseInt(prompt("Quanti Kilometri devi percorrere?"));
const age = parseInt(prompt("Quanti Anni hai?"));
console.log(`L'utente ha ${age} anni`);
console.log(`L'utente deve percorrere ${distance}km`);
if (isNaN(distance) && isNaN(age)) {
    alert("Il valore inserito non è un numero! Per favore inserisci correttamente i valori richiesti");
    location.reload();
}
//Calcolo prezzi biglietti
const km_price = 0.21;
const full_price_ticket = ((distance * km_price) * 100) / 100;
const ticket = full_price_ticket.toFixed(2)
console.log(`Il prezzo intero del biglietto è: ${ticket}€`);
// Calcolo sconti

let ticket_under = full_price_ticket - ((full_price_ticket * 20) / 100);
let ticket_d_under= ticket_under.toFixed(2)
console.log(`Il prezzo under 18 con del biglietto è: ${ticket_d_under}€`);


// Biglietto sconto over
let ticket_over = full_price_ticket - ((full_price_ticket * 40) / 100);
let ticket_d_over = ticket_under.toFixed(2)
console.log(`Il prezzo over 65 del biglietto è: ${ticket_d_over}€`);
// Output prezzo biglietto del treno
if (age >= 65) {
    alert(`Hai diritto ad uno sconto per over 65! Il prezzo del biglietto è di ${ticket_d_over}€`);
}
else if (age <= 18) {
    alert(`Hai diritto ad uno sconto per under 18! Il prezzo del biglietto è di ${ticket_d_under}€`);
}
else {
    alert(`Il prezzo del biglietto è di ${ticket}€`);
}

