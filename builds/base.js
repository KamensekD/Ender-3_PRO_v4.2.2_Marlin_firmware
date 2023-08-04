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

            
            ["STRING_CONFIG_H_AUTHOR", "(KamensekD)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"

            
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
      
        
        ]
    },
    configuration_adv: {

        
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"

        
        ]
    }


    
};
