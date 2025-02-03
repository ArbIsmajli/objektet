let katrori = {
    emri: "katrori",
    gjatesia: 4,
    perimetri: () => {
        console.log(`perimetri i katrorit eshte ${4 * this.gjatesia}cm`);
    },
    syprina: function () {
        console.log(`syprina e katrorit eshte ${this.gjatesia * this.gjatesia}`);
    },
};

katrori.perimetri();
katrori.syprina();

let emri = "arbi";
let gjatesiaebrinjeve = 24;

// console.log("un e kam emrin______ dhe brinjet e mia jane te gjata ______")

console.log("un e kam emrin" + katrori.emri + "dhe brinjet e mia jan te gjata" + katrori.gjatesia); 
// ose
console.log(`un e kam emrin \n ${emri} dhe brinjet e mia jane te gjata ${gjatesiaebrinjeve}`);
// kjo \n i ndan ne rresht