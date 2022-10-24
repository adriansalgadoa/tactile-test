# Tactile React Interview Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### App Architecture
The app contains a main App.tsx file and a components/ folder which contains VersionsEditor and Input component directories.
VersionsEditor component is the "container" of all the UI base components (Title, Buttons, Inputs) and handles the business
logic (keeping track of added versions, validating versions, showing error messages, etc).

All UI related components should have their own directory, but being the case that Input and Select are really similar, they are
stored on the same directory. They could be improved upon in the future. I placed them as separate files although logic is pretty similar.

#### Suggestions
Other UI elements (Title, Button, VersionTag, DeleteButton) could be moved into their own directories to ensure reusable components
that follow the same consistent design. This should be done for most basic components.

Things that could be improved are:
- Add tests for Input and Select component
- Create separate directories for Button, Title and VersionTag components (to make a reusable design system UI)

### Todo
- [x] Use design
- [x] Prod and Test versions
- [x] All operators
- [x] Error states (text as version and same version)
- [x] Remove version
- [x] Typescript
- [x] Test
- [x] Between version operator
- [x] Document
- [ ] Version overlapping
