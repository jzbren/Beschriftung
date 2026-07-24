// --- ICONS & SCHALTERTYPEN KONFIGURATION ---
// Hier definierst du deine SVG-Icons und welche Ein- und Ausgänge (io) 
// in der Eingabemaske rechts erscheinen sollen, wenn dieses Icon gewählt wird.
// type: "in" (Eingang, z.B. Taster), type: "out" (Ausgang, z.B. Lampe/Store)

const iconConfigList = [
    {
        file: "",
        label: "--- Leerplatz ---",
        io: []
    },
    {
        file: "Deckenleuchte.svg",
        label: "Deckenleuchte",
        io: [
            { id: "TA_EIN", label: "Taster (TA)", type: "in" },
            { id: "LI_AUS", label: "Licht (Relais)", type: "out" }
        ]
    },
    {
        file: "Fenster-Auf.svg",
        label: "Storen / Fenster Auf",
        io: [
            { id: "TA_AUF", label: "Taster Auf", type: "in" },
            { id: "MO_AUF", label: "Motor Auf", type: "out" }
        ]
    },
    {
        file: "Fenster-Zu.svg",
        label: "Storen / Fenster Zu",
        io: [
            { id: "TA_AB", label: "Taster Ab", type: "in" },
            { id: "MO_AB", label: "Motor Ab", type: "out" }
        ]
    },
    {
        file: "Abwesend.svg",
        label: "Abwesend (Zentral-Aus)",
        io: [
            { id: "TA_ZENTRAL", label: "Taster", type: "in" }
        ]
    },
    {
        file: "Fan-Stufe-1.svg",
        label: "Lüftung (Allgemein)",
        io: [
            { id: "TA_LUEFTUNG", label: "Taster Fan", type: "in" },
            { id: "MO_LUEFTUNG", label: "Lüfter Motor", type: "out" }
        ]
    },
    
    // Einfache Icons ohne vordefinierte IOs (als Fallback/Erweiterung)
    { file: "Access-Point-Unifi.svg", label: "Access Point Unifi", io: [] },
    { file: "Access-Point.svg", label: "Access Point", io: [] },
    { file: "Akku-Laden.svg", label: "Akku Laden", io: [] },
    { file: "Akku.svg", label: "Akku", io: [] },
    { file: "Auffuellen.svg", label: "Auffüllen", io: [] },
    { file: "Auto.svg", label: "Auto", io: [] },
    { file: "Baum.svg", label: "Baum / Garten", io: [] },
    { file: "Bewegung.svg", label: "Bewegungsmelder", io: [{ id: "BWM_IN", label: "Bewegung", type: "in" }] },
    { file: "Bluetooth-Aus.svg", label: "Bluetooth Aus", io: [] },
    { file: "Bluetooth-Ein.svg", label: "Bluetooth Ein", io: [] },
    { file: "CSV-Datei.svg", label: "CSV Datei", io: [] },
    { file: "Download.svg", label: "Download", io: [] },
    { file: "Drucken.svg", label: "Drucken", io: [] },
    { file: "Drucker-Aus.svg", label: "Drucker Aus", io: [] },
    { file: "Dublizieren.svg", label: "Duplizieren", io: [] },
    { file: "Einstellungen.svg", label: "Einstellungen", io: [] },
    { file: "Entrigeln.svg", label: "Entriegeln", io: [] },
    { file: "Fan-Aus.svg", label: "Fan Aus", io: [] },
    { file: "Fan-Langsamer.svg", label: "Fan Langsamer", io: [] },
    { file: "Fan-Schneller.svg", label: "Fan Schneller", io: [] },
    { file: "Fan-Stufe-2.svg", label: "Fan Stufe 2", io: [] },
    { file: "Fan-Stufe-3.svg", label: "Fan Stufe 3", io: [] },
    { file: "Farbpalette-Aus.svg", label: "Farbpalette Aus", io: [] },
    { file: "Farbpalette.svg", label: "Farbpalette", io: [] },
    { file: "Farbwahl.svg", label: "Farbwahl", io: [] },
    { file: "Fierwall-Schild.svg", label: "Firewall Schild", io: [] },
    { file: "Fierwall.svg", label: "Firewall", io: [] },
    { file: "Fisch.svg", label: "Fisch (Aquarium)", io: [] },
    { file: "Flamme.svg", label: "Heizung / Flamme", io: [{ id: "TEMP_OUT", label: "Ventil", type: "out" }] },
    { file: "Foerwaertsspuelen-Fein-Doppelt.svg", label: "Vorwärts", io: [] }
];
