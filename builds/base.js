module.exports = {
    //active: false,    // disable this build
    //only: "stable",   // build only stable or nightly branch
    //only: "nightly",   // build only stable or nightly branch

    extends: "builds/default.js",

    meta: {
        stable_name: "ender3pro_v4.2.2_{{current_date}}_M{{marlin_version}}-base",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}_M2.1.x_bugfix{{marlin_version}}-base"
    },

    configuration: {
        enable: [


            
            ["CUSTOM_MACHINE_NAME", "Ender-3 Pro v4.2.2"],
            ["STRING_CONFIG_H_AUTHOR", "(KamensekD)"],

            
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

    
    
    
    
    configuration_adv: {
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

        
        ]
    }


    
};
