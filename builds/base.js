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
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ]
    }


    
};
