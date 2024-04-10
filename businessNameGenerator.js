// Adjectives:
// Crazy
// Amazing
// Fire
// Shop Name:
// Engine
// Foods
// Garments
// Another Word:
// Bros
// Limited
// Hub
function genrateName() {
    let adj = ["crazy", "Amazing", "Fire"];
    let Sn = ["Engine", "Foods", "Garments"];
    let Lw = ["Bros", "Limited", "Hub"];

    let adjR = Math.round(Math.random() * 2);
    let SnR = Math.round(Math.random() * 2);
    let LwR = Math.round(Math.random() * 2);
    let name = adj[adjR] + " " + Sn[SnR] + " " + Lw[LwR];

    document.getElementById("BN").innerHTML=name;


}


console.log(name);
console.log(adjR);