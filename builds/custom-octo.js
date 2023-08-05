module.exports = {
//active: false,    // disable this build
//only: "stable",   // build only stable or nightly branch
//only: "nightly",  // build only stable or nightly branch

    
    extends: "builds/custom.js",

    
    meta: {
        stable_name: "ender3pro_v4.2.2_{{current_date}}_M{{marlin_version}}-custom-octo",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}_M2.1.x_bugfix{{marlin_version}}-custom-octo"
    },  //meta


    configuration: { // "Configuration.h" customizations - for valid syntax refer to: https://github.com/zisismaras/marlin_auto_build
        enable: [

        ],  //enable
        disable: [
          
        ],  //disable
    },  //configuration

  
    configuration_adv: { // "Configuration_adv.h" customizations - for valid syntax refer to: https://github.com/zisismaras/marlin_auto_build
        enable: [

            //for Octoprint
            "HOST_ACTION_COMMANDS",
            
        ],  //enable
        disable: [

        ],  //disable
    },  //configuration_adv
};  //module.exports
