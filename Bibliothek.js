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
            { id: "TA_HAND", label: "Hand", type: "in" },
            { id: "TA_AUTO", label: "AUTO", type: "in" }
        ] 
    },
    {
        file: "Raumthermostaat.png",
        label: "Raumthermostat",
        group: "Thermostate & Sensoren",
        io: [
            { id: "COOL_OUT", label: "Kühlen", type: "out" },
            { id: "HEIZ_OUT", label: "Heizen", type: "out" }
        ]
    },
    {
        file: "SCH3.png",
        label: "SCH 3 (Schalter 1-fach)",
        group: "Licht & Relais",
        io: [
            { id: "TA_1", label: "Taster Schliesser", type: "in" },
            { id: "TA_2", label: "Taster Öffner", type: "in" }
        ]
    },
    { 
        file: "SCH3-3.png", 
        label: "SCH 3-3 (Schalter 2-fach)", 
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
        group: "Signalisierung", 
        io: [
            { id: "TA_KLINGEL", label: "Taster", type: "in" }
        ] 
    },
    { 
        file: "Storenschalter-1-Kanal.png", 
        label: "Storenschalter 1-Kanal", 
        group: "Storen & Jalousien", 
        io: [
            { id: "TA_AUF", label: "K1 Auf", type: "in" }, 
            { id: "TA_AB", label: "K1 Ab", type: "in" }
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
            { id: "TA_K2_AB", label: "K2 Ab", type: "in" }
        ] 
    },
    { 
        file: "T13.png", 
        label: "T13 Steckdose", 
        group: "Steckdosen", 
        io: [
            { id: "T13_STD", label: "Steckdose", type: "out" }
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
        file: "Universaltaster-2x2.png", 
        label: "Universaltaster 2x2", 
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
    // Core Server
    { 
        id: "lox_miniserver", 
        name: "Loxone Miniserver Gen. 2", 
        image: "Miniserver-Gen-2.jpg", 
        power: 2.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" },
            { id: "DI_2", label: "DI 2", type: "in" }, 
            { id: "DI_3", label: "DI 3", type: "in" }, 
            { id: "DI_4", label: "DI 4", type: "in" }, 
            { id: "O_1", label: "Relais 1", type: "out" },
            { id: "O_2", label: "Relais 2", type: "out" }, 
            { id: "O_3", label: "Relais 3", type: "out" }, 
            { id: "O_4", label: "Relais 4", type: "out" }, 
            { id: "TREE_1", label: "Tree Ast 1", type: "bus", max: 50 }, 
            { id: "TREE_2", label: "Tree Ast 2", type: "bus", max: 50 }, 
            { id: "LINK_1", label: "Loxone Link", type: "bus", max: 30 }
        ] 
    },
    { 
        id: "lox_miniserver_go", 
        name: "Loxone Miniserver Go", 
        image: "Miniserver-Go.jpg", 
        power: 2.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse"], 
        io: [
            { id: "AIR_BASE", label: "Air Geräte (Max 128)", type: "bus", max: 128 }, 
            { id: "LINK_1", label: "Loxone Link", type: "bus", max: 30 }
        ] 
    },
    { 
        id: "lox_miniserver_compact", 
        name: "Loxone Miniserver Compact", 
        image: "Miniserver-Compact.jpg", 
        power: 2.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse"], 
        io: [
            { id: "DI_1", label: "DI 1", type: "in" },
            { id: "DI_2", label: "DI 2", type: "in" }, 
            { id: "DI_3", label: "DI 3", type: "in" }, 
            { id: "DI_4", label: "DI 4", type: "in" }, 
            { id: "O_1", label: "Relais 1", type: "out" },
            { id: "O_2", label: "Relais 2", type: "out" }, 
            { id: "TREE_1", label: "Tree Ast", type: "bus", max: 50 }, 
            { id: "AIR_BASE", label: "Air Geräte (Max 128)", type: "bus", max: 128 }, 
            { id: "LINK_1", label: "Loxone Link", type: "bus", max: 30 }
        ] 
    },
    { 
        id: "lox_audioserver", 
        name: "Loxone Audioserver", 
        image: "Audioserver.jpg", 
        power: 5.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "IP-Adresse"], 
        io: [
            { id: "TREE_TURBO", label: "Tree Turbo", type: "bus", max: 10 }, 
            { id: "LINK_1", label: "Loxone Link", type: "bus", max: 30 }, 
            { id: "AUDIO_OUT", label: "Stereo Ausgänge", type: "out" }
        ] 
    },

    // Link Extensions
    { 
        id: "lox_tree_extension", 
        name: "Loxone Tree Extension", 
        image: "Tree-Extension.jpg", 
        power: 1.3, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "TREE_LEFT", label: "Tree Ast Links", type: "bus", max: 50 }, 
            { id: "TREE_RIGHT", label: "Tree Ast Rechts", type: "bus", max: 50 }
        ] 
    },
    { 
        id: "lox_air_base", 
        name: "Loxone Air Base Extension", 
        image: "Air-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "AIR_OUT", label: "Air Geräte (Max 128)", type: "bus", max: 128 }
        ] 
    },
    { 
        id: "lox_dali_extension", 
        name: "Loxone DALI Extension", 
        image: "Dali-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "DALI_1", label: "DALI Bus 1 (Max 64)", type: "bus", max: 64, isDaliBus: true }, 
            { id: "DALI_2", label: "DALI Bus 2 (Max 64)", type: "bus", max: 64, isDaliBus: true }
        ] 
    },
    { 
        id: "lox_relay_extension", 
        name: "Loxone Relay Extension", 
        image: "Relay-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "O_1", label: "Relais 1", type: "out" },
            { id: "O_2", label: "Relais 2", type: "out" }, 
            { id: "O_3", label: "Relais 3", type: "out" }, 
            { id: "O_4", label: "Relais 4", type: "out" },
            { id: "O_5", label: "Relais 5", type: "out" },
            { id: "O_6", label: "Relais 6", type: "out" }, 
            { id: "O_7", label: "Relais 7", type: "out" }, 
            { id: "O_8", label: "Relais 8", type: "out" },
            { id: "O_9", label: "Relais 9", type: "out" },
            { id: "O_10", label: "Relais 10", type: "out" }, 
            { id: "O_11", label: "Relais 11", type: "out" }, 
            { id: "O_12", label: "Relais 12", type: "out" },
            { id: "O_13", label: "Relais 13", type: "out" },
            { id: "O_14", label: "Relais 14", type: "out" }, 
            { id: "O_15", label: "Relais 15", type: "out" }, 
            { id: "O_16", label: "Relais 16", type: "out" }
        ] 
    },
    { 
        id: "lox_di_extension", 
        name: "Loxone DI Extension", 
        image: "DI-Extension.jpg", 
        power: 1.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "DI_1", label: "DI 1-10", type: "in" }, 
            { id: "DI_2", label: "DI 11-20", type: "in" }
        ] 
    },
    { 
        id: "lox_dimmer_extension", 
        name: "Loxone Dimmer Extension", 
        image: "Dimmer-Extension.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "DIM_1", label: "Dimmer 1-2", type: "out" }, 
            { id: "DIM_2", label: "Dimmer 3-4", type: "out" }
        ] 
    },
    { 
        id: "lox_modbus_extension", 
        name: "Loxone Modbus Extension", 
        image: "Modbus-Extension.jpg", 
        power: 1.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "MODBUS", label: "Modbus RTU", type: "bus", max: 32 }
        ] 
    },
    { 
        id: "lox_1wire_extension", 
        name: "Loxone 1-Wire Extension", 
        image: "1-Wire-Extension.jpg", 
        power: 1.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Link Bus"], 
        io: [
            { id: "ONEWIRE", label: "1-Wire Bus", type: "bus", max: 20 }
        ] 
    },

    // Tree / Air / Nano Devices
    { 
        id: "lox_nano_di_tree", 
        name: "Loxone Nano DI Tree", 
        image: "DI-Tree.jpg", 
        power: 0.2, 
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
        image: "Nano-2-Relay.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], 
        io: [
            { id: "I_1", label: "I1", type: "in" }, 
            { id: "I_2", label: "I2", type: "in" }, 
            { id: "O_1", label: "Relais 1", type: "out" }, 
            { id: "O_2", label: "Relais 2", type: "out" }
        ] 
    },
    { 
        id: "lox_touch_tree", 
        name: "Loxone Touch Tree", 
        image: "Touch-Tree.jpg", 
        power: 0.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Montagehöhe"], 
        io: [
            { id: "T_1", label: "Tasterpunkte 1-5", type: "in" }, 
            { id: "TEMP", label: "Temperatur", type: "in" }, 
            { id: "HUM", label: "Feuchtigkeit", type: "in" }
        ] 
    },
    { 
        id: "lox_touch_pure_tree", 
        name: "Loxone Touch Pure Tree", 
        image: "Touch-Pure.jpg", 
        power: 0.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast", "Montagehöhe"], 
        io: [
            { id: "T_1", label: "Tasterpunkte 1-5", type: "in" }, 
            { id: "TEMP", label: "Temperatur", type: "in" }, 
            { id: "HUM", label: "Feuchtigkeit", type: "in" }, 
            { id: "LIGHT", label: "Orientierungslicht", type: "out" }
        ] 
    },
    { 
        id: "lox_rgbw_tree", 
        name: "Loxone RGBW 24V Dimmer Tree", 
        image: "RGBW-Dimmer.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Leistung (W)", "Tree Ast"], 
        io: [
            { id: "PWM_1", label: "Kanal 1-4 (RGBW)", type: "out" }
        ] 
    },
    { 
        id: "lox_rgbw_air", 
        name: "Loxone RGBW 24V Dimmer Air", 
        image: "RGBW-Dimmer.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Leistung (W)", "Air Link"], 
        io: [
            { id: "PWM_1", label: "Kanal 1-4 (RGBW)", type: "out" }
        ] 
    },
    { 
        id: "lox_nano_dimmer_air", 
        name: "Loxone Nano Dimmer Air", 
        image: "Nano-Dimmer-Air.jpg", 
        power: null, 
        defaultPower: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Leistung (W)", "Montagehöhe", "Air Link"], 
        io: [
            { id: "I_1", label: "I1", type: "in" }, 
            { id: "I_2", label: "I2", type: "in" }, 
            { id: "O_1", label: "Dimmer", type: "out" }
        ] 
    },
    { 
        id: "lox_nano_io_air", 
        name: "Loxone Nano IO Air", 
        image: "Nano-IO-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], 
        io: [
            { id: "I_1", label: "I1", type: "in" }, 
            { id: "I_2", label: "I2", type: "in" }, 
            { id: "O_1", label: "Relais 1", type: "out" }, 
            { id: "O_2", label: "Relais 2", type: "out" }
        ] 
    },
    { 
        id: "lox_multi_air", 
        name: "Loxone Multi Extension Air", 
        image: "Multi-Extension-Air.jpg", 
        power: 1.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], 
        io: [
            { id: "DI_1", label: "DI 1-12", type: "in" }, 
            { id: "1WIRE", label: "1-Wire", type: "bus", max: 20 }, 
            { id: "O_1", label: "Relais 1-4", type: "out" }, 
            { id: "PWM", label: "PWM 1-4", type: "out" }
        ] 
    },
    { 
        id: "lox_dali_air", 
        name: "Loxone DALI Air", 
        image: "Dali-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], 
        io: [
            { id: "DALI_OUT", label: "DALI Geräte (Max 10)", type: "bus", max: 10, isDaliBus: true }
        ] 
    },
    { 
        id: "lox_tree_to_air", 
        name: "Loxone Tree to Air Bridge", 
        image: "Tree-to-Air.jpg", 
        power: 0.5, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], 
        io: [
            { id: "AIR_OUT", label: "Air Geräte (Max 50)", type: "bus", max: 50 }
        ] 
    },
    { 
        id: "lox_presence_tree", 
        name: "Loxone Präsenzmelder Tree", 
        image: "Presence-Tree.jpg", 
        power: 0.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Tree Ast"], 
        io: [
            { id: "PRES", label: "Präsenz", type: "in" }, 
            { id: "LUX", label: "Helligkeit", type: "in" }, 
            { id: "VOL", label: "Lautstärke", type: "in" }
        ] 
    },
    { 
        id: "lox_presence_air", 
        name: "Loxone Präsenzmelder Air", 
        image: "Presence-Tree.jpg", 
        power: 0.2, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Air Link"], 
        io: [
            { id: "PRES", label: "Präsenz", type: "in" }, 
            { id: "LUX", label: "Helligkeit", type: "in" }, 
            { id: "VOL", label: "Lautstärke", type: "in" }
        ] 
    },
    { 
        id: "lox_dali_rgbw", 
        name: "Dali-Dimmer", 
        image: "Dali-Dimmer.jpg", 
        power: null, 
        defaultPower: 1.0, 
        fields: ["S.-Nr.", "Geräte-Bez.", "Leistung (W)", "DALI Bus"], 
        io: [
            { id: "O_1", label: "Kanal (DALI)", type: "out" }
        ] 
    }
];
