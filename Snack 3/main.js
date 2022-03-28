// Array di nomi
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
//Array contenente il nuovo array
let arrayForEach = [];
let arrayFilter = [];
// variabili min e max
let min, max;

// Inserisco i due numeri min e max e faccio validazioni
min = parseInt(prompt(`Inserisci il numero minore (tra ${0} - ${myArray.length - 1}): `));

if (isNaN(min) || ((min < 0) || (min >= myArray.length))) {

    alert("Inserisci numeri corretti")
    location.reload();

} else {
    max = parseInt(prompt(`Inserisci il numero maggiore (tra ${min} - ${myArray.length - 1} ): `))

    if (isNaN(max) || ((max < min) || max >= myArray.length)) {

        alert("Inserisci numeri corretti")
        location.reload();

    }
}

// Metodo con forEach
myArray.forEach(

    (element, index) => {

        // Se index è tra min e max aggiungo l'elemento
        if(index >= min && index <= max){
            arrayForEach.push(
                element
            )
        }

    }

);
console.log(arrayForEach);

// Metodo con Filter()
myArray.filter(
    (element, index) => {

        // Se index è tra min e max aggiungo l'elemento
        if(index >= min && index <= max){
            arrayFilter.push(
                element
            )
        }

    }
);
console.log(arrayFilter)