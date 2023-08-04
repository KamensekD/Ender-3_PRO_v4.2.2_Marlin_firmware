module.exports = {
    extends: "builds/base.js",
//    active: false,    // disable this build
//    only: "stable",   // build only stable or nightly branch
//    only: "nightly",   // build only stable or nightly branch

    meta: {
        stable_name: "ender3pro_v4.2.2_{{current_date}}_M{{marlin_version}}-custom",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}_M2.1.x_bugfix{{marlin_version}}-custom"
    },
   

// for valid syntax refer to: https://github.com/zisismaras/marlin_auto_build
    configuration:     {   // "Configuration.h" customizations
        enable: [


            ["STRING_CONFIG_H_AUTHOR", "(KamensekD)"],
            ["CUSTOM_MACHINE_NAME", "Ender-3 Pro v4.2.2"],

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

            


        ],
        disable: [


            "POWER_LOSS_RECOVERY",   //disable this to save SD card writes for each layer
            "SDCARD_READONLY",       //read/write access to SD card


        ]
    }

};
