import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full justify-around items-end pt-25 pb-40" >
      <div className="">
        <p className="text-[#D0D6F9] font-[Barlow_Condensed] text-[1.75rem] tracking-[0.25rem]">SO, YOU WANT TO TRAVEL TO</p>
        <p className="text-white font-[Bellefair] text-[9rem]">SPACE</p>
        <p className="text-[#D0D6F9] text-wrap w-135 font-[Barlow] text-[1.125rem] leading-[1.8]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <button className="text-[#0B0D17] rounded-full w-[17rem] h-[17rem] bg-white font-[Bellefair] text-[2rem] mb-10 text-center hover:cursor-pointer hover:ring-[5rem] hover:ring-white/10 duration-300" onClick={() => navigate('/destination')}>EXPLORE</button>
    </div>
  );
}
