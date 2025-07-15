import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./Routes";

import "./App.css";
import Logo from "./components/template/Logo/Logo";
import Nav from "./components/template/Nav/Nav";
import Footer from "./components/template/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Navigation />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
