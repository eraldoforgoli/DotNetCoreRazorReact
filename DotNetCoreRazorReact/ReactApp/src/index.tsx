import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>duke ngarkuar...</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("react-app")
);
