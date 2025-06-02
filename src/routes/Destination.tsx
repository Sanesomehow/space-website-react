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
    <div className="mx-[10rem] my-[2rem]">

      <div className="text-white font-[Barlow_Condensed] text-[1.75rem] tracking-[0.25rem]">
        <span className="text-white/30">01</span>
        <span className="ml-[1.5rem]">PICK YOUR DESTINATION</span>
      </div>

      <div className="flex  my-[8rem] justify-around ">
        <div className="w-[35rem] h-[25rem]">
          <img src={option.img} alt="" className="w-[35rem] h-[35rem]" />
        </div>

        <div className="">
            <ToggleGroup type="single" value={option.path} onValueChange={(value) => value } className="flex gap-[1rem] text-[#D0D6F9] font-[Barlow_Condensed] tracking-[0.2rem] pb-[3.313rem]">
                <ToggleGroupItem value="moon" className="text-[1rem]  !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[0])}}>
                    MOON
                </ToggleGroupItem>
                <ToggleGroupItem value="mars" className="text-[1rem] !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[1])}}>
                    MARS
                </ToggleGroupItem>
                <ToggleGroupItem value="europa" className="text-[1rem]  !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[2])}}>
                    EUROPA
                </ToggleGroupItem>
                <ToggleGroupItem value="titan" className="text-[1rem]  !bg-transparent !rounded-none data-[state=on]:text-white data-[state=on]:border-b-4 hover:border-b-4 hover:border-white/30" onClick={()=>{setOption(options[3])}}>
                    TITAN
                </ToggleGroupItem>
            </ToggleGroup>
          <p className="font-[Bellefair] text-white text-[6.25rem]">{option.title}</p>
          <p className="w-[27rem] font-[Barlow] text-[#D0D6F9] text-[1.125rem] text-wrap leading-8">
            {option.text}
          </p>
          <hr className="w-full my-[2.5rem]" />
          <div className="flex gap-25">
            <div className="">
              <p className="text-[#D0D6F9] text-[0.875rem] font-[Barlow_condensed] tracking-[0.125rem]">
                AVG. DISTANCE
              </p>
              <p className="text-white text-[1.75rem] font-[Bellefair]">
                {option.distance}
              </p>
            </div>
            <div>
              <p className="text-[#D0D6F9] text-[0.875rem] font-[Barlow_Condensed] tracking-[0.125rem]">
                EST. TRAVEL TIME
              </p>
              <p className="text-white text-[1.75rem] font-[Bellefair]">
                {option.time}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
