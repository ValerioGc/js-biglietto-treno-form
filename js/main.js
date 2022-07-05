// Definisco variabili bottoni
const submit = document.getElementById('generate_ticket')
const refresh = document.getElementById('refresh_page')
// Event listner Submit 
submit.addEventListener("click", function () {
    document.getElementById("generate_ticket").innerHTML = "Rigenera";
    // Nome Passeggero
    let name_passenger = document.getElementById('nome').value;
    console.log(`L'utente si chiama ${name_passenger}`);
    // Distanza da percorrere
    let distance = document.getElementById('distanza').value;
    console.log(`L'utente deve percorrere ${distance}km`);
    // Fascia età Passeggero
    let age = document.getElementById('eta').value;
    console.log(`L'utente rientra nella categoria sconto ${age}`);
    //Calcolo prezzi biglietti
    const km_price = 0.21;
    let full_price_ticket = ((distance * km_price) * 100) / 100;
    let ticket = full_price_ticket.toFixed(2)
    console.log(`Il prezzo intero del biglietto è: ${ticket}€`);
    // Calcolo sconti
    let ticket_under = full_price_ticket - ((full_price_ticket * 20) / 100);
    let ticket_d_under = ticket_under.toFixed(2)
    console.log(`Il prezzo under 18 con del biglietto è: ${ticket_d_under}€`);
    // Biglietto sconto over
    let ticket_over = full_price_ticket - ((full_price_ticket * 40) / 100);
    let ticket_d_over = ticket_under.toFixed(2)
    console.log(`Il prezzo over 65 del biglietto è: ${ticket_d_over}€`);
});
// Event Listner Bottone Annulla
refresh.addEventListener('click', function () {
        console.log('Aggiorno Pagina')
        location.reload()
});

