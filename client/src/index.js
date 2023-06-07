<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeContextProvider } from "./context/darkModeContext";
>>>>>>> Stashed changes

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
