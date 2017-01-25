# Angular-starter-Ng6w [![npm version](https://badge.fury.io/js/angular-starter-ng6w.svg)](http://badge.fury.io/js/angular-starter-ng6w)

[![NPM](https://nodei.co/npm/angular-starter-ng6w.png?downloads=true)](https://nodei.co/npm/angular-starter-ng6w/)

> The de facto starter repo for building scalable apps with [Angular](https://angularjs.org), [ES6](https://git.io/es6features), and [Webpack](http://webpack.github.io/)

This repo serves as a minimal starter for those looking to get up-and-running with Angular and ES6, using [Webpack](http://webpack.github.io/) for the build process.
**This seed is not a Yeoman generator.** It's a minimal starter kit. **These are its features**:
* The best practice in directory/file organization for Angular
* A ready-to-go build system for working with [ES6](https://git.io/es6features)
* Uses [UI-Router](https://ui-router.github.io/)
* Refreshing the browser and rebuilding on file changes
* Written based on angular style guide (ES2015) [angular-styleguide](https://github.com/toddmotto/angular-styleguide)

## Build System
Angular-starter-Ng6w uses NPM scripts and Webpack for build system.

`Webpack` handles all file-related concerns:
* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Refreshing the browser and rebuilding on file changes
* Bundling the app
* Loading all modules

## File Structure
We use a components with Angular-starter-Ng6w for own stylesheets, templates, controllers, routes,
services. This encapsulation allows us the comfort of isolation and structural locality. Here's how it
looks:
```
client
⋅⋅app/
⋅⋅⋅⋅app.module.js * app entry file
⋅⋅⋅⋅app.component.js * app "directive"
⋅⋅⋅⋅app.router.js * app router
⋅⋅⋅⋅index.html * app template
⋅⋅⋅⋅common/ * functionality pertinent to several components propagate into this directory
⋅⋅⋅⋅pages/ * functionality pertinent to several components propagate into this directory
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅components.module.js * components entry file
⋅⋅⋅⋅⋅⋅date/ * date component
⋅⋅⋅⋅⋅⋅⋅⋅date.module.js * date entry file (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅date.component.js * date "directive"
⋅⋅⋅⋅⋅⋅⋅⋅date.controller.js * date controller
⋅⋅⋅⋅⋅⋅⋅⋅date.html * date template
```

# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`

## Installing
* `clone` this repo
* `npm install` to install dependencies

## Running the App
Angular-starter-Ng6w uses `webpack`. After you have installed all dependencies, you may run the app. Running `npm start` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.

___

enjoy — [**Angular-starter-Ng6w**](https://github.com/dulin666/Angular-starter-Ng6w)
