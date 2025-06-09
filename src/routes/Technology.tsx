import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import port from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

export function Technology() {
  const options = [
    {
      path: "launch",
      img: launch,
      title: "LAUNCH VEHICLE",
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      path: "port",
      img: port,
      title: "SPACEPORT",
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      path: "capsule",
      img: capsule,
      title: "SPACE CAPSULE",
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  const [part, setPart] = useState(options[0]);
  return (
    <div className="flex flex-col h-fit my-6">
      <div className="font-[Barlow_Condensed] font-extralight text-center text-lg tracking-[0.2rem] mt-5 mb-20 md:text-start md:pl-10 md:text-xl md:tracking-[0.2rem] lg:text-3xl lg:ml-30">
        <span className="text-white/30 ">03</span>
        <span className="text-white ml-7">SPACE LAUNCH 101</span>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:items-center">
        <div className="w-full h-65 mb-8 md:w-full md:h-90 lg:flex-4/10 lg:h-150">
          <img
            src={part.img}
            alt={part.title}
            className="h-full w-full object-cover object-bottom md:object-center"
          />
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:flex-6/10">
          <ToggleGroup
            type="single"
            value={part.path}
            className="flex text-white font-[Bellefair] gap-5 mb-8 lg:flex-col lg:ml-40 lg:mr-15 lg:gap-8 lg:min-h-[350px] lg:justify-center" 
            onValueChange={(value) => value}
          >
            <ToggleGroupItem
              value="launch"
              className="!rounded-full w-12 h-12 text-center bg-transparent border border-white/30 flex items-center justify-center hover:border-white hover:bg-transparent md:w-15 md:h-15 md:text-3xl lg:w-24 lg:h-24 "
              onClick={() => setPart(options[0])}
            >
              1
            </ToggleGroupItem>
            <ToggleGroupItem
              value="port"
              className="!rounded-full w-12 h-12 text-center bg-transparent border border-white/30 flex items-center justify-center hover:border-white hover:bg-transparent md:w-15 md:h-15 md:text-3xl lg:w-24 lg:h-24 "
              onClick={() => setPart(options[1])}
            >
              2
            </ToggleGroupItem>
            <ToggleGroupItem
              value="capsule"
              className="!rounded-full w-12 h-12 text-center bg-transparent border border-white/30 flex items-center justify-center hover:border-white hover:bg-transparent md:w-15 md:h-15 md:text-3xl lg:w-24 lg:h-24 "
              onClick={() => setPart(options[2])}
            >
              3
            </ToggleGroupItem>
          </ToggleGroup>
          <div className=" text-center lg:text-start lg:mr-5">
            <p className=" font-[Bellefair] text-white/45 font-thin text-lg mb-3 md:text-2xl md:tracking-[0.1rem] lg:text-4xl lg:mb-5">
              THE TERMINOLOGY…
            </p>
            <p className=" font-[Bellefair] text-white text-2xl mb-5 md:text-4xl md:tracking-[0.1rem] lg:text-6xl lg:mb-8">
              {part.title}
            </p>
            <p className=" font-[Barlow] text-[#D0D6F9] text-wrap font-light text-sm leading-6 tracking-[0.04rem] w-9/10 mx-auto md:text-md md:tracking-[0.06rem] md:leading-7 md:w-27/40 lg:text-xl lg:mx-0 lg:leading-9 lg:w-39/40">
              {part.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
