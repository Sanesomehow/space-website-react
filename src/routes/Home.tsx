import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen w-full items-center text-center py-8 md:py-10 lg:flex-row lg:text-start lg:py-0 lg:items-center" >
      <div className="flex flex-col items-center mb-8 lg:mb-0 lg:h-auto lg:w-11/20 lg:items-start">
        <p className="text-[#D0D6F9] font-[Barlow_Condensed] tracking-[0.2rem] md:text-3xl lg:px-40">SO, YOU WANT TO TRAVEL TO</p>
        <p className="text-white font-[Bellefair] text-7xl my-7 md:text-[9rem] md:my-9 lg:px-40">SPACE</p>
        <p className="text-[#D0D6F9] text-wrap font-[Barlow] text-sm px-8 leading-6 md:text-[1.125rem] md:px-25 md:leading-8 lg:w-215 lg:px-40">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="flex justify-center items-center pb-8 lg:pb-0 lg:flex-1">
        <button className="text-[#0B0D17] rounded-full bg-white font-[Bellefair] text-center hover:cursor-pointer hover:ring-[5rem] hover:ring-white/10 duration-300 size-32 text-lg md:size-60 md:text-3xl lg:size-70" onClick={() => navigate('/destination')}>EXPLORE</button>
      </div>
    </div>
  );
}
 