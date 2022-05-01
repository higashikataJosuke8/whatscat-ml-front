# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased] - 2022-04-dd 

### Added
- Added CHANGELOG.md
- Added ImageCapturePage and ResultsPage components to improve code cleanliness and clarity
- Created a new function to handle the fetch API once the confirmation dialog is closed
- Added a loading and input unavailable component

### Changed
- Revised README.md
- Edited no-image-present.png
- Combined the Header and HeaderCancel component
- Made some code adjustments to improve code cleanliness, clarity, and consistency

### Fixed
- Fixed an issue where the results would not render due to the results being unavailable once the components were rendered.
- Fixed an issue where some states would not reset to their original value (when they're supposed to) once the user is in the Image Capture page.