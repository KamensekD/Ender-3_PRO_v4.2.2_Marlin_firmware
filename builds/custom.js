module.exports = {
    //    extends: "builds/base.js",
    //active: false,    // disable this build
    //only: "stable",   // build only stable or nightly branch
    //only: "nightly",   // build only stable or nightly branch
    board_env: "STM32F103RE_creality",
    min_version: "2.1.2",
    
    meta: {
        stable_name: "ender3pro_v4.2.2_{{current_date}}_M{{marlin_version}}-custom",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}_M2.1.x_bugfix{{marlin_version}}-custom"
    },

    based_on: {     // default Ender-3 Pro Marlin example config
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },



    
    // for valid syntax refer to: https://github.com/zisismaras/marlin_auto_build
    configuration:     {   // "Configuration.h" customizations
        enable: [


            ["STRING_CONFIG_H_AUTHOR", "(KamensekD)"],
            ["CUSTOM_MACHINE_NAME", "Ender-3 Pro v4.2.2"],


            //Defaults
            ["X_BED_SIZE", 235],
            ["Y_BED_SIZE", 235],
            ["X_MAX_POS", 250],  // max for my machine
            ["Y_MAX_POS", 240],  // max for my machine

            
            // Homing speeds (linear=mm/min, rotational=°/min)
            ["HOMING_FEEDRATE_MM_M", [ (120*60), (90*60), (10*60) ]],


            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 100]],
            ["DEFAULT_MAX_FEEDRATE", [500, 500, 25, 50]],            // Default Max Feed Rate (mm/s)
            ["DEFAULT_MAX_ACCELERATION", [500, 500, 100, 2500]],     // Default Max Feed Rate (mm/s)
            ["DEFAULT_ACCELERATION", 250],                           // X, Y, Z ... and E acceleration for printing moves
            ["DEFAULT_TRAVEL_ACCELERATION", 500],                    // X, Y, Z ... acceleration for travel (non printing) moves
            ["DEFAULT_RETRACT_ACCELERATION", 500],                   // E acceleration for retracts


            //Preheat Constants
            ["PREHEAT_1_LABEL", "PLA"],
            ["PREHEAT_1_TEMP_HOTEND", 200],
            ["PREHEAT_1_TEMP_BED", 50],
            ["PREHEAT_1_FAN_SPEED", 128],

            
            ["PREHEAT_2_LABEL", "PETG"],
            ["PREHEAT_2_TEMP_HOTEND", 225],
            ["PREHEAT_2_TEMP_BED", 50],
            ["PREHEAT_2_FAN_SPEED", 128],

            
            //["PREHEAT_3_LABEL", "pre-heat"],
            //["PREHEAT_3_TEMP_HOTEND", 180],
            //["PREHEAT_3_TEMP_BED", 40],


            //prevent a single extrusion longer than EXTRUDE_MAXLENGTH.
            "PREVENT_LENGTHY_EXTRUDE",
            ["EXTRUDE_MAXLENGTH", 500],


            //LCD Menu options
            "PID_EDIT_MENU",         // Add PID editing to the "Advanced Settings" menu. (~700 bytes of flash)
            "PID_AUTOTUNE_MENU",     // Add PID auto-tuning to the "Advanced Settings" menu. (~250 bytes of flash)
            "LCD_BED_LEVELING",
            "LCD_BED_TRAMMING",
            "MESH_EDIT_MENU",


            //Enable speaker
            "SPEAKER",


            //Stepper Driver Types
            //"Creality 4.2.2 boards come with a variety of stepper drivers.
            //Check the board label (typically on SD Card module) and set the correct *_DRIVER_TYPE!
            //(C=HR4988, E=A4988, A=TMC2208, B=TMC2209, H=TMC2225, H8=HR4988)
            //* Use TMC2208/TMC2208_STANDALONE for TMC2225 drivers and TMC2209/TMC2209_STANDALONE for TMC2226 drivers.
            //* Options: A4988, A5984, DRV8825, LV8729, TB6560, TB6600, TMC2100,
            //*          TMC2130, TMC2130_STANDALONE, TMC2160, TMC2160_STANDALONE,
            //*          TMC2208, TMC2208_STANDALONE, TMC2209, TMC2209_STANDALONE,
            //*          TMC26X,  TMC26X_STANDALONE,  TMC2660, TMC2660_STANDALONE,
            //*          TMC5130, TMC5130_STANDALONE, TMC5160, TMC5160_STANDALONE
            ["X_DRIVER_TYPE",  q`A4988`],
            ["Y_DRIVER_TYPE",  q`A4988`],
            ["Z_DRIVER_TYPE",  q`A4988`],
            ["E0_DRIVER_TYPE", q`A4988`],
            "NO_CREALITY_422_DRIVER_WARNING",

            
            //eliminates vibration during printing by fitting a Bézier curve to move acceleration
            "S_CURVE_ACCELERATION",


            //Adds the G12 command to perform a nozzle cleaning process
            "NOZZLE_CLEAN_FEATURE",


            //Auto Level settings
            ["GRID_MAX_POINTS_X", 5],            // number of points in x direction
            ["MESH_INSET", 1],                   // Set Mesh bounds as an inset region of the bed

            
            "BLTOUCH",
            ["Z_MIN_PROBE_PIN", q`PB1`],

            
            "AUTO_BED_LEVELING_UBL",  // most advanced bed leveling system combining the features and benefits of other systems
            "RESTORE_LEVELING_AFTER_G28",   // normally G28 leaves leveling disabled; this options to restore prior leveling state
            "UBL_MESH_WIZARD",


            //#define G26_MESH_VALIDATION
            "G26_MESH_VALIDATION",
            ["MESH_TEST_NOZZLE_SIZE",0.4],  // (mm) Diameter of primary nozzle.
            ["MESH_TEST_LAYER_HEIGHT",0.2], // (mm) Default layer height for G26.
            ["MESH_TEST_HOTEND_TEMP",225],  // (°C) Default nozzle temperature for G26.
            ["MESH_TEST_BED_TEMP",50],      // (°C) Default bed temperature for G26.
            ["G26_XY_FEEDRATE",20],         // (mm/s) Feedrate for G26 XY moves.
            ["G26_XY_FEEDRATE_TRAVEL",100], // (mm/s) Feedrate for G26 XY travel moves.
            ["G26_RETRACT_MULTIPLIER",1.0], // G26 Q (retraction) used by default between mesh test elements.

            
            "Z_SAFE_HOMING",
            "USE_PROBE_FOR_Z_HOMING",

            ["XY_PROBE_FEEDRATE", q`(150*60)`],
            ["Z_PROBE_FEEDRATE_FAST", q`(15*60)`],
            ["Z_PROBE_FEEDRATE_SLOW", q`(4*60)`],

            
            "PREHEAT_BEFORE_LEVELING",
            ["LEVELING_NOZZLE_TEMP", 180],
            ["LEVELING_BED_TEMP", 50],

            
            ["Z_CLEARANCE_DEPLOY_PROBE", 6],     // Z Clearance for Deploy/Stow
            ["Z_CLEARANCE_BETWEEN_PROBES", 4],
            ["Z_CLEARANCE_MULTI_PROBE", 4],
                 

            ["DEFAULT_LEVELING_FADE_HEIGHT", 40],
            ["NOZZLE_TO_PROBE_OFFSET", [-27, 0, -1.5]],
            // my printer's probe offsets: M851 X-27.00 Y0.00 Z-1.50 ; (mm)


            //Bed Tramming also center point
            "BED_TRAMMING_INCLUDE_CENTER",


            //M48 test
            "Z_MIN_PROBE_REPEATABILITY_TEST",

            
            "USB_FLASH_DRIVE_SUPPORT",    //

        ],
        disable: [


            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN",
            "MULTIPLE_PROBING",
            "EXTRA_PROBING",

        ]
    },



    
    configuration_adv: {   // "Configuration_adv.h" customizations
        enable: [


            //for Octoprint
            "HOST_ACTION_COMMANDS",

            
            "HOST_STATUS_NOTIFICATIONS",

            
            //for Auto Level
            ["PROBING_MARGIN_LEFT", 20],
            ["PROBING_MARGIN_RIGHT", 20],
            ["PROBING_MARGIN_FRONT", 20],
            ["PROBING_MARGIN_BACK", 20],

            
            ["MESH_MIN_X", 25],
            ["MESH_MIN_Y", 25],
            ["MESH_MAX_X", 210],
            ["MESH_MAX_Y", 210],
//            ["MESH_MIN_X", MESH_INSET],
//            ["MESH_MIN_Y", MESH_INSET],
//            ["MESH_MAX_X", X_BED_SIZE - (MESH_INSET)],
//            ["MESH_MAX_Y", Y_BED_SIZE - (MESH_INSET)],


            ["BLTOUCH_HS_MODE", false],     // speedy mode - not retracting probe for each point
            ["BLTOUCH_DELAY", 500],         // lower if stable, otherwise let it at 500
            

            "BABYSTEPPING",
            "BABYSTEP_ZPROBE_OFFSET",
            "PROBE_OFFSET_WIZARD",


            "ASSISTED_TRAMMING",
            "ASSISTED_TRAMMING_WIZARD",
            "REPORT_TRAMMING_MM",


            //Enable Linear Advance and set default K to 0.5
            "LIN_ADVANCE",
            ["ADVANCE_K", 0.5],
            "ALLOW_LOW_EJERK",
            "EXPERIMENTAL_SCURVE",    // removed in bugfix 2.1.x, needed for stable 2.1.2 Marlin
             //"LIN_ADVANCE and S_CURVE_ACCELERATION may not play well together! Enable EXPERIMENTAL_SCURVE to continue."


            //handles M108, M112, M410, M876 imidiately
            "EMERGENCY_PARSER",


            // If G28 contains XY do a diagonal move first
            // "QUICK_HOME",


            //Thermal protection settings            
            ["THERMAL_PROTECTION_BED_PERIOD",30],
            ["THERMAL_PROTECTION_BED_HYSTERESIS",3],
            ["WATCH_TEMP_PERIOD",30],
            ["WATCH_TEMP_INCREASE",3],
            ["WATCH_BED_TEMP_PERIOD",60],
            ["WATCH_BED_TEMP_INCREASE",3],


            // my Ender 3 Pro has 24V power supply, for some reason default for E3P was 12V?
            ["CHOPPER_TIMING",  q`CHOPPER_DEFAULT_24V`],


        ],
        disable: [


            "POWER_LOSS_RECOVERY",   //disable this to save SD card writes for each layer
            "SDCARD_READONLY",       //read/write access to SD card


        ]
    }


};
