import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import App from "./GeekTrust/App";
import { store } from "./GeekTrust/Redux/store";

ReactDOM.render(
  <Provider store={store}>
 <App />
 </Provider>
    ,
  document.getElementById("root")
);
serviceWorker.unregister();
