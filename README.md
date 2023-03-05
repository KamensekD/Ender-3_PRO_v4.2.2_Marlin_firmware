# NOT TESTED YET - use with caution and at own risk!

### This is my take of zisismaras's marlin_auto_build to build Marlin firmware for Ender-3 Pro with 4.2.2 board

_____

# Ender-3 Pro v4.2.2 Marlin firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Ender-3 Pro with the stock creality 4.2.2(512K) board.  
You can find firmware downloads on the repository [releases](https://github.com/KamensekD/Ender-3-PRO-v4.2.2_Marlin-firmware/releases).  

**Important**
* Make sure you have a 4.2.2 512K flash board before installing. Some newer models come with 256K of flash. You can read more [here](https://github.com/MarlinFirmware/Marlin/issues/23596). If your board is the 256K variant you can fork the repo and change the `board_env`.
* All builds here use the default `A4988` stepper drivers, you can fork and change that if you have different ones. To find out which drivers you have there is a little marking on the sd card slot. More info [here](https://github.com/MarlinFirmware/Configurations/pull/633#issuecomment-995206382).

## Builds

### $${default{red}}$$ - the default Marlin configuration for Ender-3 Pro.

with these minimal differences:
- added Bed tramming menu to move around the corners
- enables `HOST_ACTION_COMMANDS` for those, using octoprint.


### *custom* - my customized firmware modifications that suit me and might or might not be good for you, so use with caution!

- added Bed tramming menu to move around the corners
- enables `HOST_ACTION_COMMANDS` for those, using octoprint.
- [linear advance](https://marlinfw.org/docs/features/lin_advance.html).     
Linear advance `K factor` is set to `0`. You can read the marlin docs on how to find and set a good value. There are also numerous videos on youtube.  
- [automatic leveling](https://marlinfw.org/docs/gcode/G029-abl-bilinear.html)  
**Note**: Only tested with a 3D-touch (CR-touch and BL-touch should work as well)
The grid is configured to be symmetrical with 45mm margin on left and right and 15mm on front and back.  
All probe offsets are set to `0`. There are a lot of videos on how to measure and set them.  
The build enables the offset wizard to simplify the Z-offset measurement.  
**Important**: The build assumes you are using the dedicated BL-touch port on the board and you have the Z-stop disconnected.
The [M48 accuracy test](https://marlinfw.org/docs/gcode/M048.html) is also enabled in case you want to test your probe.
- ...

_____

# Build you own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on github.

## Important: in case of having the problem of failing at "creating release"

I had a lot of trouble before successfully building the first firmware release this way, but finally fount the cause.
Before, after every succesfull build process failed at "creating release" with:

## "Request failed with status code 403" and "Error: Process completed with exit code 1."

## Solution:

in order for marlin_auto_build to work as intended, you have to select Settings tab in your forked repository and select Actions / General. Then in Workflow permissions you have to select Read and Write permisions (by default only read permissions are allowed). After this change, everything worked without problems :)
