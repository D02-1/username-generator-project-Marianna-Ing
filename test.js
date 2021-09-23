// Wir importieren unseren App
const usernameGenerator = require('./src/index.js');

// Wir führen die Funktion der App aus mit dem alias das wir vergeben haben
const username = usernameGenerator.createUserName(50000);

// Wir führen das Ergebnis aus
console.log(username);