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
    <div className="mx-[8rem]">
      <div className="font-[Barlow_Condensed] text-[1.75rem] tracking-[0.25rem] mx-[3.4rem] mb-[1.5rem]">
        <span className="text-white/20 font-semibold">02</span>
        <span className="ml-[1.5rem] text-white">MEET YOUR CREW</span>
      </div>
      <div className="flex flex-row-reverse justify-around items-center">
        <div className="w-[33.75rem] h-[42.25rem] mb-[6rem] relative overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src={person.img}
              alt={`${person.title} ${person.name}`}
              className="max-h-full max-w-full object-contain mask-b-from-90% mask-b-to-100%"
            />
          </div>
        </div>
        <div className="flex flex-col h-full mb-[8rem] justify-end">
          <div className="mt-[12rem] mb-[15rem]">
            <p className="text-white/40 font-[Bellefair] uppercase text-[2rem]">
              {person.title}
            </p>
            <p className="w-[35rem] text-white font-[Bellefair] text-[3.5rem] uppercase pb-[1rem] text-wrap">
              {person.name}
            </p>
            <p className="w-[33.5rem] font-[Barlow] text-[1.125rem] text-[#D0D6F9] text-wrap leading-[2rem]">
              {person.text}
            </p>
          </div>
          <ToggleGroup
            type="single"
            value={person.path}
            onValueChange={(value) => value}
            className="flex gap-10 "
          >
            <ToggleGroupItem
              value="commander"
              className="rounded-full w-4 h-4 bg-white/20 data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300"
              onClick={() => setPerson(options[0])}
            >
              {" "}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="specialist"
              className="rounded-full w-4 h-4 bg-white/20  data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300"
              onClick={() => setPerson(options[1])}
            >
              {" "}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="pilot"
              className="rounded-full w-4 h-4 bg-white/20 data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300"
              onClick={() => setPerson(options[2])}
            >
              {" "}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="engineer"
              className="rounded-full w-4 h-4 bg-white/20 data-[state=on]:bg-white hover:bg-white/50 transition-full duration-300"
              onClick={() => setPerson(options[3])}
            >
              {" "}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}
