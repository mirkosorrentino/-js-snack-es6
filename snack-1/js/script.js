/**
 * [X] Creare un array
 * [X] All'interno dell'array creare 4 oggetti con due chiavi (nome e peso)
 * [] Creare una variabile che indica la bici con il peso minore
 * [X] Destrutturare i dati
 * [X] Trovare la il peso minore
 * [X] Stampare a schermo il nome e il peso della bici più leggera con template literal
 */

const bikesArray = [
    {
        bikeName: "Bianchi",
        bikeWeight: 10
    },
    {
        bikeName: "Rossi",
        bikeWeight: 5
    },
    {
        bikeName: "Verdi",
        bikeWeight: 25
    },
    {
        bikeName: "Neri",
        bikeWeight: 800
    }
]

let lightest = bikesArray[0];

bikesArray.forEach((element) => {
    if (element.bikeWeight < lightest.bikeWeight) {
        lightest = element;
    }
})
console.log(`La bici più leggera è ${lightest.bikeName} e pesa ${lightest.bikeWeight} kg`);

