// Array di oggetti student
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

// Array di stringhe con nomi studenti in masiuscolo
let nameStudents = [];
// Array di studenti che hanno grades > 70
let bestStudents = [];
// Array di studenti che hanno grades > 70 e id > 120
let bestStudentsID = [];

// Pusho tutti i nomi in maiuscolo in un array
nameStudents = students.map(
    (element) => String(element.name.toUpperCase()) 
)
console.log(nameStudents)

// Pusho tutti gli studenti con voto maggiore di 70
bestStudents = students.filter( (element) => element.grades > 70

    // (element) => {

    //     if(element.grades > 70){

    //         bestStudents.push(element)

    //     }
    // }

);
console.log(bestStudents)

// Pusho tutti gli studenti con voto maggiore di 70 e id > 120
bestStudentsID = students.filter( (element) => element.grades > 70 && element.id > 120

    // (element) => {

    //     if(element.grades > 70 && element.id > 120){

    //         bestStudentsID.push(element)

    //     }
    // }

)
console.log(bestStudentsID)