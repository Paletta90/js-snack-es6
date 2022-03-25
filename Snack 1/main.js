// Variabile per il div
let container = document.getElementById('container');

// Array di oggetti bici
let arrayBike = [
    {
        'modello': 'Wilier 0 SLR',
        'peso': 6.5
    },
    {
        'modello': 'Trek Emonda 2020',
        'peso': 6.81
    },
    {
        'modello': 'Trek Emonda SLR',
        'peso': 4.65
    },
    {
        'modello': 'SAVA Phantom 2.0 700C',
        'peso': 8.1
    },
    {
        'modello': 'SuperSix EVOHI-Mod',
        'peso': 8
    }
];


// Mando in stampa tutti gli oggetti bici
for(let y = 0; y < arrayBike.length; y++){

    const {modello, peso} = arrayBike[y];
    container.innerHTML += `<h3>Bici numero ${y + 1}: Modello:${modello} Peso:${peso}</h3>`
}

// Variabile a cui assegnerò l'oggetto bici più leggero
let lighterBike;
// Variabile per controllare il peso delle bici. Assegno un peso di una qualsiasi bici
let minWeight = arrayBike[0].peso;

for(let i = 0; i < arrayBike.length; i++){

    // Destructuring
    const {modello, peso} = arrayBike[i];

    // Condizione if che mi permette di trovare la bici con il peso minore
    if(minWeight >= peso){

        lighterBike = arrayBike[i];
        minWeight = peso

    }
}

// Destructuring
let {modello, peso} = lighterBike;

container.innerHTML += `<div>La bici più leggera è il Modello: ${modello} Peso: ${peso}</div> `