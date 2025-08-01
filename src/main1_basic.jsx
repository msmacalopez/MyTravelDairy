import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const HeaderComponent = () => {
  return (
    <header>
      <p className="logo">Logo</p>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
const MainComponent = () => {
  return (
    <>
      <ol>
        <li>React</li>
        <li>React 2</li>
        <li>React 3</li>
      </ol>
    </>
  );
};
const MyCustomeComponent = () => {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
    </>
  );
};

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <MyCustomeComponent />
    <h1>printing</h1>
  </>
);
