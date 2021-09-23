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
/**
 * @function capitalizeString
 * @description Takes the first letter of a string and changes it to UpperCase, then returns string
 * @param {string} word 
 * @returns {string}
 */
function capitalizeString(word) {
    // Prüfe ob ein Wort vorhanden ist
    if (word === undefined || word.length === 0 || !isNaN(word)) {
        return 'Default'
    }
    // Wir nehmen den ersten Buchstaben von unserem String, und ändern ihn auf UpperCase
    const wordStart = word.charAt(0).toUpperCase();

    // Wir nehmen den Rest des Strings und ändern ihn auf LowerCase
    const wordRest = word.substring(1).toLowerCase();

    // Wir geben das fertige String zurück
    return wordStart + wordRest;
}

// - Eine Funktion mit der wir den Benutzernamen generieren und auf die Ergebnisse der anderen Funktionen zugreifen
/**
 * @function createRandomUserName
 * @description Creates a random username
 * @param {number} maxNumber 
 * @returns {string}
 */
function createRandomUserName(maxNumber = 50000) {

    // Wir holen uns die Wörter
    const words = getWords();

    // Wir holen uns aus der Wortliste die Adjektive
    const adj = words.adjs[Math.floor(Math.random() * (words.adjs.length - 1))];

    // Wir holen uns aus der Wortliste die Nomen
    const noun = words.nouns[Math.floor(Math.random() * (words.nouns.length - 1))];

    // Wir holen uns unsere Zufallszahl
    const randomNumber = createRandomNumber(10000, maxNumber);

    const finalUserName = `${capitalizeString(adj)}${capitalizeString(noun)}${maxNumber!==0 ? randomNumber:''}`;
    return randomNumber;
}

// - Ein export, um die Applikation in einer anderen Datei zu nutzen