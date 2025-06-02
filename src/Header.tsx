import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { Link } from "react-router";
import logo from "./assets/shared/logo.svg";
import menu from './assets/shared/icon-hamburger.svg';
import close from './assets/shared/icon-close.svg';
import { useState } from "react";

export default function Header({
  activeTab,
  isMobile,
}: {
  activeTab: string;
  isMobile: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col justify-between">
      {isMobile ? <div className="">
        <Link to="/">
          <img className="" src={logo} alt="logo" />
        </Link>
        <img src={menu} alt="" />
      </div> : 
      <div className="flex items-center justify-between relative">
        <Link to="/">
          <img className="p-15" src={logo} alt="logo" />
        </Link>
        <hr className="absolute z-10 border-t-1 border-white/30 w-150 left-40" />
        <ToggleGroup
          type="single"
          value={activeTab}
          className="font-[Barlow_condensed] sticky gap-14 flex h-20 w-200 bg-white/10 backdrop-blur-md rounded-none shadow-2xl shadow-black/20 text-white pl-40 pr-20"
        >
          <ToggleGroupItem
            value="home"
            className="flex h-full p-0  uppercase !rounded-none text-white !bg-transparent !border-0
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
              <span className="font-light text-[1rem] ml-2">Home</span>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="destination"
            className="h-20 p-0 uppercase !rounded-none text-white !bg-transparent !border-0
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
              <span className="font-light text-[1rem] ml-2">Destination</span>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="crew"
            className="h-20 p-0 uppercase !rounded-none text-white !bg-transparent !border-0
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
              <span className="font-light text-[1rem] ml-2">Crew</span>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="technology"
            className="h-20 p-0 uppercase !rounded-none text-white !bg-transparent !border-0
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
              <span className="font-light text-[1rem] ml-2">Technology</span>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      }
      
    </header>
  );
}
