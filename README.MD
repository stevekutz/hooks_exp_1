





#### Configuration details
1) Set up React app `yarn create react-app app`

2) Add router dependencies  `yarn add react-router-dom` and wrap `<App/> in <BrowserRouter>`

3) Add ReactSpinners Kit  & React Loader Spinner dependencies
    - `yarn react-spinners-kit react-loader-spinner`
    - ``
4) Add `semantic UI  React` dependencies and configure `src/index.html`
    - `yarn add semantic-ui-react`
    - add to `index.html`  
        `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />`

5) Add  `reactn` and `reactn-devtools` to `src/index.js`
    - Connect the ReactN DevTools to the Global state

        `import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();`
6)         