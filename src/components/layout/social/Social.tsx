import { link } from "fs";
import React from "react";
import FakeData from "@/app/data/social-data/social";

const SocialIcons = () => {
  

  return (
    <div className="flex space-x-4 items-center">
      {FakeData.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="w-10 h-10 rounded-full bg-[#111]  text-white flex items-center justify-center hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#ffffff60]  hover:bg-slate-800 transition-all duration-300 ease-out"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
