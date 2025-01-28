let variabla1 = "var 1";
let vargu = ["a", "b", "c"];
function testfunction() {
    let variabla2 = "var 2";
    if(4 < 2) {
        let variabla3 = "var 3";
        console.log(variabla1)
        console.log(variabla2)
        console.log(variabla3)
    }
    console.log(variabla1);
    console.log(variabla2);
    console.log(variabla3)
}
testfunction();

console.log(variabla1);
console.log(variabla2);
console.log(variabla3)

// key; value
let personi = {
    emer: "arb",
    mbiemri: "ismajli",
    ngjyrasyve: " e zez",
    mosha: 23,
    ngjyratepreferume: ["e zez", "e bardh"],
    qeni: {
        emer:"arbi",
        mosha: 3,
    },
    fol: () => {
        console.log("un po foli");
    }
};
console.log(personi.qeni.emer);
personi.fol();
personi.shkolla = "dicka";
personi.x = "x";
console.log("profesioni" in personi);
console.log("emer" in personi);

delete personi.mbiemri;
console.log(personi.emer);
console.log(personi["emer"]);

personi.emer = "arbi";
console.log(personi.emer);