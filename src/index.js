const fs = require('fs'); // FileSystem, zum lesen das Dateisystem
const path = require('path'); // Path, zum arbeiten mit Dateipfaden

// Benutzernamen Generator

// Beispiel für Benutzer: ShinySunFlower55555 oder FlyingAutomobil34567 oder BeutifulCheesecake44567

// Was benötigen wir?
// - Eine Funktion um die Werte aus der JSON Datei zu lesen
/** 
 * @function getWords
 * @description Reads words from json file
 * @returns {object}
 */
function getWords() {

    // Wir lesen eine json Datei, die Worte enthält, die wir nutzen wollen
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    // Wir geben die Worte zurück
    return json;
}

// - Eine Funktion un die zufällige Nummer hinter dem Naamen zu generieren
/**
 * @function createRandomNumber
 * @description Create a random number according to a minimal and maximal value
 * @param {number} minNumber 
 * @param {number} maxNumber 
 * @returns {number}
 */
function createRandomNumber(minNumber, maxNumber) {
    // Wir erschaffen eine Zufahlzahl aus einer minimalen und einer maximalen Zahl
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    // random=0.5 * 50000 - 10000 = 15000 + 10000 = 25000

    // Wir geben die zufällige Nummer zurück
    return num;
}


// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase)
// - Eine Funktion mit der wir den Benutzernamen generieren und auf die Ergebnisse der anderen Funktionen zugreifen
// - Ein export, um die Applikation in einer anderen Datei zu nutzen