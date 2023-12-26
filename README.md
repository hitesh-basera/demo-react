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
# Default Export and Named Export
- Two type of Export/Import
- Default Export/Import
- export default Component;
- import Component from "path";
- Named Export/Import : when export multiple objects/component use named export
- export const Component;
- import {Component} from "path";
# Good practice small not more than 100 lines

# React Hooks : Normal JS Utility functions
- useState() : give superpowerful state variables in react - whenever state variable updates react will re-render components.
- useEffect()

# React Fiber
- Reconciliation algorithim, virtual DOM
- React is fast because react is efficiently able to manipulat DOM.
- virtual DOM - is representation of actual DOM
- differntial alogrithim
- incremental rendering