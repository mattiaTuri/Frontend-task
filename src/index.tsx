import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";
import App from "./App";
import Provider from "react-redux/es/components/Provider";
import { store } from "store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
