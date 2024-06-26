This is my take of [zisismaras](https://github.com/zisismaras)'s **[marlin_auto_build](https://github.com/zisismaras/marlin_auto_build)** (it actually uses my fork [kamensekd/marlin_auto_build](https://github.com/KamensekD/marlin_auto_build) with following [differences](https://github.com/zisismaras/marlin_auto_build/compare/master...KamensekD:marlin_auto_build:Debug))
to automatically build latest default and customized [Marlin](https://github.com/MarlinFirmware/Marlin) firmware for **Ender-3 Pro** with **4.2.2** board.

Every day it checks for [latest Marlin versions](https://marlinfw.org/meta/download/) ( [latest stable](https://github.com/MarlinFirmware/Marlin/releases/latest)/[check](https://api.github.com/repos/MarlinFirmware/Marlin/releases/latest) - [latest bugfix 2.1.x](https://github.com/MarlinFirmware/Marlin/commits/bugfix-2.1.x)/[check](https://api.github.com/repos/MarlinFirmware/Marlin/commits?sha=bugfix-2.1.x&per_page=1)
) ; if updates exist, it builds new firmwares.

```diff
! PARTLY TESTED - Stable version doesn't seem to flash on my printer, **bugfixed Nightly** versions seem to work OK though
! In any case use with caution and at own risk !
```

# Ender-3 Pro v4.2.2 Marlin firmware

Here You can find Marlin firmware builds for the Ender-3 Pro with the stock creality 4.2.2(512K) board.  
You can find firmware downloads on the repository [releases](https://github.com/KamensekD/Ender-3-PRO-v4.2.2_Marlin-firmware/releases).  

**Important**
* Make sure you have a 4.2.2 512K flash board before installing my customized builds. Some newer models come with 256K of flash. You can read more [here](https://github.com/MarlinFirmware/Marlin/issues/23596). If your board is the 256K variant you can fork the repo and change the `board_env`. Check also [Marlin Firmware on Creality Board – Complete Guide](https://3dprintscape.com/marlin-firmware-on-creality-board-complete-guide/?utm_content=cmp-true) for a lot of usefull info.
* All builds here use the default `A4988` stepper drivers, you can fork and change that if you have different ones. To find out which drivers you have there is a little marking on the sd card slot. More info [here](https://github.com/MarlinFirmware/Configurations/pull/633#issuecomment-995206382).

<br>

## Builds
Different firmware builds are available. They are based on configuration files in [builds](https://github.com/KamensekD/Ender-3_PRO_v4.2.2_Marlin_firmware/tree/master/builds) folder.
<br>Check **[Zisimaras Marlin_Auto_Build](https://github.com/zisismaras/marlin_auto_build)** for valid syntax of builds configuration files and **[Configuring Marlin](https://marlinfw.org/docs/configuration/configuration.html)** for details of every Marlin setting.

<br>

### `_default`
___

**unchanged default Marlin configuration for Ender-3 Pro based on [default example configuration](https://github.com/MarlinFirmware/Configurations/tree/bugfix-2.1.x/config/examples/Creality/Ender-3%20Pro/CrealityV422)**

<br>

### `custom`
___

**my customized firmware modifications that suit my needs and might or might not be good for you, so use with caution!**

- adds options to menu: **Bed Tramming**, **Tramming Wizard**, **Bed Leveling**, **Probe Offset Wizzard**, **PID Edit**, **Mesh Edit**, **Autotune**, 
- enables [G29 UBL Automatic Leveling on 5x5 mesh](https://marlinfw.org/docs/gcode/G029-ubl.html),  
**Note**: Only tested with a 3D-touch (CR-touch and BL-touch should work as well).  
The grid is configured to be symmetrical with 20mm margin on left and right and 10mm on front and back.  
Probe offsets are set to my probe, which is `-27, 0, -1.5`. There are a lot of videos on how to measure and set/change them.  
The build enables the offset wizard to simplify the Z-offset measurement.  
**Important**: The build assumes you are using the dedicated BL-touch port on the board and you have the Z-stop disconnected.  
Bed and probe are preheated before probing to 50/180°C (PREHEAT_BEFORE_LEVELING) and Leveling Fade height increase from 10 to 40mm.
The [M48 Probe Accuracy Test](https://marlinfw.org/docs/gcode/M048.html) is also enabled in case you want to test your probe.  
- enables [Linear Advance](https://marlinfw.org/docs/features/lin_advance.html),  
Linear advance `K factor` is set to `0.5`. You can read the marlin docs on how to find and set a good value.  
There are also numerous videos on youtube.  
- enables [G12 Clean Nozzle Feature](https://marlinfw.org/docs/gcode/G012.html)
- enables [G35 Tramming Assistant](https://marlinfw.org/docs/gcode/G035.html)
- changes default Preheat Constants from PLA/ABS to PLA(200/50) and PETG(225/50)
- disables Continue after Power-Loss to increase SD card life,
- enables Emergency Parser for [M108](https://marlinfw.org/docs/gcode/M108.html), [M112](https://marlinfw.org/docs/gcode/M112.html), [M410](https://marlinfw.org/docs/gcode/M140.html), [M876](https://marlinfw.org/docs/gcode/M876.html),  
- changes some Thermal protection settings,  
- adds/changes/enforces some other settings:  
DEFAULT_TRAVEL_ACCELERATION 500, DEFAULT_AXIS_STEPS_PER_UNIT { 80, 80, 400, 100 },  
S_CURVE_ACCELERATION, XY_PROBE_FEEDRATE (150*60), Z_PROBE_FEEDRATE_FAST (6*60),  
Z_CLEARANCE_DEPLOY_PROBE 5, Z_CLEARANCE_BETWEEN_PROBES 4,  
X_MAX_POS 250 (to let the probe almost reach bed end), MESH_INSET 5, Z_SAFE_HOMING,  
BABYSTEPPING, EXTRUDE_MAXLENGTH 500, CHOPPER_DEFAULT_24V,...  

<br>

### `custom-octo`
___
**same as custom with some additional configurations changes:**

- enables `HOST_ACTION_COMMANDS` for those, using [OctoPrint](https://octoprint.org/),

<br><br>
___

**TODO**
- (check [M115](https://marlinfw.org/docs/gcode/M115.html))

<br><br>

# Build you own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on github.

## Important tip in case of building process failing at "creating release"

I had a lot of trouble before successfully building custom firmware release this way, because after every succesfull "build", process failed at "creating release" with:

**"Request failed with status code 403"** and **"Error: Process completed with exit code 1."**

### Solution:

in order for marlin_auto_build to work as intended, you have to select **Settings** tab in your repository and select **Actions / General**. Then you have to select **Read and Write permisions** (by default only read permissions are allowed) in **Workflow permissions**. After this change, everything worked without problems for me :)
