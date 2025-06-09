import { Link, Outlet } from "react-router-dom";
import BgHome from "../assets/home/background-home-desktop.jpg";
import BgHomeTab from "../assets/home/background-home-tablet.jpg";
import BgHomeMobile from "../assets/home/background-home-mobile.jpg";
import BgDestination from "../assets/destination/background-destination-desktop.jpg";
import BgDestinationTab from "../assets/destination/background-destination-tablet.jpg";
import BgDestinationMobile from "../assets/destination/background-destination-mobile.jpg";
import BgCrew from "../assets/crew/background-crew-desktop.jpg";
import BgCrewTab from "../assets/crew/background-crew-tablet.jpg";
import BgCrewMobile from "../assets/crew/background-crew-mobile.jpg";
import BgTechnology from "../assets/technology/background-technology-desktop.jpg";
import BgTechnologyTab from "../assets/technology/background-technology-tablet.jpg";
import BgTechnologyMobile from "../assets/technology/background-technology-mobile.jpg";
import Header from '../Header';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export function Layout() {
  const [activeTab, setActiveTab] = useState("home");
  const { isMobile, isTablet } = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setActiveTab("home");
        break;
      case '/destination':
        setActiveTab("destination");
        break;
      case '/crew':
        setActiveTab("crew");
        break;
      case '/technology':
        setActiveTab("technology");
        break;
    }
  },[location.pathname])

  const getBackgroundImage = () => {
    switch(location.pathname) {
      case '/':
        return isMobile ? BgHomeMobile : isTablet ? BgHomeTab : BgHome;
      case '/destination':
        return isMobile ? BgDestinationMobile : isTablet ? BgDestinationTab : BgDestination;
      case '/crew':
        return isMobile ? BgCrewMobile : isTablet ? BgCrewTab : BgCrew;
      case '/technology':
        return isMobile ? BgTechnologyMobile : isTablet ? BgTechnologyTab : BgTechnology;
      default:
        return isMobile ? BgHomeMobile : isTablet ? BgHomeTab : BgHome;
    }
  }

  return (
    <div      className="h-screen w-full overflow-hidden bg-cover flex flex-col transition-full duration-600"
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      <Header activeTab={activeTab} isMobile={isMobile} isTablet={isTablet} />
      <main className="flex-1 flex justify-center w-full overflow-y-auto overflow-x-hidden">
        <Outlet/>
      </main>
    </div>
  );
}