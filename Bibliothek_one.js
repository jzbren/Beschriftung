// Globale System-Konfiguration für maximale Flexibilität
const SYSTEM_CONFIG = {
    // Gewerke / Kategorien für Ausgänge und Eingänge
    categories: [
        "Licht / Beleuchtung",
        "Beschattung / Storen",
        "Heizung / Klima",
        "Lüftung",
        "Multimedia / Audio",
        "Sicherheit",
        "System / Netzwerk",
        "Allgemein"
    ],
    // Definition aller aktuellen und zukünftigen Bus-Technologien
    busTypes: {
        "tree": { label: "Tree", icon: "🌳", hasSubDevices: false },
        "air": { label: "Air", icon: "📻", hasSubDevices: false },
        "link": { label: "Loxone Link", icon: "🔗", hasSubDevices: false },
        "dali": { label: "DALI", icon: "💡", hasSubDevices: true, defaultLimit: 64, subDeviceLabel: "Leuchte/EVG" },
        "modbus": { label: "Modbus RTU", icon: "🔌", hasSubDevices: true, defaultLimit: 32, subDeviceLabel: "Modbus-Gerät" },
        "1wire": { label: "1-Wire", icon: "🌡️", hasSubDevices: true, defaultLimit: 20, subDeviceLabel: "1-Wire Sensor" }
        // Beispiel Zukunft: "matter": { label: "Matter", icon: "🌐", hasSubDevices: true, defaultLimit: 100, subDeviceLabel: "Node" }
    }
};

const iconConfigList = [
    { file: "", label: "--- Leerplatz ---", group: "Allgemein", io: [] },
    { 
        file: "Touch-Tree.png", 
        label: "Touch-Tree",
        fields: ["Bemerkung", "Tree Ast"],
        group: "Schalter & Taster", 
        io: [
            { id: "TA_1", label: "Punkt 1 (Oben Links)", type: "in" },
            { id: "TA_2", label: "Punkt 2 (Oben Rechts)", type: "in" },
            { id: "TA_3", label: "Punkt 3 (Unten Links)", type: "in" },
            { id: "TA_4", label: "Punkt 4 (Unten Rechts)", type: "in" },
            { id: "TA_CLICK", label: "Fläche (Zentraler Klick)", type: "in" },
            { id: "TEMP", label: "Temperatur", type: "out" },
            { id: "LUFTFEUCHTIGKEIT", label: "Luftfeuchtigkeit", type: "out" }
        ] 
    },
    { 
        file: "Touch-Tree.png", 
        label: "Touch-Tree-CO2",
        fields: ["Bemerkung", "Tree Ast"],
        group: "Schalter & Taster", 
        io: [
            { id: "TA_1", label: "Punkt 1 (Oben Links)", type: "in" },
            { id: "TA_2", label: "Punkt 2 (Oben Rechts)", type: "in" },
            { id: "TA_3", label: "Punkt 3 (Unten Links)", type: "in" },
            { id: "TA_4", label: "Punkt 4 (Unten Rechts)", type: "in" },
            { id: "TA_CLICK", label: "Fläche (Zentraler Klick)", type: "in" },
            { id: "TEMP", label: "Temperatur", type: "out" },
            { id: "LUFTFEUCHTIGKEIT", label: "Luftfeuchtigkeit", type: "out" },
            { id: "CO_2", label: "CO 2", type: "out" }
        ] 
    },
    { 
        file: "Loxone-Display.jpg", 
        label: "Touch-Display",
        fields: ["Bemerkung", "Tree Ast"],
        group: "Schalter & Taster",
        io: [
            { id: "DISPLAY", label: "Display", type: "in" },
        ] 
    },
    { 
        file: "Drehschalter-Hand-Auto.png", 
        label: "Drehschalter Hand-Auto",
        fields: ["Bemerkung"],
        group: "Schalter & Taster", 
        io: [
            { id: "TA_HAND", label: "Hand", type: "in" },
            { id: "TA_AUTO", label: "AUTO", type: "in" }
        ] 
    },
    {
        file: "Raumthermostaat.png",
        label: "Raumthermostat",
        group: "Thermostate & Sensoren",
        fields: ["Bemerkung"],
        io: [
            { id: "COOL_OUT", label: "Kühlen", type: "out" },
            { id: "HEIZ_OUT", label: "Heizen", type: "out" }
        ]
    },
    { 
        file: "SCH3.png", 
        label: "SCH 3 (Schalter 1-fach)", 
        fields: ["Bemerkung"],
        group: "Licht & Relais", 
        io: [
            { id: "TA_1", label: "Taster Schliesser", type: "in" },
            { id: "TA_2", label: "Taster Öffner", type: "in" }
        ] 
    },
    { 
        file: "SCH3-3.png", 
        label: "SCH 3-3 (Schalter 2-fach)",
        fields: ["Bemerkung"],
        group: "Licht & Relais", 
        io: [
            { id: "TA_1_1", label: "Taster 1 Schliesser", type: "in" },
            { id: "TA_1_2", label: "Taster 2 Öffner", type: "in" },
            { id: "TA_2_1", label: "Taster 1 Schliesser", type: "in" },
            { id: "TA_2_2", label: "Taster 2 Öffner", type: "in" }
        ] 
    },
    { 
        file: "SCH3-T13.png", 
        label: "SCH 3 + T13 (Kombi)",
        fields: ["Bemerkung"],
        group: "Licht & Relais", 
        io: [
            { id: "TA_1_1", label: "Taster 1 Schliesser", type: "in" },
            { id: "TA_1_2", label: "Taster 2 Öffner", type: "in" },
            { id: "TA_2_2", label: "Steckdose", type: "out" }
        ] 
    },
    { 
        file: "SCH-3-3-T13.png", 
        label: "SCH 3-3 + T13 (Kombi)",
        fields: ["Bemerkung"],
        group: "Licht & Relais", 
        io: [
            { id: "TA_1_1", label: "Taster 1 Schliesser", type: "in" },
            { id: "TA_1_2", label: "Taster 2 Öffner", type: "in" },
            { id: "TA_2_1", label: "Taster 1 Schliesser", type: "in" },
            { id: "TA_2_2", label: "Taster 2 Öffner", type: "in" },
            { id: "TA_2_2", label: "Steckdose", type: "out" }
        ] 
    },
    { 
        file: "SCH3-Bel.png", 
        label: "SCH 3 Bel.", 
        fields: ["Bemerkung"],
        group: "Licht & Relais", 
        io: [
            { id: "TA_1", label: "Taster Schliesser", type: "in" },
            { id: "TA_2", label: "Taster Öffner", type: "in" },
            { id: "LED_CTRL", label: "LED", type: "out" }
        ] 
    },
    { 
        file: "Sonnerie.png", 
        label: "Sonnerie / Klingel",
        fields: ["Bemerkung"],
        group: "Signalisierung", 
        io: [
            { id: "TA_KLINGEL", label: "Taster", type: "in" }
        ] 
    },
    { 
        file: "Storenschalter-1-Kanal.png", 
        label: "Storenschalter 1-Kanal",
        fields: ["Bemerkung"],
        group: "Storen & Jalousien", 
        io: [
            { id: "TA_AUF", label: "K1 Auf", type: "in" }, 
            { id: "TA_AB", label: "K1 Ab", type: "in" }
        ] 
    },
    { 
        file: "Storenschalter-2-Kanal.png", 
        label: "Storenschalter 2-Kanal",
        fields: ["Bemerkung"],
        group: "Storen & Jalousien", 
        io: [
            { id: "TA_K1_AUF", label: "K1 Auf", type: "in" }, 
            { id: "TA_K1_AB", label: "K1 Ab", type: "in" }, 
            { id: "TA_K2_AUF", label: "K2 Auf", type: "in" }, 
            { id: "TA_K2_AB", label: "K2 Ab", type: "in" }
        ] 
    },
    { 
        file: "T13.png", 
        label: "T13 Steckdose",
        fields: ["Bemerkung"],
        group: "Steckdosen", 
        io: [
            { id: "T13_STD", label: "Steckdose", type: "out" }
        ] 
    },
    { 
        file: "Universaltaster-1x2.png", 
        label: "Universaltaster 1x2",
        fields: ["Bemerkung"],
        group: "Schalter & Taster", 
        io: [
            { id: "TA_1", label: "Taste Links", type: "in" }, 
            { id: "TA_2", label: "Taste Rechts", type: "in" }
        ] 
    },
    { 
        file: "Universaltaster-2x2.png", 
        label: "Universaltaster 2x2",
        fields: ["Bemerkung"],
        group: "Schalter & Taster", 
        io: [
            { id: "TA_1", label: "Oben Links", type: "in" }, 
            { id: "TA_2", label: "Oben Rechts", type: "in" }, 
            { id: "TA_3", label: "Unten Links", type: "in" }, 
            { id: "TA_4", label: "Unten Rechts", type: "in" }
        ] 
    },
    { 
        file: "Universaltaster-3x2.png", 
        label: "Universaltaster 3x2",
        fields: ["Bemerkung"],
        group: "Schalter & Taster", 
        io: [
            { id: "TA_1", label: "Oben Links", type: "in" }, 
            { id: "TA_2", label: "Oben Rechts", type: "in" }, 
            { id: "TA_3", label: "Mitte Links", type: "in" }, 
            { id: "TA_4", label: "Mitte Rechts", type: "in" },
            { id: "TA_5", label: "Unten Links", type: "in" }, 
            { id: "TA_6", label: "Unten Rechts", type: "in" }
        ] 
    }
];

const hardwareConfigList = [
    // --- Core Server ---
    { 
        id: "lox_miniserver", 
        name: "Miniserver Gen. 2", 
        image: "Miniserver-Gen-2.jpg", 
        power: 2.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse", "Bemerkung"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" },
            { id: "DI_2", label: "DI 2", type: "in" }, 
            { id: "DI_3", label: "DI 3", type: "in" }, 
            { id: "DI_4", label: "DI 4", type: "in" }, 
            { id: "DI_5", label: "DI 5", type: "in" },
            { id: "DI_6", label: "DI 6", type: "in" }, 
            { id: "DI_7", label: "DI 7", type: "in" }, 
            { id: "DI_8", label: "DI 8", type: "in" }, 
            { id: "AI_1", label: "AI 1 (Analog)", type: "in" },
            { id: "AI_2", label: "AI 2 (Analog)", type: "in" },
            { id: "AI_3", label: "AI 3 (Analog)", type: "in" },
            { id: "AI_4", label: "AI 4 (Analog)", type: "in" },
            { id: "O_1", label: "Relais 1", type: "out" },
            { id: "O_2", label: "Relais 2", type: "out" }, 
            { id: "O_3", label: "Relais 3", type: "out" }, 
            { id: "O_4", label: "Relais 4", type: "out" }, 
            { id: "O_5", label: "Relais 5", type: "out" },
            { id: "O_6", label: "Relais 6", type: "out" }, 
            { id: "O_7", label: "Relais 7", type: "out" }, 
            { id: "O_8", label: "Relais 8", type: "out" }, 
            { id: "TREE_1", label: "Tree Ast 1", type: "bus", busType: "tree" }, 
            { id: "LINK_1", label: "Loxone Link", type: "bus", busType: "link" }
        ] 
    },
    { 
        id: "lox_miniserver_go", 
        name: "Miniserver Go", 
        image: "Miniserver-Go.jpg", 
        power: 2.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse", "Bemerkung"], 
        io: [
            { id: "AIR_BASE", label: "Air Geräte (Max 128)", type: "bus", busType: "air" }, 
            { id: "LINK_1", label: "Loxone Link", type: "bus", busType: "link" }
        ] 
    },
    { 
        id: "lox_miniserver_compact", 
        name: "Miniserver Compact", 
        image: "Miniserver-Compact.jpg", 
        power: 2.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse", "Bemerkung"], 
        profiles: [
            
            {
                id: "tree_turbo",
                label: "Tree Turbo (Standard)",
                io: [
                    { id: "DI_1", label: "DI 1", type: "in" },
                    { id: "DI_2", label: "DI 2", type: "in" }, 
                    { id: "DI_3", label: "DI 3", type: "in" }, 
                    { id: "DI_4", label: "DI 4", type: "in" }, 
                    { id: "O_1", label: "Relais 1", type: "out" },
                    { id: "O_2", label: "Relais 2", type: "out" }, 
                    { id: "TREE_1", label: "Tree Ast Links", type: "bus", busType: "tree" }, 
                    { id: "TREE_TURBO", label: "Tree Turbo", type: "bus", busType: "tree" }, 
                    { id: "AIR_BASE", label: "Air Geräte", type: "bus", busType: "air" },
                    { id: "LINK_1", label: "Loxone Link", type: "bus", busType: "link" }
                ]
            },
            {
                id: "tree_standard",
                label: "2x Tree Ast",
                io: [
                    { id: "DI_1", label: "DI 1", type: "in" },
                    { id: "DI_2", label: "DI 2", type: "in" }, 
                    { id: "DI_3", label: "DI 3", type: "in" }, 
                    { id: "DI_4", label: "DI 4", type: "in" }, 
                    { id: "O_1", label: "Relais 1", type: "out" },
                    { id: "O_2", label: "Relais 2", type: "out" }, 
                    { id: "TREE_1", label: "Tree Ast Links", type: "bus", busType: "tree" }, 
                    { id: "TREE_2", label: "Tree Ast Rechts", type: "bus", busType: "tree" }, 
                    { id: "AIR_BASE", label: "Air Geräte", type: "bus", busType: "air" },
                    { id: "LINK_1", label: "Loxone Link", type: "bus", busType: "link" }
                ]
            }
        ] 
    },
    { 
        id: "lox_audioserver", 
        name: "Audioserver", 
        image: "Audioserver.jpg", 
        power: 5.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse", "Bemerkung"], 
        profiles: [
            {
                id: "stereo_12_34",
                label: "2x Stereo-Paare (Stereo 1/2 & 3/4)",
                io: [
                    { id: "TREE_TURBO", label: "Tree Turbo", type: "bus", busType: "tree" }, 
                    { id: "SPK_1_2", label: "Lautsprecher 1 & 2 (Stereo 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_3_4", label: "Lautsprecher 3 & 4 (Stereo 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPDIF_OUT", label: "SPDIF out digital (48kHz)", type: "out" },
                    { id: "LINE_OUT", label: "Line-out analog (44.1kHz)", type: "out" }
                ]
            },
            {
                id: "stereo_12_34",
                label: "2x Stereo-Paare (Stereo 1/2 & 3/4)",
                io: [
                    { id: "TREE_TURBO", label: "Tree Turbo", type: "bus", busType: "tree" }, 
                    { id: "LINK_1", label: "Loxone Link", type: "bus", busType: "link" }, 
                    { id: "SPK_1_2", label: "Lautsprecher 1 & 2 (Stereo 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_3_4", label: "Lautsprecher 3 & 4 (Stereo 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPDIF_OUT", label: "SPDIF out digital (48kHz)", type: "out" },
                    { id: "LINE_OUT", label: "Line-out analog (44.1kHz)", type: "out" }
                ]
            },
            {
                id: "stereo_12_single_34",
                label: "Stereo (1/2) + Einzel (3 & 4)",
                io: [
                    { id: "TREE_TURBO", label: "Tree Turbo", type: "bus", busType: "tree" }, 
                    { id: "SPK_1_2", label: "Lautsprecher 1 & 2 (Stereo 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_3", label: "Lautsprecher 3 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_4", label: "Lautsprecher 4 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPDIF_OUT", label: "SPDIF out digital (48kHz)", type: "out" },
                    { id: "LINE_OUT", label: "Line-out analog (44.1kHz)", type: "out" }
                ]
            },
            {
                id: "single_12_stereo_34",
                label: "Einzel (1 & 2) + Stereo (3/4)",
                io: [
                    { id: "TREE_TURBO", label: "Tree Turbo", type: "bus", busType: "tree" }, 
                    { id: "SPK_1", label: "Lautsprecher 1 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_2", label: "Lautsprecher 2 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_3_4", label: "Lautsprecher 3 & 4 (Stereo 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPDIF_OUT", label: "SPDIF out digital (48kHz)", type: "out" },
                    { id: "LINE_OUT", label: "Line-out analog (44.1kHz)", type: "out" }
                ]
            },
            {
                id: "all_single",
                label: "4x Einzelkanäle (1, 2, 3, 4)",
                io: [
                    { id: "TREE_TURBO", label: "Tree Turbo", type: "bus", busType: "tree" }, 
                    { id: "SPK_1", label: "Lautsprecher 1 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_2", label: "Lautsprecher 2 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_3", label: "Lautsprecher 3 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPK_4", label: "Lautsprecher 4 (Einzel 4...8Ω, 44.1kHz)", type: "out" },
                    { id: "SPDIF_OUT", label: "SPDIF out digital (48kHz)", type: "out" },
                    { id: "LINE_OUT", label: "Line-out analog (44.1kHz)", type: "out" }
                ]
            }
        ] 
    },

    // --- Extensions ---
    { 
        id: "lox_tree_extension", 
        name: "Tree Extension", 
        image: "Tree-Extension.jpg", 
        power: 1.3, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "TREE_LEFT", label: "Tree Ast Links", type: "bus", busType: "tree" }, 
            { id: "TREE_RIGHT", label: "Tree Ast Rechts", type: "bus", busType: "tree" }
        ] 
    },
    { 
        id: "lox_air_base", 
        name: "Air Base Extension", 
        image: "Air-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "AIR_OUT", label: "Air Geräte", type: "bus", busType: "air" }
        ] 
    },
    { 
        id: "lox_dali_extension", 
        name: "DALI Extension", 
        image: "Dali-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "DALI_1", label: "DALI Bus 1", type: "bus", busType: "dali" }
        ] 
    },
    { 
        id: "lox_dali_extension_10", 
        name: "DALI Extension (10 Geräte)", 
        image: "Dali-Extension-10.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "DALI_1", label: "DALI Bus 1", type: "bus", busType: "dali", limit:10 }
        ] 
    },
    { 
        id: "lox_relay_extension", 
        name: "Relay Extension", 
        image: "Relay-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "O_1", label: "Relais 1", type: "out" }, { id: "O_2", label: "Relais 2", type: "out" }, 
            { id: "O_3", label: "Relais 3", type: "out" }, { id: "O_4", label: "Relais 4", type: "out" },
            { id: "O_5", label: "Relais 5", type: "out" }, { id: "O_6", label: "Relais 6", type: "out" }, 
            { id: "O_7", label: "Relais 7", type: "out" }, { id: "O_8", label: "Relais 8", type: "out" },
            { id: "O_9", label: "Relais 9", type: "out" }, { id: "O_10", label: "Relais 10", type: "out" }, 
            { id: "O_11", label: "Relais 11", type: "out" }, { id: "O_12", label: "Relais 12", type: "out" },
            { id: "O_13", label: "Relais 13", type: "out" }, { id: "O_14", label: "Relais 14", type: "out" }, 
            { id: "O_15", label: "Relais 15", type: "out" }, { id: "O_16", label: "Relais 16", type: "out" }
        ] 
    },
    { 
        id: "lox_di_extension", 
        name: "DI Extension", 
        image: "DI-Extension.jpg", 
        power: 1.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" },
            { id: "DI_2", label: "DI 2", type: "in" },
            { id: "DI_3", label: "DI 3", type: "in" },
            { id: "DI_4", label: "DI 4", type: "in" },
            { id: "DI_5", label: "DI 5", type: "in" },
            { id: "DI_6", label: "DI 6", type: "in" },
            { id: "DI_7", label: "DI 7", type: "in" },
            { id: "DI_8", label: "DI 8", type: "in" },
            { id: "DI_9", label: "DI 9", type: "in" },
            { id: "DI_10", label: "DI 10", type: "in" },
            { id: "DI_11", label: "DI 11", type: "in" },
            { id: "DI_12", label: "DI 12", type: "in" },
            { id: "DI_13", label: "DI 13", type: "in" },
            { id: "DI_14", label: "DI 14", type: "in" },
            { id: "DI_15", label: "DI 15", type: "in" },
            { id: "DI_16", label: "DI 16", type: "in" },
            { id: "DI_17", label: "DI 17", type: "in" },
            { id: "DI_18", label: "DI 18", type: "in" },
            { id: "DI_19", label: "DI 19", type: "in" },
            { id: "DI_20", label: "DI 20", type: "in" }
        ] 
    },
    { 
        id: "lox_dimmer_extension", 
        name: "Dimmer Extension", 
        image: "Dimmer-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" },
            { id: "DI_2", label: "DI 2", type: "in" },
            { id: "DI_3", label: "DI 3", type: "in" },
            { id: "DI_4", label: "DI 4", type: "in" },
            { id: "DI_5", label: "DI 5", type: "in" },
            { id: "DI_6", label: "DI 6", type: "in" },
            { id: "DI_7", label: "DI 7", type: "in" },
            { id: "DI_8", label: "DI 8", type: "in" },
            { id: "DIM_1", label: "Dimmer 1", type: "out" }, 
            { id: "DIM_2", label: "Dimmer 2", type: "out" },
            { id: "DIM_3", label: "Dimmer 3", type: "out" }, 
            { id: "DIM_4", label: "Dimmer 4", type: "out" }
        ] 
    },
    { 
        id: "lox_modbus_extension", 
        name: "Modbus Extension", 
        image: "Modbus-Extension.jpg", 
        power: 1.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus", "Bemerkung"], 
        io: [
            { id: "MODBUS", label: "Modbus RTU", type: "bus", busType: "modbus", limit: 32 }
        ] 
    },
    { 
        id: "lox_1wire_extension", 
        name: "1-Wire Extension", 
        image: "1-Wire-Extension.jpg", 
        power: 1.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "ONEWIRE", label: "1-Wire Bus", type: "bus", busType: "1wire", limit: 20 }
        ] 
    },

    // --- Tree / Air / Nano Devices ---
    { 
        id: "lox_nano_di_tree", 
        name: "Nano DI Tree", 
        image: "DI-Tree.jpg", 
        power: 0.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Bemerkung"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" }, { id: "DI_2", label: "DI 2", type: "in" }, 
            { id: "DI_3", label: "DI 3", type: "in" }, { id: "DI_4", label: "DI 4", type: "in" }, 
            { id: "DI_5", label: "DI 5", type: "in" }, { id: "DI_6", label: "DI 6", type: "in" }
        ] 
    },
    
    { 
        id: "lox_nano_2_relay", 
        name: "Nano 2 Relay Tree", 
        image: "Nano-2-Relay.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Bemerkung"],
        // PROFILE anstelle fixer IOs
        profiles: [
            {
                id: "2x_relay",
                label: "2x Einzelrelais / Taster",
                io: [ 
                    { id: "O_1", label: "Relais 1", type: "out" }, 
                    { id: "O_2", label: "Relais 2", type: "out" }
                ]
            },

            
            {
                id: "1x_shading",
                label: "1x Storenaktor (Auf/Ab)",
                io: [ 
                    { id: "O_UP_DOWN", label: "Motor Auf/ AB", type: "out" }
                ]
            }
        ]
    },

    { 
        id: "lox_rgbw_tree", 
        name: "RGBW 24V Dimmer Tree", 
        image: "RGBW-Dimmer-Tree.png", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Leistung (W)", "Tree Ast", "Bemerkung"], 
        profiles: [
            {
                id: "4x_single",
                label: "4x Einzelkanäle (z.B. Spots)",
                io: [
                    { id: "PWM_1", label: "Kanal 1", type: "out" }, 
                    { id: "PWM_2", label: "Kanal 2", type: "out" },
                    { id: "PWM_3", label: "Kanal 3", type: "out" }, 
                    { id: "PWM_4", label: "Kanal 4", type: "out" }
                ]
            },
            {
                id: "1x_rgbw",
                label: "1x RGBW (Farbe + Weiß)",
                io: [
                    { id: "PWM_RGBW", label: "RGBW Kanal", type: "out" }
                ]
            },
            {
                id: "1x_rgb_1x_single",
                label: "1x RGB + 1x Einzelkanal",
                io: [
                    { id: "PWM_RGB", label: "RGB Kanal", type: "out" },
                    { id: "PWM_4", label: "Einzelkanal 4", type: "out" }
                ]
            },
            {
                id: "1x_tw_2x_single",
                label: "1x Tunable White + 2x Einzelkanäle",
                io: [
                    { id: "PWM_TW", label: "Tunable White", type: "out" },
                    { id: "PWM_TW_2", label: "Tunible Withe 2", type: "out" }
                ]
            }
        ] 
    },
    { 
        id: "lox_rgbw_air", 
        name: "RGBW 24V Dimmer Air", 
        image: "RGBW-Dimmer-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Leistung (W)", "Air Link", "Bemerkung"], 
        profiles: [
            {
                id: "4x_single",
                label: "4x Einzelkanäle (z.B. Spots)",
                io: [
                    { id: "PWM_1", label: "Kanal 1", type: "out" }, 
                    { id: "PWM_2", label: "Kanal 2", type: "out" },
                    { id: "PWM_3", label: "Kanal 3", type: "out" }, 
                    { id: "PWM_4", label: "Kanal 4", type: "out" }
                ]
            },
            {
                id: "1x_rgbw",
                label: "1x RGBW (Farbe + Weiß)",
                io: [
                    { id: "PWM_RGBW", label: "RGBW Kanal", type: "out" }
                ]
            },
            {
                id: "1x_rgb_1x_single",
                label: "1x RGB + 1x Einzelkanal",
                io: [
                    { id: "PWM_RGB", label: "RGB Kanal", type: "out" },
                    { id: "PWM_4", label: "Einzelkanal 4", type: "out" }
                ]
            },
            {
                id: "1x_tw_2x_single",
                label: "1x Tunable White + 2x Einzelkanäle",
                io: [
                    { id: "PWM_TW", label: "Tunable White", type: "out" },
                    { id: "PWM_TW_2", label: "Tunible Withe 2", type: "out" }
                ]
            }
        ] 
    },
    { 
        id: "lox_nano_dimmer_air", 
        name: "Nano Dimmer Air", 
        image: "Nano-Dimmer-Air.jpg", 
        power: null, 
        defaultPower: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Leistung (W)", "Air Link", "Bemerkung"], 
        io: [ 
            { id: "O_1", label: "Dimmer", type: "out" }
        ] 
    },
    { 
        id: "lox_nano_io_air", 
        name: "Nano IO Air", 
        image: "Nano-IO-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link", "Bemerkung"], 
        profiles: [
            {
                id: "2x_relay",
                label: "2x Einzelrelais",
                io: [
                    { id: "I_1", label: "I1", type: "in" }, 
                    { id: "I_2", label: "I2", type: "in" },
                    { id: "I_3", label: "I3", type: "in" },
                    { id: "I_4", label: "I4", type: "in" },
                    { id: "I_5", label: "I5", type: "in" },
                    { id: "I_6", label: "I6", type: "in" },
                    { id: "O_1", label: "Relais 1", type: "out" }, 
                    { id: "O_2", label: "Relais 2", type: "out" }
                ]
            },
            {
                id: "1x_shading",
                label: "1x Storenaktor (Auf/Ab)",
                io: [
                    { id: "I_1", label: "I1", type: "in" }, 
                    { id: "I_2", label: "I2", type: "in" },
                    { id: "I_3", label: "I3", type: "in" },
                    { id: "I_4", label: "I4", type: "in" },
                    { id: "I_5", label: "I5", type: "in" },
                    { id: "I_6", label: "I6", type: "in" },
                    { id: "O_UP", label: "Motor Auf", type: "out" }, 
                    { id: "O_DOWN", label: "Motor Ab", type: "out" }
                ]
            }
        ]
    },
    { 
        id: "lox_multi_air", 
        name: "Multi Extension Air", 
        image: "Multi-Extension-Air.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link", "Bemerkung"], 
        profiles: [
            {
                id: "4x_single",
                label: "8x Relais + PWM: 4x Einzelkanäle",
                io: [
                    { id: "DI_1", label: "DI 1", type: "in" },
                    { id: "DI_2", label: "DI 2", type: "in" },
                    { id: "DI_3", label: "DI 3", type: "in" },
                    { id: "DI_4", label: "DI 4", type: "in" },
                    { id: "DI_5", label: "DI 5", type: "in" },
                    { id: "DI_6", label: "DI 6", type: "in" },
                    { id: "DI_7", label: "DI 7", type: "in" },
                    { id: "DI_8", label: "DI 8", type: "in" },
                    { id: "DI_9", label: "DI 9", type: "in" },
                    { id: "DI_10", label: "DI 10", type: "in" },
                    { id: "DI_11", label: "DI 11", type: "in" },
                    { id: "DI_12", label: "DI 12", type: "in" },
                    { id: "1WIRE", label: "1-Wire Bus", type: "bus", busType: "1wire", limit: 20 },
                    { id: "O_1", label: "Relais 1", type: "out" },
                    { id: "O_2", label: "Relais 2", type: "out" },
                    { id: "O_3", label: "Relais 3", type: "out" },
                    { id: "O_4", label: "Relais 4", type: "out" },
                    { id: "O_5", label: "Relais 5", type: "out" },
                    { id: "O_6", label: "Relais 6", type: "out" },
                    { id: "O_7", label: "Relais 7", type: "out" },
                    { id: "O_8", label: "Relais 8", type: "out" },
                    { id: "PWM_1", label: "PWM 1", type: "out" },
                    { id: "PWM_2", label: "PWM 2", type: "out" },
                    { id: "PWM_3", label: "PWM 3", type: "out" },
                    { id: "PWM_4", label: "PWM 4", type: "out" }
                ]
            },
            {
                id: "1x_tw_2x_single",
                label: "8x Relais + PWM: 1x Tunable White + 2x Einzel",
                io: [
                    { id: "DI_1", label: "DI 1", type: "in" },
                    { id: "DI_2", label: "DI 2", type: "in" },
                    { id: "DI_3", label: "DI 3", type: "in" },
                    { id: "DI_4", label: "DI 4", type: "in" },
                    { id: "DI_5", label: "DI 5", type: "in" },
                    { id: "DI_6", label: "DI 6", type: "in" },
                    { id: "DI_7", label: "DI 7", type: "in" },
                    { id: "DI_8", label: "DI 8", type: "in" },
                    { id: "DI_9", label: "DI 9", type: "in" },
                    { id: "DI_10", label: "DI 10", type: "in" },
                    { id: "DI_11", label: "DI 11", type: "in" },
                    { id: "DI_12", label: "DI 12", type: "in" },
                    { id: "1WIRE", label: "1-Wire Bus", type: "bus", busType: "1wire", limit: 20 },
                    { id: "O_1", label: "Relais 1", type: "out" },
                    { id: "O_2", label: "Relais 2", type: "out" },
                    { id: "O_3", label: "Relais 3", type: "out" },
                    { id: "O_4", label: "Relais 4", type: "out" },
                    { id: "O_5", label: "Relais 5", type: "out" },
                    { id: "O_6", label: "Relais 6", type: "out" },
                    { id: "O_7", label: "Relais 7", type: "out" },
                    { id: "O_8", label: "Relais 8", type: "out" },
                    { id: "PWM_TW", label: "Tunable White", type: "out" },
                    { id: "PWM_TW_2", label: "Tunible Withe 2", type: "out" }
                ]
            },
            {
                id: "1x_rgbw",
                label: "8x Relais + PWM: 1x RGBW",
                io: [
                    { id: "DI_1", label: "DI 1", type: "in" },
                    { id: "DI_2", label: "DI 2", type: "in" },
                    { id: "DI_3", label: "DI 3", type: "in" },
                    { id: "DI_4", label: "DI 4", type: "in" },
                    { id: "DI_5", label: "DI 5", type: "in" },
                    { id: "DI_6", label: "DI 6", type: "in" },
                    { id: "DI_7", label: "DI 7", type: "in" },
                    { id: "DI_8", label: "DI 8", type: "in" },
                    { id: "DI_9", label: "DI 9", type: "in" },
                    { id: "DI_10", label: "DI 10", type: "in" },
                    { id: "DI_11", label: "DI 11", type: "in" },
                    { id: "DI_12", label: "DI 12", type: "in" },
                    { id: "1WIRE", label: "1-Wire Bus", type: "bus", busType: "1wire", limit: 20 },
                    { id: "O_1", label: "Relais 1", type: "out" },
                    { id: "O_2", label: "Relais 2", type: "out" },
                    { id: "O_3", label: "Relais 3", type: "out" },
                    { id: "O_4", label: "Relais 4", type: "out" },
                    { id: "O_5", label: "Relais 5", type: "out" },
                    { id: "O_6", label: "Relais 6", type: "out" },
                    { id: "O_7", label: "Relais 7", type: "out" },
                    { id: "O_8", label: "Relais 8", type: "out" },
                    { id: "PWM_RGBW", label: "RGBW Kanal", type: "out" }
                ]
            }
        ] 
    },
    { 
        id: "lox_dali_air", 
        name: "DALI Air", 
        image: "Dali-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link", "Bemerkung"], 
        io: [
            { id: "DALI_OUT", label: "DALI Geräte", type: "bus", busType: "dali", limit: 10 }
        ] 
    },
    { 
        id: "lox_tree_to_air", 
        name: "Tree to Air Bridge", 
        image: "Tree-to-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Bemerkung"], 
        io: [
            { id: "AIR_OUT", label: "Air Geräte", type: "bus", busType: "air", limit: 50 }
        ] 
    },
    { 
        id: "lox_presence_tree", 
        name: "Präsenzmelder Tree", 
        image: "Präsenzmelder.jpg", 
        power: 0.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Bemerkung"]
    },
    { 
        id: "lox_presence_air", 
        name: "Präsenzmelder Air", 
        image: "Präsenzmelder.jpg", 
        power: 0.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link", "Bemerkung"]     
    },
    { 
        id: "lox_shading_air", 
        name: "Shadingaktor Air", 
        image: "Storenaktor-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link", "Bemerkung"], 
        io: [
            { id: "M_1_UP", label: "Motor(Auf )", type: "out" },
            { id: "M_1_DOWN", label: "Motor(Ab)", type: "out" }
        ] 
    },
    { 
        id: "Tridonic_LCA-35W_Dali_2", 
        name: "Tridonic LCA 35W 24V DALI 2", 
        image: "TridonicLC35W.jpg",  
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    },
    { 
        id: "Tridonic_LCA-60W_Dali_2", 
        name: "Tridonic LCA 60W 24V DALI 2", 
        image: "TridonicLC60W.jpg",  
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    },
    { 
        id: "Tridonic_LCA-100W_Dali_2", 
        name: "Tridonic LCA 100W 24V DALI 2", 
        image: "TridonicLC100W.jpg", 
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    },
    { 
        id: "Tridonic_LCA-150W_Dali_2", 
        name: "Tridonic LCA 150W 24V DALI 2", 
        image: "TridonicLC150W.jpg",  
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    },
    { 
        id: "EAGLERISE_LS_45_24_DALI_2", 
        name: "EAGLERISE LS 45W 24V DALI 2", 
        image: "EAGLERISE-LS-45-24-DALI2.jpg",  
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    },
    { 
        id: "EAGLERISE_LS_80_24_DALI_2", 
        name: "EAGLERISE LS 80W 24V DALI 2", 
        image: "EAGLERISE-LS-80-24-DALI2.jpg",  
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    },
    { 
        id: "EAGLERISE_LS_150_24_DALI_2", 
        name: "EAGLERISE LS 150W 24V DALI 2", 
        image: "EAGLERISE-LS-150-24-DALI2.jpg",  
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    },
    { 
        id: "Lunatone_RGBW_PWM_DIMMER_10A", 
        name: "Lunatone RGBW PWM DIMMER 12-24V 10A", 
        image: "Lunatone-RGBW-PWM-DIMMER-10A.jpg",  
        fields: ["Geräte-Bez.", "Dali Bus", "Bemerkung", "LED Band Typ"],
        channels: 4,
        io: [
            { id: "chanel_1", label: "Kanal 1", type: "out" }
        ]
    }
];
