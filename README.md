# GeoFS-V3.9_Flight-Path-Vector

![Version](https://img.shields.io/badge/Version-V2.0.0-3b82f6?style=flat-square&logo=git&logoColor=white)
![Ecosystem](https://img.shields.io/badge/GeoFS--V3.9-Flight_Path_Vector-0284c7?style=flat-square&logo=cesium&logoColor=white)
![Status](https://img.shields.io/badge/Status-Stable-10b981?style=flat-square&logo=lighthouse&logoColor=white)

The 3D Flight Path Vector reticle for **GeoFS-V3.9**. Projects flight deck trajectory onto the Cesium canvas, correcting for drift and wind shear.

## ✨ Features

- **🎯 3D Cartesian Projection**: Calculates the true 3D spatial velocity vector of the pilot's eye point in Earth-Centered Earth-Fixed (ECEF) coordinates, projecting it dynamically onto the 3D Cesium globe.
- **🌈 Gradual HSL Color Transition**: Dynamic, gradual color shifts based on vertical speed. The reticle is bright green at 0 VS, shifting to cool sky blue/cyan during climbs and alert red/orange during descents.
- **🚨 Dynamic AoA & Stall Alerts**: Integrates safety-critical HUD warnings, turning the reticle pure RED if critical Angle of Attack is exceeded or if the aircraft stalls.
- **🛫 Continuous Ground Visibility**: The reticle remains visible and active on the ground to assist during takeoff rolls and landing rollouts.
- **⌨️ Instant Toggle**: Press **'L'** in-game to toggle the FPV reticle display on or off.

## 🛠️ Installation

### Standalone (Tampermonkey)

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension.
2. Install the script via [**Greasy Fork**](https://greasyfork.org/en/scripts/581514-geofs-v3-9-flight-path-vector).
3. Refresh GeoFS and the module will automatically initialize alongside the HUD.

*© 2026 _init. Part of the [GeoFS-V3.9_Ecosystem](https://sites.google.com/view/geofs-v39-ecosystem/home).*
