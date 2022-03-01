import { useEffect } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../navbar/Navbar";
import { Menu } from "./Menu";
import { contactManager } from "../../tailgate/api/contactmanager";
import "./MainContent.scss";

const MainContent = () => {

  useEffect(() => {
    contactManager.getContacts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="body-wrapper">
        <Sidebar />
        <div className="main-wrapper">
          <Menu />
        </div>
      </div>
    </>
  );
};

export { MainContent };
