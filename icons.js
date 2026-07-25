// --- ICONS & SCHALTERTYPEN KONFIGURATION ---
const iconConfigList = [
    { file: "", label: "--- Leerplatz ---", group: "Allgemein", io: [] },
    { file: "Drehschalter-Hand-Auto.png", label: "Drehschalter Hand-Auto", group: "Schalter & Taster", io: [{ id: "TA_HAND_AUTO", label: "Hand/Auto Schalter", type: "in" }] },
    { file: "Raumthermostaat.png", label: "Raumthermostat", group: "Thermostate & Sensoren", io: [{ id: "TEMP_IN", label: "Temperatur Ist", type: "out" }, { id: "HEIZ_OUT", label: "Heizung Ventil", type: "out" }] },
    { file: "SCH3.png", label: "SCH 3 (Schalter 1-fach)", group: "Licht & Relais", io: [{ id: "TA_1", label: "Taster / Schalter", type: "in" }, { id: "LI_1", label: "Licht / Relais", type: "out" }] },
    { file: "SCH3-3.png", label: "SCH 3-3 (Schalter 2-fach)", group: "Licht & Relais", io: [{ id: "TA_1", label: "Taster Oben", type: "in" }, { id: "LI_1", label: "Licht Oben", type: "out" }, { id: "TA_2", label: "Taster Unten", type: "in" }, { id: "LI_2", label: "Licht Unten", type: "out" }] },
    { file: "SCH3-3-T13.png", label: "SCH 3-3 + T13 (Kombi Schalter & Steckdose)", group: "Licht & Relais", io: [{ id: "TA_1", label: "Taster / Schalter", type: "in" }, { id: "LI_1", label: "Licht / Relais", type: "out" }, { id: "SE_1", label: "Steckdose Messung", type: "out" }] },
    { file: "SCH3-Bel.png", label: "SCH 3 mit Beleuchtung", group: "Licht & Relais", io: [{ id: "TA_1", label: "Taster", type: "in" }, { id: "LI_1", label: "Licht / Relais", type: "out" }, { id: "LED_CTRL", label: "Orientierungslicht", type: "out" }] },
    { file: "SCH3T13.png", label: "SCH 3 + T13 (Kombi Schalter/Steckdose)", group: "Licht & Relais", io: [{ id: "TA_1", label: "Taster", type: "in" }, { id: "LI_1", label: "Licht / Relais", type: "out" }] },
    { file: "Sonnerie.png", label: "Sonnerie / Klingel", group: "Signalisierung", io: [{ id: "TA_KLINGEL", label: "Klingeltaster", type: "in" }, { id: "GONG_OUT", label: "Gong / Signal", type: "out" }] },
    { file: "Storenschalter-1-Kanal.png", label: "Storenschalter 1-Kanal", group: "Storen & Jalousien", io: [{ id: "TA_AUF", label: "Taster Auf", type: "in" }, { id: "TA_AB", label: "Taster Ab", type: "in" }, { id: "MO_AUF", label: "Motor Auf", type: "out" }, { id: "MO_AB", label: "Motor Ab", type: "out" }] },
    { file: "Storenschalter-2-Kanal.png", label: "Storenschalter 2-Kanal", group: "Storen & Jalousien", io: [{ id: "TA_K1_AUF", label: "K1 Auf", type: "in" }, { id: "TA_K1_AB", label: "K1 Ab", type: "in" }, { id: "TA_K2_AUF", label: "K2 Auf", type: "in" }, { id: "TA_K2_AB", label: "K2 Ab", type: "in" }, { id: "MO_K1", label: "Motor K1", type: "out" }, { id: "MO_K2", label: "Motor K2", type: "out" }] },
    { file: "T13.png", label: "T13 Steckdose", group: "Steckdosen", io: [{ id: "POWER_MON", label: "Energiemessung", type: "out" }] },
    { file: "Universaltaster-1x2.png", label: "Universaltaster 1x2", group: "Schalter & Taster", io: [{ id: "TA_1", label: "Taste Links", type: "in" }, { id: "TA_2", label: "Taste Rechts", type: "in" }] },
    { file: "Universaltaster-3-2.png", label: "Universaltaster 3-2", group: "Schalter & Taster", io: [{ id: "TA_1", label: "Taste Reihe 1", type: "in" }, { id: "TA_2", label: "Taste Reihe 2", type: "in" }, { id: "TA_3", label: "Taste Reihe 3", type: "in" }, { id: "TA_4", label: "Taste Reihe 1", type: "in" }, { id: "TA_5", label: "Taste Reihe 2", type: "in" }, { id: "TA_6", label: "Taste Reihe 3", type: "in" }] },
    { file: "Universaltaster-2x2.png", label: "Universaltaster 2x2", group: "Schalter & Taster", io: [{ id: "TA_1", label: "Oben Links", type: "in" }, { id: "TA_2", label: "Oben Rechts", type: "in" }, { id: "TA_3", label: "Unten Links", type: "in" }, { id: "TA_4", label: "Unten Rechts", type: "in" }] }
];

// --- HARDWARE KOMPONENTEN KONFIGURATION (VOLLSTÄNDIG LOXONE) ---
const hardwareConfigList = [
    // --- MINISERVER & BASISGERÄTE ---
    { 
        id: "lox_miniserver", 
        name: "Loxone Miniserver Gen. 2", 
        image: "Miniserver.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" }, { id: "DI_2", label: "DI 2", type: "in" }, { id: "DI_3", label: "DI 3", type: "in" }, { id: "DI_4", label: "DI 4", type: "in" },
            { id: "AI_1", label: "AI 1 (0-10V)", type: "in" }, { id: "AI_2", label: "AI 2 (0-10V)", type: "in" }, { id: "AI_3", label: "AI 3 (0-10V)", type: "in" }, { id: "AI_4", label: "AI 4 (0-10V)", type: "in" },
            { id: "O_1", label: "Relais 1", type: "out" }, { id: "O_2", label: "Relais 2", type: "out" }, { id: "O_3", label: "Relais 3", type: "out" }, { id: "O_4", label: "Relais 4", type: "out" },
            { id: "AO_1", label: "AO 1 (0-10V)", type: "out" }, { id: "AO_2", label: "AO 2 (0-10V)", type: "out" },
            { id: "TREE_1", label: "Tree Ast 1", type: "bus", max: 50 },
            { id: "TREE_2", label: "Tree Ast 2", type: "bus", max: 50 },
            { id: "LINK_1", label: "Loxone Link", type: "bus", max: 30 }
        ] 
    },
    { 
        id: "lox_miniserver_go", 
        name: "Loxone Miniserver Go", 
        image: "Miniserver-Go.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse"], 
        io: [
            { id: "AIR_BASE", label: "Air Geräte (Max 128)", type: "bus", max: 128 }
        ] 
    },

    // --- EXTENSIONS (LINK BUS) ---
    { 
        id: "lox_tree_extension", 
        name: "Loxone Tree Extension", 
        image: "Tree-Extension.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "TREE_LEFT", label: "Tree Ast Links", type: "bus", max: 50 },
            { id: "TREE_RIGHT", label: "Tree Ast Rechts", type: "bus", max: 50 }
        ] 
    },
    { 
        id: "lox_air_base", 
        name: "Loxone Air Base Extension", 
        image: "Air-Base.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "AIR_OUT", label: "Air Geräte (Max 128)", type: "bus", max: 128 }
        ] 
    },
    { 
        id: "lox_dali_extension", 
        name: "Loxone DALI Extension", 
        image: "Dali-Extension.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "DALI_1", label: "DALI Bus 1 (Max 64)", type: "bus", max: 64 },
            { id: "DALI_2", label: "DALI Bus 2 (Max 64)", type: "bus", max: 64 }
        ] 
    },
    { 
        id: "lox_modbus_extension", 
        name: "Loxone Modbus Extension", 
        image: "Modbus-Extension.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "MODBUS_LINE", label: "Modbus RTU", type: "bus", max: 32 }
        ] 
    },
    { 
        id: "lox_dimmer_extension", 
        name: "Loxone Dimmer Extension", 
        image: "Dimmer-Extension.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "CH_1", label: "Dimmer Kanal 1", type: "out" },
            { id: "CH_2", label: "Dimmer Kanal 2", type: "out" },
            { id: "CH_3", label: "Dimmer Kanal 3", type: "out" },
            { id: "CH_4", label: "Dimmer Kanal 4", type: "out" }
        ] 
    },
    { 
        id: "lox_relays_extension", 
        name: "Loxone Relay Extension", 
        image: "Relay-Extension.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "R_1", label: "Relais 1", type: "out" }, { id: "R_2", label: "Relais 2", type: "out" }, { id: "R_3", label: "Relais 3", type: "out" }, { id: "R_4", label: "Relais 4", type: "out" },
            { id: "R_5", label: "Relais 5", type: "out" }, { id: "R_6", label: "Relais 6", type: "out" }, { id: "R_7", label: "Relais 7", type: "out" }, { id: "R_8", label: "Relais 8", type: "out" },
            { id: "R_9", label: "Relais 9", type: "out" }, { id: "R_10", label: "Relais 10", type: "out" }, { id: "R_11", label: "Relais 11", type: "out" }, { id: "R_12", label: "Relais 12", type: "out" },
            { id: "R_13", label: "Relais 13", type: "out" }, { id: "R_14", label: "Relais 14", type: "out" }
        ] 
    },
    { 
        id: "lox_digital_in_extension", 
        name: "Loxone Digital In Extension", 
        image: "Digital-In.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" }, { id: "DI_2", label: "DI 2", type: "in" }, { id: "DI_3", label: "DI 3", type: "in" }, { id: "DI_4", label: "DI 4", type: "in" },
            { id: "DI_5", label: "DI 5", type: "in" }, { id: "DI_6", label: "DI 6", type: "in" }, { id: "DI_7", label: "DI 7", type: "in" }, { id: "DI_8", label: "DI 8", type: "in" },
            { id: "DI_9", label: "DI 9", type: "in" }, { id: "DI_10", label: "DI 10", type: "in" }, { id: "DI_11", label: "DI 11", type: "in" }, { id: "DI_12", label: "DI 12", type: "in" },
            { id: "DI_13", label: "DI 13", type: "in" }, { id: "DI_14", label: "DI 14", type: "in" }, { id: "DI_15", label: "DI 15", type: "in" }, { id: "DI_16", label: "DI 16", type: "in" },
            { id: "DI_17", label: "DI 17", type: "in" }, { id: "DI_18", label: "DI 18", type: "in" }, { id: "DI_19", label: "DI 19", type: "in" }, { id: "DI_20", label: "DI 20", type: "in" }
        ] 
    },

    // --- TREE GERÄTE (SLAVES) ---
    { id: "lox_nano_di_tree", name: "Loxone Nano DI Tree", image: "DI-Tree.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], io: [{ id: "DI_1", label: "DI 1", type: "in" }, { id: "DI_2", label: "DI 2", type: "in" }, { id: "DI_3", label: "DI 3", type: "in" }, { id: "DI_4", label: "DI 4", type: "in" }, { id: "DI_5", label: "DI 5", type: "in" }, { id: "DI_6", label: "DI 6", type: "in" }] },
    { id: "lox_nano_2_relay", name: "Loxone Nano 2 Relay Tree", image: "Nano-2-Relay.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], io: [{ id: "I_1", label: "I1", type: "in" }, { id: "I_2", label: "I2", type: "in" }, { id: "I_3", label: "I3", type: "in" }, { id: "I_4", label: "I4", type: "in" }, { id: "I_5", label: "I5", type: "in" }, { id: "I_6", label: "I6", type: "in" }, { id: "O_1", label: "Relais 1", type: "out" }, { id: "O_2", label: "Relais 2", type: "out" }] },
    { id: "lox_motor_controller_tree", name: "Loxone Motor Controller Tree", image: "Motor-Controller-Tree.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], io: [{ id: "I_1", label: "I1", type: "in" }, { id: "I_2", label: "I2", type: "in" }, { id: "O_1", label: "Motor Auf/Ab", type: "out" }] },
    { id: "lox_touch_tree", name: "Loxone Touch Tree", image: "Touch-Tree.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Montagehöhe"], io: [{ id: "T_1", label: "Punkt 1 (Oben Links)", type: "in" }, { id: "T_2", label: "Punkt 2 (Oben Rechts)", type: "in" }, { id: "T_3", label: "Punkt 3 (Unten Links)", type: "in" }, { id: "T_4", label: "Punkt 4 (Unten Rechts)", type: "in" }, { id: "T_5", label: "Punkt 5 (Fläche)", type: "in" }, { id: "TEMP", label: "Temperatur", type: "out" }, { id: "HUM", label: "Feuchtigkeit", type: "out" }] },
    { id: "lox_presence_sensor_tree", name: "Loxone Präsenzmelder Tree", image: "Presence-Tree.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Montagehöhe"], io: [{ id: "PRESENCE", label: "Präsenz", type: "in" }, { id: "BRIGHTNESS", label: "Helligkeit", type: "out" }, { id: "TEMP", label: "Temperatur", type: "out" }] },

    // --- TREE TURBO GERÄTE ---
    { id: "lox_tub_motor_turbo", name: "Loxone Tub Motor Tree Turbo", image: "Tub-Motor-Turbo.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], io: [{ id: "MO_1", label: "Rohrmotor Steuerung", type: "out" }] },
    { id: "lox_multi_extension_turbo", name: "Loxone Multi Extension Tree Turbo", image: "Multi-Extension-Turbo.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], io: [{ id: "I_1", label: "Digital In 1", type: "in" }, { id: "O_1", label: "Relais Out 1", type: "out" }, { id: "AO_1", label: "Analog Out 1", type: "out" }] },

    // --- AIR GERÄTE (SLAVES) ---
    { id: "lox_nano_dimmer_air", name: "Loxone Nano Dimmer Air", image: "Nano-Dimmer-Air.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Montagehöhe", "Air Link"], io: [{ id: "I_1", label: "I1", type: "in" }, { id: "I_2", label: "I2", type: "in" }, { id: "O_1", label: "Dimmer", type: "out" }] },
    { id: "lox_nano_io_air", name: "Loxone Nano IO Air", image: "Nano-IO-Air.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], io: [{ id: "I_1", label: "I1", type: "in" }, { id: "I_2", label: "I2", type: "in" }, { id: "O_1", label: "Relais 1", type: "out" }, { id: "O_2", label: "Relais 2", type: "out" }] },
    { id: "lox_motor_controller_air", name: "Loxone Motor Controller Air", image: "Motor-Controller-Air.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], io: [{ id: "I_1", label: "I1", type: "in" }, { id: "I_2", label: "I2", type: "in" }, { id: "O_1", label: "Motor Auf/Ab", type: "out" }] },
    { id: "lox_storenaktor_air", name: "Loxone Storenaktor Air", image: "Storenaktor-Air.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], io: [{ id: "O_1", label: "Storen", type: "out" }] },
    { id: "lox_touch_air", name: "Loxone Touch Air", image: "Touch-Air.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Air Link", "Montagehöhe"], io: [{ id: "T_1", label: "Punkt 1", type: "in" }, { id: "T_2", label: "Punkt 2", type: "in" }, { id: "TEMP", label: "Temperatur", type: "out" }, { id: "HUM", label: "Feuchtigkeit", type: "out" }] },
    { id: "lox_presence_sensor_air", name: "Loxone Präsenzmelder Air", image: "Presence-Air.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Air Link", "Montagehöhe"], io: [{ id: "PRESENCE", label: "Präsenz", type: "in" }, { id: "BRIGHTNESS", label: "Helligkeit", type: "out" }] },

    // --- DALI GERÄTE ---
    { id: "lox_dali_rgbw", name: "Loxone DALI RGBW Dimmer", image: "Dali-Dimmer.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "DALI Bus"], io: [{ id: "O_1", label: "RGBW Licht", type: "out" }] },
    { 
        id: "lox_dali_air", 
        name: "Loxone DALI Air", 
        image: "Dali-Air.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], 
        io: [
            { id: "DALI_OUT", label: "DALI Geräte (Max 10)", type: "bus", max: 10 }
        ] 
    },

    // --- BRIDGES & SONSTIGE ---
    { 
        id: "lox_tree_to_air", 
        name: "Tree to Air Bridge", 
        image: "Tree-to-Air.jpg", 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Montagehöhe"], 
        io: [
            { id: "AIR_OUT", label: "Air Geräte (Max 49)", type: "bus", max: 49 }
        ] 
    },
    { id: "lox_wetterstation", name: "Loxone Wetterstation Tree", image: "Wetterstation.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Montagehöhe"], io: [{ id: "WIND", label: "Wind", type: "out" }, { id: "TEMP", label: "Temperatur", type: "out" }, { id: "HELL", label: "Helligkeit", type: "out" }] },
    { id: "lox_stellenantrieb", name: "Loxone Stellenantrieb Tree", image: "Stellenantrieb.jpg", fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], io: [{ id: "VALVE", label: "Ventil", type: "out" }] }
];
