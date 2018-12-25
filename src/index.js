import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import App from "./App";


render(
  <div>
    <DevTools />
    <App />
  </div>,
  document.getElementById("root")
); 