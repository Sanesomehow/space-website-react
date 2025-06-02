import launch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import port from '../assets/technology/image-spaceport-portrait.jpg';
import capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useState } from 'react';

export function Technology() {
    const options= [
        {
            path:"launch",
            img: launch,
            title:"LAUNCH VEHICLE",
            text:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            path:"port",
            img: port,
            title:"SPACEPORT",
            text:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            path:"capsule",
            img: capsule,
            title:"SPACE CAPSULE",
            text:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
    const [part, setPart] = useState(options[0])
    return <div className="flex flex-col ml-[10rem] mb-[8rem]">
        <div className="text-[1.75rem] tracking-[0.25rem] font-[Barlow_Condensed] mb-[5rem]">
            <span className="text-white/20 mr-3 font-semibold">03</span>
            <span className="text-white ">SPACE LAUNCH 101</span>
        </div>
        <div className='flex justify-end items-center gap-8'>
            <ToggleGroup type='single' value={part.path} className='flex flex-col text-white font-[Bellefair] gap-[2rem] mr-[2rem] h-[18rem] w-[5rem]' onValueChange={(value) => value}>
                <ToggleGroupItem value='launch' className='text-[2rem] !rounded-full w-[5rem] h-[5rem] aspect-square bg-transparent border border-white/30 flex items-center justify-center hover:border-white hover:bg-transparent' onClick={() => setPart(options[0])}>1</ToggleGroupItem>
                <ToggleGroupItem value='port' className='text-[2rem] !rounded-full w-[5rem] h-[5rem] aspect-square bg-transparent border border-white/30 flex items-center justify-center hover:border-white hover:bg-transparent' onClick={() => setPart(options[1])}>2</ToggleGroupItem>
                <ToggleGroupItem value='capsule' className='text-[2rem] !rounded-full w-[5rem] h-[5rem] aspect-square bg-transparent border border-white/30 flex items-center justify-center hover:border-white hover:bg-transparent' onClick={() => setPart(options[2])}>3</ToggleGroupItem>
            </ToggleGroup>
            <div className='mr-[2rem]'>
                <p className="text-[2rem] font-[Bellefair] text-white/45">THE TERMINOLOGY…</p>
                <p className="text-[3.5rem] font-[Bellefair] text-white pb-[1rem]">{part.title}</p>
                <p className="text-[1.125rem] font-[Barlow] text-[#D0D6F9] leading-[2rem] text-wrap w-[30.75rem]">{part.text}</p>
            </div>
            <div className=''>
                <img src={part.img} alt={part.title} className='w-[38rem] object-contain'/>
            </div>
        </div>
    </div>
}