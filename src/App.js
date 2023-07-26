import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer";
import Router from "./Router/router";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
