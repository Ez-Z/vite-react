import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/layout/AppLayout";
import { store } from "@/store";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
