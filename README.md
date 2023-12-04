# Learn React 🚀🚀
# Types of Dependency
- Dev Dependency - eg: Parcel is a bundler required during development
- Normal Dependency - Parcel is not required in production
# Carrot ^ and Tilde ~
- ^ eg: parcel current version is 2.8.3 if there is minor upgrade to 2.8.4 parcel will automatically install 2.8.4
- ~ upgrades the Major version (eg: 3.0.1). Not recommended generally.
# Package and Package Lock JSON files
- Dependency configuration manager for npm. Keep tracks of version installed
- package.json file tracks version installed and based on ^ or ~ installs approx version.
- Package-lock.json locks the exact version (eg: 2.8.3) of dependency installed
- lock.json keeps hash of the version - which validate the exact version is installed on production machine.
# Parcel
- Dev Build
- Local Server
- Hot Module Replacement (HMR)
- Parcel using File Watching algorithim - written in C++
- Parcel is caching builds- gives faster builds
- Image optimization
- Minification
- Bundling
- Compressing