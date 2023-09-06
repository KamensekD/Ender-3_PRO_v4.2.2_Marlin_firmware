module.exports = {
//active: false,    // disable this build
//only: "stable",   // build only stable or nightly branch
//only: "nightly",   // build only stable or nightly branch
    
    board_env: "STM32F103RE_creality",
//    min_version: "2.1.2",
    
    meta: {
        stable_name: "ender3pro_v4.2.2_{{current_date}}_M{{marlin_version}}_default",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}_M2.1.x_bugfix{{marlin_version}}_default"
    },


    based_on: {     // default Ender-3 Pro Marlin example config
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
//        stable_branch: "2.1.2.1",                      // doesn't seem to work

        
        nightly_branch: "bugfix-2.1.x"
//        stable_branch: "release-2.1.2.1",              // doesn't seem to work


    },
};
