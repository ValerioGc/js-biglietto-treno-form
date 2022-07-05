// Definisco variabili bottoni
const submit = document.getElementById('generate_ticket')
const refresh = document.getElementById('refresh_page')
// Event Listner Bottone Annulla
refresh.addEventListener('click', function () {
    console.log('Aggiorno Pagina')
    location.reload()
});
// Event listner Submit
submit.addEventListener("click", function () {
    console.clear()
    document.getElementById("generate_ticket").innerHTML = "Rigenera";
    // Nome Passeggero
    let name_passenger = document.getElementById('nome').value;
    if  (!isNaN(name_passenger)) {
        alert('Inserisci il tuo nome senza caratteri numerici')
        location.reload()
    }
    else {
        console.log(`L'utente si chiama ${name_passenger}`);
        // Distanza da percorrere
        let distance = document.getElementById('distanza').value;
        if ((isNaN(distance)) || (distance == "")) {
            alert('Inserisci solo caratteri numerici')
        }
        else {
            console.log(`L'utente deve percorrere ${distance}km`);
            // Fascia età Passeggero
            let age = document.getElementById('eta').value;
            if (age == "-") {
                alert('Seleziona la tua fascia di età')
            }
            else {
                console.log(`L'utente rientra nella categoria sconto ${age}`);
                //Calcolo prezzi biglietti
                const km_price = 0.21;
                let full_price_ticket = ((distance * km_price) * 100) / 100;
                let ticket = full_price_ticket.toFixed(2)
                console.log(`Il prezzo intero del biglietto è: ${ticket}€`);
                // Biglietto sconto under
                let ticket_under = full_price_ticket - ((full_price_ticket * 20) / 100);
                let ticket_d_under = ticket_under.toFixed(2)
                console.log(`Il prezzo under 18 con del biglietto è: ${ticket_d_under}€`);
                // Biglietto sconto over
                let ticket_over = full_price_ticket - ((full_price_ticket * 40) / 100);
                let ticket_d_over = ticket_over.toFixed(2)
                console.log(`Il prezzo over 65 del biglietto è: ${ticket_d_over}€`);
                // Aggiunta Informazioni Biglietto
                document.getElementById('nameP').innerHTML = name_passenger;
                document.getElementById('ride').innerHTML = Math.ceil(Math.random() * 19 + 1);
                document.getElementById('codeCP').innerHTML = Math.ceil(Math.random() * 10000 + 90000);
                document.getElementById('ticketN').innerHTML = 'Numero Biglietto:' + '' + Math.ceil(Math.random() * 1000 + 7000);
                // Output Prezzo biglietto
                if (age == "Under"){
                    document.getElementById('price-ticket').innerHTML = ticket_d_under + '€';
                    document.getElementById('offType').innerHTML = 'Biglietto Under 18';
                }
                else if (age == "Over") {
                    document.getElementById('price-ticket').innerHTML = ticket_d_over + '€';
                    document.getElementById('offType').innerHTML = 'Biglietto Over 65';
                }
                else {
                    document.getElementById('price-ticket').innerHTML = ticket +'€';
                    document.getElementById('offType').innerHTML = 'Biglietto Standard';
                }
                // Mostra Biglietto
                document.getElementById("ticket_generator").className = "show";
            }
        }
    }
});


