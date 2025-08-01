import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "../App.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import MainComponent from "./MainComponent.jsx";

const root = createRoot(document.querySelector("#root"));

const MyCustomeComponents = () => {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
    </>
  );
};

root.render(
  <>
    <MyCustomeComponents />
  </>
);
