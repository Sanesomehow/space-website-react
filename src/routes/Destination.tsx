import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

export function Destination() {

    const options = [
      {
        path:"moon",
        img: moon,
        title: "MOON",
        text:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 km",
        time:"3 days"
      },{
        path:"mars",
        img:mars,
        title: "MARS",
        text:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:"225 MIL. km",
        time:"9 months"
      },{
        path:"europa",
        img: europa,
        title: "EUROPA",
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        time: "3 years"
      },{
        path:"titan",
        img:titan,
        title: "TITAN",
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        time: "7 years"
      }
    ]
    const [option, setOption] = useState(options[0]);
  return (
    <div className="flex flex-col lg:mx-40">

      <div className="text-white font-[Barlow_Condensed] tracking-[0.2rem] text-lg font-extralight text-center mt-8 md:text-start md:mx-10 md:mt-10 md:text-2xl lg:mx-0 lg:mb-30 lg:text-3xl">
        <span className="text-white/30 ">01</span>
        <span className="ml-7">PICK YOUR DESTINATION</span>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:grow lg:gap-25">
        <div className="flex  items-center justify-center w-9/20 my-14 md:w-7/18 md:my-20 lg:my-0 lg:flex-2/4">
          <img src={option.img} alt="" className="" />
        </div>

        <div className="text-center flex flex-col items-center lg:items-start lg:text-start flex-2/4">
            <ToggleGroup type="single" value={option.path} onValueChange={(value) => value } className="flex text-[#D0D6F9] font-[Barlow_Condensed] gap-6 tracking-[0.125rem] pb-10">
                <ToggleGroupItem value="moon" className="text-[1rem] font-thin !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[0])}}>
                    MOON
                </ToggleGroupItem>
                <ToggleGroupItem value="mars" className="text-[1rem] font-thin !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[1])}}>
                    MARS
                </ToggleGroupItem>
                <ToggleGroupItem value="europa" className="text-[1rem] font-thin !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[2])}}>
                    EUROPA
                </ToggleGroupItem>
                <ToggleGroupItem value="titan" className="text-[1rem] font-thin !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[3])}}>
                    TITAN
                </ToggleGroupItem>
            </ToggleGroup>
          <p className="font-[Bellefair] text-white text-6xl mb-6 md:text-7xl">{option.title}</p>
          <p className="font-[Barlow] text-[#D0D6F9] w-9/10 text-base text-wrap leading-7 tracking-wide md:w-17/24 md:font-extralight lg:w-29/36">
            {option.text}
          </p>
          <hr className="w-9/10 border-t-2 border-white/20 mt-5 md:w-17/24 md:mt-6" />
          <div className="flex flex-col gap-5 my-4 md:flex-row md:gap-30 md:my-6">
            <div className="flex flex-col gap-1">
              <p className="text-[#D0D6F9] font-[Barlow_condensed] text-sm font-extralight tracking-[0.125rem]">
                AVG. DISTANCE
              </p>
              <p className="text-white font-[Bellefair] text-[1.75rem] font-light">
                {option.distance}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#D0D6F9] font-[Barlow_Condensed] text-sm font-extralight tracking-[0.125rem]">
                EST. TRAVEL TIME
              </p>
              <p className="text-white text- font-[Bellefair] text-[1.75rem] font-light">
                {option.time}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
