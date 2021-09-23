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
// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase)
// - Eine Funktion mit der wir den Benutzernamen generieren und auf die Ergebnisse der anderen Funktionen zugreifen
// - Ein export, um die Applikation in einer anderen Datei zu nutzen