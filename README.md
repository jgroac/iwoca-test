## How to use it

### Quickstart

Download or clone this repository into a directory of you choice.

1.  yarn install
2.  yarn start
3.  open <http://localhost:3000>

If you don't have yarnpkg, you can just use npm

1.  npm install
2.  npm start
3.  open <http://localhost:3000>

### How to run the tests:

-   `yarn test`

or if you don't have yarn you can use:

-   `npm run test`

## Technical Choices

The first decision was use React specifically `create-react-app` to bootstrap an app quickly from the scratch, also i pretty experience on it so i decided that would be the best option if i wanna to finish the project quickly.

As testing library jest and react-testing-library because i like its API and even i used `enzyme` a lot but enzyme feels hacky for test simple thing like fire events, make lookups for components or text in your components, etc.

For UI i choose `antd` because give me enough's components to create a very nice layout and UI. So this decision allow me to focus more on the functionality instead of waste time using css or sass for create a nice UI.

An i think the final great decision was to decouple the business logic in some functions that make it really easy to test and use, like the utilities function that make the actual work of calculate repayment schedule, and the other one for calculate the totals.

## Missing Improvements

-   Make the state persistent saving it in some place like local storage, or web storage.

-   Add more test cases, mostly for the dumb components.

## Others Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
