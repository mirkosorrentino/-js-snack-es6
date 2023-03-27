/**
 * [] Creare un array
 * [] All'interno degli array inserire oggetti rappresentanti delle sqaudre di calcio
 * [] Le proprietà di tali oggetti dovranno essere nome, punti fatti, falli subiti
 * [] La proprietà "nome" sarà da inserire da prompt, le altre caratteristiche sono da impostare a 0
 * [] Generare numeri random al posto degli 0
 * Usando la destrutturazione, creare un nuovo array in cui sono contenuti solo nome e falli subiti e stampare tutto in console
 */

const teamsArray = [
    {
        teamName: "Inter",
        points: 0,
        fouls: 0,
    },
    {
        teamName: "Milan",
        points: 0,
        fouls: 0,
    },
    {
        teamName: "Napoli",
        points: 0,
        fouls: 0,
    },
    {
        teamName: "Benfica",
        points: 0,
        fouls: 0,
    },
]

teamsArray.forEach(element => {
    element.points = getRndInteger(0, 40);
    element.fouls = getRndInteger(0, 100);
});

const newTeams = teamsArray.map((teamName, fouls) => {
    return {
        teamName,
        fouls
    }
})
console.log(newTeams);

// FUNCTIONS
function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

