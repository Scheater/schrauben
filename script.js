// Funktion zur Berechnung der Teileanzahl
function aktualisiereBerechnung() {
    // Werte aus den Eingabefeldern abrufen
    const teilAnzahl = parseInt(document.getElementById('teilanzahl').value);
    const teilGewicht = parseFloat(document.getElementById('teilgewicht').value);
    const gesamtGewicht = parseFloat(document.getElementById('gesamtgewicht').value);

    // Referenz auf den Ergebnisbereich
    const ergebnisElement = document.getElementById('ergebnis');

    // Validierung der Eingaben
    if (isNaN(teilGewicht) || teilGewicht <= 0 || isNaN(gesamtGewicht) || gesamtGewicht <= 0) {
        ergebnisElement.textContent = "Bitte gib gültige Werte ein.";
        ergebnisElement.style.backgroundColor = "#e74c3c"; // Fehler rot
        return;
    }

    // Gewicht pro Teil berechnen
    const gewichtProTeil = teilGewicht / teilAnzahl;

    // Anzahl der Teile berechnen
    const anzahlTeile = Math.floor(gesamtGewicht / gewichtProTeil);

    // Ergebnis anzeigen
    ergebnisElement.textContent = `Das Gesamtgewicht entspricht etwa ${anzahlTeile} Teilen.`;
    ergebnisElement.style.backgroundColor = "#2980b9"; // Standardfarbe Blau
}
