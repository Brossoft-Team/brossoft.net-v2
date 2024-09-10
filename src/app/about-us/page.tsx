import React from 'react';



const AboutUs = () => {
  return (
    
      
    <div className="min-h-screen flex justify-center items-center text-[#3C3C39] bg-[#F9F5F2]  border-b-black">
      <div className="flex flex-col md:flex-row justify-between   w-full py-12  ">

        <section className="md:w-1/2 w-full flex flex-col justify-center mx-6">
          <h1 className="text-4xl font-bold mb-6">About us</h1>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sequi quo quidem explicabo quam in, quibusdam recusandae et aliquid molestiae libero facere sint inventore fugit debitis labore accusamus at iste!
        </section>

       
        <div className="md:w-1/2 w-full flex justify-center items-center relative ">
          <div className="flex justify-center items-center bg-red-500 f  relative  w-full   ">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTi3UM2b3ZJj_Ri_Q6DF1EsqdBUDtCxy7KtJQkKMEWxnz7qNf2llvt5azYiKGARpV7FHw3p_qQDylYBV9G8vOqKIFJanJH8CXignmP1Kq6A5_0AAyderNdAlRzmIV_MbU-nZpukTIkUOEn/s1600/2E8A46B0-8CCF-4AC9-8AF2-2131B21C3045.jpeg" 
              alt="Kaan"
              className="rounded-full border-8 border-white object-cover w-full  max-h-"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
