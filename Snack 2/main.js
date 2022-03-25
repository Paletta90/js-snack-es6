// Variabile per il div
let container = document.getElementById('container');

let arrayClub = [
    {
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
for(let i = 0; i < arrayClub.length; i++){

    arrayClub[i].fallisubiti = numRandom1toX(200);
    arrayClub[i].puntifatti = numRandom1toX(100);

}

// Array che conterra i nuovi oggetti con nome e falli subiti
let newArray = [];

// Creo i nuovi oggetti
for(let y = 0; y < arrayClub.length; y++){

    let {nome, fallisubiti} = arrayClub[y];

    let newOne = {nome, fallisubiti};
    
    newArray.push(newOne);
}

console.log( newArray )


// Funzione che crea un num random da 0 a x
function numRandom1toX(x){

    let num;

    num = Math.floor( ( Math.random() * x ) + 1 );

    return num;

}