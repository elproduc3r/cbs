# Watch Live CBS Sports
## SASS
I chose SASS to style most of the elements to maintain as much SSR as possible for performance. `styled-components` seems to not be well supported with the latest version of Next. However, since the `background` element is more dynamic, thus client side, I chose to use a style object which allows the component to render server side and rerender client side when the `button` is clicked (colors change). I proved this renders server side by disabling javascript in the browser and seeing the default colors.
## Background Transition
Since the gradient is done on `background-image`, which isn't animatable, I applied the gradient on an absolute positioned div an position it behind all of the rest of the content. Absolute position was only applied to the `background-gradient` so the rest of the page would follow the natural flow. This was simpler to implement than using flex.
## `background` Colors
I only use dark colors that have a high contrast with the white letters to be compliant with Accessibility standards.

# Getting Started with Create React App

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
