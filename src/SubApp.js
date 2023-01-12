import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

function SubApp() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
      <MessengerCustomerChat pageId="100089223767030" appId="553429326697551" />
    </div>
  );
}

export default SubApp;
