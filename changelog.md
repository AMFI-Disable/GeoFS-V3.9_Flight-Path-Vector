# Changelog

All notable changes, mathematical updates, and version releases for GeoFS-V3.9 Flight Path Vector are documented in this file.

---

## [2.0.1] - Telemetry Precision And Reticle Stabilization

### Added
- **Gradual HSL Color Interpolation**: Dynamic color shift based on instantaneous vertical speed (calm green at zero VS, cool cyan in climb, amber/red in descent).
- **Drift Correction Geometry**: Vector compensation accounting for lateral wind shear and crosswind angles.

### Fixed
- **Coordinate Projection Safeguards**: Improved Earth-Centered, Earth-Fixed (ECEF) spatial vector calculation when crossing coordinate poles.
- **Canvas Reticle Clipping**: Prevented edge clipping when the reticle exceeds visible viewport boundaries.

---

## [2.0.0] - 3D Cartesian Engine Overhaul

### Added
- **3D Cartesian ECEF Projection**: True 3D spatial velocity vector calculated from pilot eye point projected dynamically onto Cesium 3D globe.
- **Glassmorphic Reticle Styling**: Reticle visuals aligned with real-world airliner head-up display symbology.

---

## [1.0.0] - Initial Production Release

Initial standalone release providing real-time flight path vector projection for GeoFS.
