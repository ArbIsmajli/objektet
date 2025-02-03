//this e cakton emrin lopa jo arbi nese ja hek del si je arbi
// let emri = "arbi";
// let personi = {
//     emri: "lopa",
//     prezantohu: function () {
//         alert("si je" + this.emri);
//     },
//     gjejmoshen: function () {
//         let rezultati = 2025 - this.vitilindjes;
//         alert(rezultati)
//     }
// };
// personi.emri;
// personi.prezantohu();

// personi.gjejmoshen
// personi.vitilindjes = prompt("shkruani vitin e lindjes");
// personi.gjejmoshen()

let klasa = {
    nxenesit: ["arbLOPA", "juled", "kroni", "lira", "jara"],
    nrnxanesve: this.nxenesit.length,
    gjejnxenesinemesit: function() {
        let nxenesimesit = this.nxenesit.length / 2;
        alert("nxenesi ne mes eshte" + nxenesimesit)
    },
};