import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/layout/AppLayout";
import { store } from "@/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Routes from "@/Routes";
import initReactFastclick from "react-fastclick";
import "./index.css";
initReactFastclick();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
