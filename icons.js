// --- ICONS & SCHALTERTYPEN KONFIGURATION ---
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
    
    // Einfache Icons ohne vordefinierte IOs
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

// --- HARDWARE KOMPONENTEN KONFIGURATION ---
const hardwareConfigList = [
    {
        id: "lox_nano_di_tree",
        name: "Loxone Nano DI Tree",
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"],
        io: [
            { id: "DI_1", label: "DI 1", type: "in" },
            { id: "DI_2", label: "DI 2", type: "in" },
            { id: "DI_3", label: "DI 3", type: "in" },
            { id: "DI_4", label: "DI 4", type: "in" },
            { id: "DI_5", label: "DI 5", type: "in" },
            { id: "DI_6", label: "DI 6", type: "in" }
        ]
    },
    {
        id: "lox_nano_2_relay",
        name: "Loxone Nano 2 Relay Tree",
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"],
        io: [
            { id: "I_1", label: "I1 (Eingang)", type: "in" },
            { id: "I_2", label: "I2 (Eingang)", type: "in" },
            { id: "I_3", label: "I3 (Eingang)", type: "in" },
            { id: "I_4", label: "I4 (Eingang)", type: "in" },
            { id: "I_5", label: "I5 (Eingang)", type: "in" },
            { id: "I_6", label: "I6 (Eingang)", type: "in" },
            { id: "O_1", label: "Relais 1", type: "out" },
            { id: "O_2", label: "Relais 2", type: "out" }
        ]
    },
    {
        id: "lox_touch_tree",
        name: "Loxone Touch Tree",
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Montagehöhe"],
        io: [
            { id: "T_1", label: "Taste 1 (Oben Links)", type: "in" },
            { id: "T_2", label: "Taste 2 (Unten Links)", type: "in" },
            { id: "T_3", label: "Taste 3 (Mitte)", type: "in" },
            { id: "T_4", label: "Taste 4 (Oben Rechts)", type: "in" },
            { id: "T_5", label: "Taste 5 (Unten Rechts)", type: "in" },
            { id: "TEMP", label: "Temperatur", type: "out" },
            { id: "HUM", label: "Feuchte", type: "out" }
        ]
    },
    {
        id: "feller_taster_universell",
        name: "Feller Universaltaster (Dumm)",
        fields: ["Artikelnummer", "Bezeichnung"],
        io: [
            { id: "KONTAKT_1", label: "Schliesser 1", type: "out" },
            { id: "KONTAKT_2", label: "Schliesser 2", type: "out" }
        ]
    }
];
