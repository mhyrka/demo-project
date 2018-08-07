- create-react-app my-App
- git / npm init
- install the following dependencies:
  react-app-rewired
  react-app-rewire-mobx
  babel-plugin-styled-components

- create a file called config-override.js and add the following:

```const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  config = rewireMobX(config, env);

  return config;
};
```

- Make sure package.json scripts looks like this:

  ```"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  }
  ```

* Make sure index.js looks like this:

  ```import React from "react"
  import ReactDOM from "react-dom"
  import "./index.css"
  import App from "./App"
  import registerServiceWorker from "./registerServiceWorker"

  import { Provider } from "mobx-react"
  import UiStore from "./Store"

  const Root = (
    <Provider UiStore={UiStore}>
      <App />
    </Provider>
  )

  ReactDOM.render(Root, document.getElementById("root"))
  registerServiceWorker()
  ```
