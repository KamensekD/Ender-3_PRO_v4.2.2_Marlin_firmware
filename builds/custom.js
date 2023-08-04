module.exports = {
    extends: "builds/base.js",
//    active: false,    // disable this build
//    only: "stable",   // build only stable or nightly branch
//    only: "nightly",   // build only stable or nightly branch

    meta: {
        stable_name: "ender3pro_v4.2.2_{{current_date}}_M{{marlin_version}}-custom",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}_M2.1.x_bugfix{{marlin_version}}-custom"
    },

};
