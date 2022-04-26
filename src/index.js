import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { store } from "./GeekTrust/Redux/store";
import App from "./GeekTrust/geektrust";

ReactDOM.render(
  <Provider store={store}>
 <App />
 </Provider>
    ,
  document.getElementById("root")
);
serviceWorker.unregister();
