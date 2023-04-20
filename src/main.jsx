import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//굳이 link 태그를 사용하지 않아도 되는데, 이 또한 모델 번들러 때문.
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
