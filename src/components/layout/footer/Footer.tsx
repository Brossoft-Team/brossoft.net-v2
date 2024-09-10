import React from "react";
import Image from "next/image";


const Footer: React.FC = () => {
    
    return(
        <footer className="flex justify-between items-center py-14 px-40 mx-auto border-[1px] border-t-black border-solid">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14   flex items-center justify-center ">
          <Image src="/assets/brossoft_transparent.svg" alt="Brossoft Logo" width={100} height={100} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#3d3d3d]">Arda Tor</h1>
            <p className="text-sm text-gray-500">Intern Web Devoloper</p>
          </div>
        </div>
  
        <div className="text-right">
          <p className="text-xl text-gray-500">
            © 2019-∞ <span className="font-semibold text-[#3d3d3d]">Brossoft AS.</span>
          </p>
        
        </div>
      </footer>
    );
   
};

export default Footer ;