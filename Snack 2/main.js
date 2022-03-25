// Variabile per il div
let container = document.getElementById('container');

let arrayClub = [{
        'nome': 'Juventus',
        'puntifatti': 0,
        'fallisubiti': 0
    },

    {
        'nome': 'Milan',
        'puntifatti': 0,
        'fallisubiti': 0
    },

    {
        'nome': 'Inter',
        'puntifatti': 0,
        'fallisubiti': 0
    },

    {
        'nome': 'Fiorentina',
        'puntifatti': 0,
        'fallisubiti': 0
    },

    {
        'nome': 'Sassuolo',
        'puntifatti': 0,
        'fallisubiti': 0
    },

    {
        'nome': 'Atalanta',
        'puntifatti': 0,
        'fallisubiti': 0
    }
];

// Creo numeri random per puntifatti e fallisubiti
container.innerHTML +=`<h1>Array Iniziale con numeri random assegnati`
for(let i = 0; i < arrayClub.length; i++){

    arrayClub[i].fallisubiti = numRandom1toX(200);
    arrayClub[i].puntifatti = numRandom1toX(100);

    let{nome, puntifatti, fallisubiti} = arrayClub[i];

    container.innerHTML +=`<div>Nome squadra: ${nome} Falli Subiti: ${fallisubiti} Punti: ${puntifatti}</div>`
}

container.innerHTML +=`<h2>Nuovo array</h2>`
// Array che conterra i nuovi oggetti con nome e falli subiti
let newArray = [];

// Creo i nuovi oggetti
for(let y = 0; y < arrayClub.length; y++){

    let {nome, fallisubiti} = arrayClub[y];

    newArray.push(
        {
            nome,
            fallisubiti
        }
    )
    
}

// Stampo i nuovi oggetti
for(let z = 0; z < arrayClub.length; z++){

    let {nome, fallisubiti} = newArray[z]

    container.innerHTML += `<div>Nome squadra:${nome} Falli Subiti:${fallisubiti}</div>`
    
}





// let newArray = [];

// for (let i = 0; i < arrayClub.length; i++) {

//     let {
//         puntifatti,
//         fallisubiti
//     } = arrayClub[i];

//     newArray.push({
//         ...arrayClub[i],
//         puntifatti: numRandom1toX(100),
//         fallisubiti:numRandom1toX(200)
//     })

// }
// console.log(newArray)
// Funzione che crea un num random da 0 a x
function numRandom1toX(x) {

    let num;

    num = Math.floor((Math.random() * x) + 1);

    return num;

}