import commander from "../assets/crew/image-douglas-hurley.png";
import specialist from "../assets/crew/image-mark-shuttleworth.png";
import pilot from "../assets/crew/image-victor-glover.png";
import engineer from "../assets/crew/image-anousheh-ansari.png";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { useState } from "react";

export function Crew() {
  const options = [
    {
      path: "commander",
      img: commander,
      title: "commander",
      name: "Douglas Hurley",
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      path: "specialist",
      img: specialist,
      title: "Mission Specialist",
      name: "MARK SHUTTLEWORTH",
      text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      path: "pilot",
      img: pilot,
      title: "PILOT",
      name: "Victor Glover",
      text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      path: "engineer",
      img: engineer,
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ];

  const [person, setPerson] = useState(options[0]);
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="font-[Barlow_Condensed] text-lg text-center tracking-[0.2rem] text-lg font-extralight mb-18 md:text-start md:text-2xl md:ml-10 md:mt-10 lg:text-3xl lg:ml-40 lg:tracking-[0.25rem] lg:mb-30">
        <span className="text-white/30 ">02</span>
        <span className="text-white ml-7">MEET YOUR CREW</span>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center lg:flex-row lg:items-end gap-10">
        <div className="flex-1 flex flex-col lg:ml-35 lg:mb-25">
          <div className="text-center mx-auto lg:text-start">
            <p className="text-white/40 font-[Bellefair] uppercase text-xl mb-1 md:text-3xl md:mb-5 lg:text-4xl lg:mb-5">
              {person.title}
            </p>
            <p className="text-white font-[Bellefair] uppercase w-full text-2xl mb-6 md:text-5xl lg:text-6xl lg:mb-8">
              {person.name}
            </p>
            <p className="font-[Barlow] text-[#D0D6F9] text-wrap text-md leading-7 w-9/10 mx-auto mb-25 md:text-lg md:w-15/20 md:leading-8 md:mb-15 lg:mx-0 lg:text-xl lg:w-full lg:leading-10 lg:mb-60">
              {person.text}
            </p>
          </div>
          <ToggleGroup
            type="single"
            value={person.path}
            onValueChange={(value) => value}
            className="flex gap-5 justify-center lg:justify-start lg:gap-12"
          >
            <ToggleGroupItem
              value="commander"
              className="rounded-full bg-white/20 data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300 cursor-pointer w-3 h-3 lg:w-4 lg:h-4"
              onClick={() => setPerson(options[0])}
            >
              {" "}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="specialist"
              className="rounded-full bg-white/20  data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300 cursor-pointer w-3 h-3 lg:w-4 lg:h-4"
              onClick={() => setPerson(options[1])}
            >
              {" "}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="pilot"
              className="rounded-full bg-white/20 data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300 cursor-pointer w-3 h-3 lg:w-4 lg:h-4"
              onClick={() => setPerson(options[2])}
            >
              {" "}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="engineer"
              className="rounded-full bg-white/20 data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300 cursor-pointer w-3 h-3 lg:w-4 lg:h-4"
              onClick={() => setPerson(options[3])}
            >
              {" "}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="relative overflow-hidden w-7/10 mt-15 mb-8 md:mt-15 md:w-6/10 lg:w-6/16 lg:mr-35 lg:mt-0 lg:mb-25">
          <div className="flex w-full items-end justify-center">
            <img
              src={person.img}
              alt={`${person.title} ${person.name}`}
              className="h-full w-full object-cover object-top mask-b-from-90% mask-b-to-100% "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
