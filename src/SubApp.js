import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function SubApp() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SubApp;
