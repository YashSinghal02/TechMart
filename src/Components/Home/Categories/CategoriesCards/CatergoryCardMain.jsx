import { useState } from "react";
import { IoPhonePortraitOutline, IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";

import "./CategoriesCrdMain.css";
import MobileCategory from "./MobileCategory";
import Camera from "./Camera";
import MonitorCategory from "./MonitorCategory";
import WatchCategories from "./WatchCategories";
import GameCategory from "./GameCategory";
import HeadphoneCategory from "./HeadphoneCategory";

function CatergoryCardMain() {
  const [activeTab, setActiveTab] = useState("Mobile");

  const renderComponent = () => {
    switch (activeTab) {
      case "Mobile":
        return <MobileCategory />;
      case "Monitor":
        return <MonitorCategory />;
      case "Watch":
        return <WatchCategories />;
      case "Camera":
        return <Camera />;
      case "Game":
        return <GameCategory />;
      case "Headphone":
        return <HeadphoneCategory />;
      default:
        return <MobileCategory />;
    }
  };
  return (
    <div className="w-full py-8">
      <div
        className="
          grid 
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-3
          [@media(min-width:992px)]:grid-cols-6
          gap-6 
          justify-items-center 
          items-center 
          mx-auto 
          max-w-6xl
          Categories
        "
      >
        <div 
          className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Mobile" ? "active" : ""}`}
          onClick={() => setActiveTab("Mobile")}
        >
          <IoPhonePortraitOutline className="cat-icon " />
        </div>

        <div 
          className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Monitor" ? "active" : ""}`}
          onClick={() => setActiveTab("Monitor")}
        >
          <HiOutlineDesktopComputer className="cat-icon " />
        </div>

        <div 
          className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Watch" ? "active" : ""}`}
          onClick={() => setActiveTab("Watch")}
        >
          <BsSmartwatch className="cat-icon " />
        </div>

        <div 
          className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Camera" ? "active" : ""}`}
          onClick={() => setActiveTab("Camera")}
        >
          <CiCamera className="cat-icon " />
        </div>

        <div 
          className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Game" ? "active" : ""}`}
          onClick={() => setActiveTab("Game")}
        >
          <IoGameControllerOutline className="cat-icon " />
        </div>

        <div 
          className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Headphone" ? "active" : ""}`}
          onClick={() => setActiveTab("Headphone")}
        >
          <CiHeadphones className="cat-icon " />
        </div>
      </div>
      {renderComponent()}
    </div>
  );
}

export default CatergoryCardMain;
