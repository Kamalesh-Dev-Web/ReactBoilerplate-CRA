# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

Builds the app for development to the `build` folder.\
It correctly bundles React for development using development environment variables and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build:dev`

Builds the app for development to the `build` folder.\
It correctly bundles React for development using development environment variables and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build:prod`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build:qa`

Builds the app for qa to the `build` folder.\
It correctly bundles React for quality using qa environment variables and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run test`

Runs all the unit tests file under the src folder with react testing library.

### `npm run coverage`

Runs all the unit tests and gives the coverage of unit tests.

![alt text](./src/assets/readme/coverage.png 'Coverage Report')

## Pre-commit hook Added

In `.husky/_/pre-commit` file you can add precommit rules to run before you push the code to the repo.

## Material UI library Added

Material UI Library and `theme.js` file is added. Using this file we can have a theme for the app and will ease our work in changing our app theme.

## Folder System To Be Followed

Components : Global components can be inside the `src/components` folder

Containers : Containers for pages can be placed inside the `src/containers/{pageName}/index.js`

Layouts : Different layouts for the components or pages can be inside a layout folder on respective container or component (example: `src/containers/{pageName}/layouts/{layoutName}.js`)

![alt text](./src/assets/readme/folder.png 'Folder Structure')

## `Redux Added`

In `src/redux` the whole redux toolkit setup is done and ready to use add your own reducers creating a `{yourSlice}Slice.js` and add it to the redux store.
