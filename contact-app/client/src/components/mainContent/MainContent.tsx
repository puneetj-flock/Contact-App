import { useEffect } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../navbar/Navbar";
import { Menu } from "./Menu";
import { ContactService } from "../../service/ContactService";
import { addIDB } from "../../indexDB/Test";
import "./MainContent.scss";

const MainContent = () => {
  useEffect(() => {

    ContactService.getContacts().then((res) => {
      addIDB(res);
    });
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
