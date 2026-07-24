// --- ICONS & SCHALTERTYPEN KONFIGURATION ---
const iconConfigList = [
    {
        file: "",
        label: "--- Leerplatz ---",
        group: "Allgemein",
        io: []
    },
    {
        file: "Drehschalter-Hand-Auto.png",
        label: "Drehschalter Hand-Auto",
        group: "Schalter & Taster",
        io: [
            { id: "TA_HAND_AUTO", label: "Hand/Auto Schalter", type: "in" }
        ]
    },
    {
        file: "Raumthermostaat.png",
        label: "Raumthermostat",
        group: "Thermostate & Sensoren",
        io: [
            { id: "TEMP_IN", label: "Temperatur Ist", type: "out" },
            { id: "HEIZ_OUT", label: "Heizung Ventil", type: "out" }
        ]
    },
    {
        file: "SCH3.png",
        label: "SCH 3 (Schalter 1-fach)",
        group: "Licht & Relais",
        io: [
            { id: "TA_1", label: "Taster / Schalter", type: "in" },
            { id: "LI_1", label: "Licht / Relais", type: "out" }
        ]
    },
    {
        file: "SCH3-3.png",
        label: "SCH 3-3 (Schalter 2-fach)",
        group: "Licht & Relais",
        io: [
            { id: "TA_1", label: "Taster Oben", type: "in" },
            { id: "LI_1", label: "Licht Oben", type: "out" },
            { id: "TA_2", label: "Taster Unten", type: "in" },
            { id: "LI_2", label: "Licht Unten", type: "out" }
        ]
    },
    {
        file: "SCH3-3-T13.png",
        label: "SCH 3-3 + T13 (Kombi Schalter & Steckdose)",
        group: "Licht & Relais",
        io: [
            { id: "TA_1", label: "Taster / Schalter", type: "in" },
            { id: "LI_1", label: "Licht / Relais", type: "out" },
            { id: "SE_1", label: "Steckdose Messung", type: "out" }
        ]
    },
    {
        file: "SCH3-Bel.png",
        label: "SCH 3 mit Beleuchtung",
        group: "Licht & Relais",
        io: [
            { id: "TA_1", label: "Taster", type: "in" },
            { id: "LI_1", label: "Licht / Relais", type: "out" },
            { id: "LED_CTRL", label: "Orientierungslicht", type: "out" }
        ]
    },
    {
        file: "SCH3T13.png",
        label: "SCH 3 + T13 (Kombi Schalter/Steckdose)",
        group: "Licht & Relais",
        io: [
            { id: "TA_1", label: "Taster", type: "in" },
            { id: "LI_1", label: "Licht / Relais", type: "out" }
        ]
    },
    {
        file: "Sonnerie.png",
        label: "Sonnerie / Klingel",
        group: "Signalisierung",
        io: [
            { id: "TA_KLINGEL", label: "Klingeltaster", type: "in" },
            { id: "GONG_OUT", label: "Gong / Signal", type: "out" }
        ]
    },
    {
        file: "Storenschalter-1-Kanal.png",
        label: "Storenschalter 1-Kanal",
        group: "Storen & Jalousien",
        io: [
            { id: "TA_AUF", label: "Taster Auf", type: "in" },
            { id: "TA_AB", label: "Taster Ab", type: "in" },
            { id: "MO_AUF", label: "Motor Auf", type: "out" },
            { id: "MO_AB", label: "Motor Ab", type: "out" }
        ]
    },
    {
        file: "Storenschalter-2-Kanal.png",
        label: "Storenschalter 2-Kanal",
        group: "Storen & Jalousien",
        io: [
            { id: "TA_K1_AUF", label: "K1 Auf", type: "in" },
            { id: "TA_K1_AB", label: "K1 Ab", type: "in" },
            { id: "TA_K2_AUF", label: "K2 Auf", type: "in" },
            { id: "TA_K2_AB", label: "K2 Ab", type: "in" },
            { id: "MO_K1", label: "Motor K1", type: "out" },
            { id: "MO_K2", label: "Motor K2", type: "out" }
        ]
    },
    {
        file: "T13.png",
        label: "T13 Steckdose",
        group: "Steckdosen",
        io: [
            { id: "POWER_MON", label: "Energiemessung", type: "out" }
        ]
    },
    {
        file: "Universaltaster-1x2.png",
        label: "Universaltaster 1x2",
        group: "Schalter & Taster",
        io: [
            { id: "TA_1", label: "Taste Links", type: "in" },
            { id: "TA_2", label: "Taste Rechts", type: "in" }
        ]
    },
    {
        file: "Universaltaster-3-2.png",
        label: "Universaltaster 3-2",
        group: "Schalter & Taster",
        io: [
            { id: "TA_1", label: "Taste Reihe 1", type: "in" },
            { id: "TA_2", label: "Taste Reihe 2", type: "in" },
            { id: "TA_3", label: "Taste Reihe 3", type: "in" }
        ]
    },
    {
        file: "Universaltaster-2x2.png",
        label: "Universaltaster 2x2",
        group: "Schalter & Taster",
        io: [
            { id: "TA_1", label: "Oben Links", type: "in" },
            { id: "TA_2", label: "Oben Rechts", type: "in" },
            { id: "TA_3", label: "Unten Links", type: "in" },
            { id: "TA_4", label: "Unten Rechts", type: "in" }
        ]
    }
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
