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
      
        
        ]
    },
    configuration_adv: {

        
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"

        
        ]
    }


    
};
