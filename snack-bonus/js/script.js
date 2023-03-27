const array = ["Giovanni", "Aldo", "Giacomo", "Mirko", "Filippo", "Beatrice"];
const min = 2;
const max = 5;
const newArray = getNewArray(array, min, max);
console.log(newArray);

const result = [];
function getNewArray(arrayToCheck, min, max) {
    for (let i = 0; i < array.length; i++) {
        if(i > min && i < max) {
            result.push(arraytoCheck[i]); 
        }
        
    }
}