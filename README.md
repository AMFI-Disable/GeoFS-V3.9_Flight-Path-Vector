# GeoFS-V3.9_Flight-Path-Vector

![Version](https://img.shields.io/badge/Version-v2.0.0-3b82f6?style=flat-square&logo=git&logoColor=white)
![Ecosystem](https://img.shields.io/badge/GeoFS--V3.9-Flight_Path_Vector-06b6d4?style=flat-square&logo=boeing&logoColor=white)
![Status](https://img.shields.io/badge/Status-Stable-10b981?style=flat-square&logo=lighthouse&logoColor=white)

The precision HUD velocity vector projection system for **GeoFS-V3.9**. This module provides a high-visibility flight path vector (FPV) that indicates the aircraft's true trajectory through the air, facilitating perfect approaches and situational awareness.

## ✨ Features

- **🎯 3D ECEF Cartesian Projection**: Calculates the true 3D spatial velocity vector of the pilot's eye point in Earth-Centered Earth-Fixed (ECEF) coordinates, projecting it dynamically onto the 3D Cesium globe (unlike traditional static 2D HUD estimations).
- **🌈 Gradual HSL Color Transition**: Dynamic, gradual color shifts based on vertical speed. The reticle is bright green (`hsl(120, 100%, 50%)`) at 0 VS, shifting to cool sky blue/cyan (`Hue = 200`) during climbs (up to $+3000$ ft/min) and shifting to alert red/orange (`Hue = 0`) during descents (down to $-3000$ ft/min).
- **🚨 Dynamic AoA & Stall Alerts**: Integrates safety-critical HUD warnings, turning the reticle pure `RED` if critical Angle of Attack ($> 14^\circ$) is exceeded or if the aircraft stalls.
- **🛫 Continuous Ground Visibility**: The reticle remains visible and active on the ground to assist during takeoff rolls and landing rollouts.
- **⌨️ Instant Toggle**: Press **'L'** in-game to toggle the FPV reticle display on or off.
- **🚀 Zero-Latency Standalone**: Optimized for minimal performance impact with a robust CDN loader architecture.

## 🛠️ Installation

### Standalone (Tampermonkey)

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension.
2. Install the script via [**Greasy Fork**](https://greasyfork.org/en/scripts/581514-geofs-v3-9-flight-path-vector).
3. Press **'L'** in-game to toggle the vector display.

*© 2026 _init. Part of the [GeoFS-V3.9_Ecosystem](https://sites.google.com/view/geofs-v39-ecosystem/home).*
