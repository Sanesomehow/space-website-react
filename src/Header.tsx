import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { Link } from "react-router";
import logo from "./assets/shared/logo.svg";
import menu from './assets/shared/icon-hamburger.svg';
import close from './assets/shared/icon-close.svg';
import { useState } from "react";

export default function Header({
  activeTab,
  isMobile,
  isTablet
}: {
  activeTab: string;
  isMobile: boolean;
  isTablet: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="lg:pt-10">
      {isMobile ? <div className="z-0 relative flex justify-between items-center m-5">
        <Link to="/">
          <img className="h-[2.5rem]" src={logo} alt="logo" />
        </Link>
        
        {isOpen ? <menu className="fixed top-0 right-0 z-20 h-screen w-2/3 backdrop-blur-2xl flex flex-col items-end ">
          <div className="w-[2rem] mt-7 mx-3" onClick={handleMenu}>
            <img src={close} alt=""/>
          </div>
          <div className="w-full flex flex-col gap-6 pt-20">
            <Link to='/' className={`font-[Barlow_Condensed] text-white text-base tracking-[2px] px-8  ${activeTab == 'home' ? 'border-r-4 leading-5' : null}`} onClick={handleMenu}>
              <span className="mr-3 font-semibold">00</span><span className="font-extralight">HOME</span>
            </Link>
            <Link to='/destination' className={`font-[Barlow_Condensed] text-white text-base tracking-[2px] px-8  ${activeTab == 'destination' ? 'border-r-4 leading-5' : null}`} onClick={handleMenu}>
              <span className="mr-3 font-semibold">01</span><span className="font-extralight">DESTINATION</span>
            </Link>
            <Link to='/crew' className={`font-[Barlow_Condensed] text-white text-base tracking-[2px] px-8  ${activeTab == 'crew' ? 'border-r-4 leading-5' : null}`} onClick={handleMenu}>
              <span className="mr-3 font-semibold">02</span><span className="font-extralight">CREW</span>
            </Link>
            <Link to='/technology' className={`font-[Barlow_Condensed] text-white text-base tracking-[2px] px-8  ${activeTab == 'technology' ? 'border-r-4 leading-5' : null}`} onClick={handleMenu}>
              <span className="mr-3 font-semibold">03</span><span className="font-extralight">TECHNOLOGY</span>
            </Link>
          </div>
        </menu> : 
        <div className="w-[1.5rem]" onClick={handleMenu}>
          <img src={menu} alt="" className="" />
        </div>
        }
      </div> : 
      <div className="flex items-center justify-between relative ">
        <Link to="/" className="flex justify-center items-center md:w-3/20 md:h-22 lg:w-9/80">
          <img className="" src={logo} alt="logo" />
        </Link>
 
        {isTablet==isMobile==false ? null : <hr className="absolute z-10 border-t-1 border-white/30 w-17/40 left-40" /> }
        
        <ToggleGroup
          type="single"
          value={activeTab}
          className="flex font-[Barlow_condensed] sticky bg-white/5 backdrop-blur-md rounded-none shadow-2xl shadow-black/20 text-white md:w-17/20 md:pl-25 md:pr-10 md:gap-12 md:h-22 lg:w-1/2 lg:pl-42"
        >
          <ToggleGroupItem
            value="home"
            className="h-full p-0  uppercase !rounded-none text-white !bg-transparent !border-0
               data-[state=on]:!bg-transparent data-[state=on]:text-white 
               data-[state=on]:!border-b-4 data-[state=on]:!border-white 
               hover:bg-white/10 hover:text-white/30 hover:cursor-pointer hover:!border-b-4 hover:!border-white/30
               !border-b-2 !border-transparent 
               "
          >
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center tracking-[0.125rem]"
            >
              <span className="text-[1rem] font-semibold">00</span>
              <span className="font-extralight text-[1rem] ml-3">Home</span>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="destination"
            className="h-full p-0 uppercase !rounded-none text-white !bg-transparent !border-0
               data-[state=on]:!bg-transparent data-[state=on]:text-white 
               data-[state=on]:!border-b-4 data-[state=on]:!border-white
               hover:bg-white/10 hover:text-white/30 hover:cursor-pointer hover:!border-b-4 hover:!border-white/30
               !border-b-2 !border-transparent 
               "
          >
            <Link
              to="/destination"
              className="w-full h-full flex justify-center items-center tracking-[0.125rem]"
            >
              <span className="text-[1rem] font-semibold">01</span>
              <span className="font-extralight text-[1rem] ml-3">Destination</span>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="crew"
            className="h-full p-0 uppercase !rounded-none text-white !bg-transparent !border-0
               data-[state=on]:!bg-transparent data-[state=on]:text-white 
               data-[state=on]:!border-b-4 data-[state=on]:!border-white 
               hover:bg-white/10 hover:text-white/30 hover:cursor-pointer hover:!border-b-4 hover:!border-white/30
               !border-b-2 !border-transparent 
               "
          >
            <Link
              to="/crew"
              className="w-full h-full flex justify-center items-center tracking-[0.125rem]"
            >
              <span className="text-[1rem] font-semibold">02</span>
              <span className="font-extralight text-[1rem] ml-3">Crew</span>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="technology"
            className="h-full p-0 uppercase !rounded-none text-white !bg-transparent !border-0
               data-[state=on]:!bg-transparent data-[state=on]:text-white 
               data-[state=on]:!border-b-4 data-[state=on]:!border-white 
               hover:bg-white/10 hover:text-white/30 hover:cursor-pointer hover:!border-b-4 hover:!border-white/30
               !border-b-2 !border-transparent 
               "
          >
            <Link
              to="/technology"
              className="w-full h-full flex justify-center items-center tracking-[0.125rem]"
            >
              <span className="text-[1rem] font-semibold">03</span>
              <span className="font-extralight text-[1rem] ml-3">Technology</span>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      }
      
    </header>
  );
}
