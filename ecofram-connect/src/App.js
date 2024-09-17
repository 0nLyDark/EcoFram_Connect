import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexClient from "./Client";

function App() {
  return (
    <BrowserRouter>
      <IndexClient />
    </BrowserRouter>
  );
}

export default App;
