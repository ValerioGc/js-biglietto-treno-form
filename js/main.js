
let submit = document.getElementById('generate_ticket')

// Event listner Submit 
submit.addEventListener("click", function () {
    let name_passenger = document.getElementById('nome').value;
    console.log(`L'utente si chiama ${name_passenger}`);
    let distance = document.getElementById('distanza').value;
    console.log(`L'utente deve percorrere ${distance}km`);
    let age = document.getElementById('eta').value;
    console.log(`L'utente rientra nella categoria sconto ${age}`);
    document.getElementById("generate_ticket").innerHTML = "Rigenera";
});




