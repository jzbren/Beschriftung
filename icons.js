// --- ICONS KONFIGURATION ---
const iconConfigList = [
    "", // Leere Option
    "Abwesend.svg",
    "Access-Point-Unifi.svg",
    "Access-Point.svg",
    "Akku-Laden.svg",
    "Akku.svg",
    "Auffuellen.svg",
    "Auto.svg",
    "Baum.svg",
    "Bewegung.svg",
    "Bluetooth-Aus.svg",
    "Bluetooth-Ein.svg",
    "CSV-Datei.svg",
    "Deckenleuchte.svg",
    "Download.svg",
    "Drucken.svg",
    "Drucker-Aus.svg",
    "Dublizieren.svg",
    "Einstellungen.svg",
    "Entrigeln.svg",
    "Fan-Aus.svg",
    "Fan-Langsamer.svg",
    "Fan-Schneller.svg",
    "Fan-Stufe-1.svg",
    "Fan-Stufe-2.svg",
    "Fan-Stufe-3.svg",
    "Farbpalette-Aus.svg",
    "Farbpalette.svg",
    "Farbwahl.svg",
    "Fenster-Auf.svg",
    "Fenster-Zu.svg",
    "Fierwall-Schild.svg",
    "Fierwall.svg",
    "Fisch.svg",
    "Flamme.svg",
    "Foerwaertsspuelen-Fein-Doppelt.svg"
];

// --- HARDWARE KOMPONENTEN KONFIGURATION ---
// Hier definierst du, welche Geräte im System verfügbar sind, 
// welche Meta-Felder (fields) sie haben und welche Ein-/Ausgänge (io) existieren.
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
