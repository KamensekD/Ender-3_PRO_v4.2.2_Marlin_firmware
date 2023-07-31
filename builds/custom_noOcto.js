module.exports = {
    extends: "builds/custom.js",
//    board_env: "STM32F103RE_creality",
//    active: false,    // disable this build
//    only: "stable",   // build only stable or nightly branch
//    only: "nightly",   // build only stable or nightly branch


    meta: {
        stable_name: "ender3pro_v4.2.2_M{{marlin_version}}-customNO-{{current_date}}",
        nightly_name: "ender3pro_v4.2.2_M2.1.x-bugfix-customNO-{{current_date}}"
    },
//        stable_name: "ender3pro_v4.2.2_M{{marlin_version}}-customNO-{{current_date}}",
//        nightly_name: "ender3pro_v4.2.2_{{current_date}}-customNO-{{uid}}"

                           // for valid syntax refer to:          https://github.com/zisismaras/marlin_auto_build
    
    configuration_adv: {   // "Configuration_adv.h" customizations
        enable: [

//            "HOST_ACTION_COMMANDS",

        ],
        disable: [

            //no Octoprint
            "HOST_ACTION_COMMANDS"


        ]
    }

};
