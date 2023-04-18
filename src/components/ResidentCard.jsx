import axios from "axios";
import React, { useEffect, useState } from "react";

const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
  }
const ResidentCard = ({ resident }) => {

    const [residentInfo, setResidentInfo] = useState()

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data) )
      .catch((err) => console.log(err));
  }, []);

  return ( 
    <article className="border-2 border-gray50 w-[280px] grid grid-rows-[auto_1fr] ">
        <div  className="relative border-2 border-gray50 h-[200px] overflow-hidden">
            <img className="w-full h-full object-cover" src={residentInfo?.image} alt="" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/70 text-white p-1 px-4 flex gap-2 items-center rounded-sm border-2 border-gray50 font-medium text-[16px]">
                <div className={`w-3 h-3 ${residentsStatus[residentInfo?.status]}  rounded-full`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </div>
            
        <section className="bg-dark-blue bg-contain">
            <h3 className="text-white1 text-[18px] font-bold px-5 py-2">{residentInfo?.name}</h3>
            <ul className="grid gap-1">
                <li className="flex justify-between px-2">
                    <span className="text-[14px] text-gray20 font-medium">Species:</span> 
                    <span className="text-white1 text-[14px] font-semibold px-8">{residentInfo?.species}</span> 
                </li>
                <li className="flex justify-between px-2">
                    <span className="text-[12px] text-gray20 font-medium">Origin:    </span>
                    <span className="text-white1 text-[14px] font-semibold px-8">{residentInfo?.origin.name}</span>
                </li>
                <li className="flex justify-between px-2">
                    <span className="text-[14px] text-gray20 font-medium">Times apper:</span>
                    <span className="text-white1 text-[14px] font-semibold px-8">{residentInfo?.episode.length} time</span>
                </li>
            </ul>
        </section>
    </article>
  )
};

export default ResidentCard;
