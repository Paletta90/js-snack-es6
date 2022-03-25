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

for(let i = 0; i < arrayClub.length; i++){

    let {puntifatti, fallisubiti} = arrayClub[i];
    
    console.log(arrayClub[i])
}

console.log(arrayClub)
// Funzione che crea un num random da 0 a x
function numRandom1toX(x){

    let num;

    num = Math.floor( ( Math.random() * x ) + 1 );

    return num;

}