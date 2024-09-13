import React from 'react';
import { cn } from "@/lib/utils";
import Button from '@/components/core-components/Button';
import Image from 'next/image';
import SocialIcons from '@/components/layout/social/Social';



const AboutUs = () => {
  return (
    
      
    <div className="min-h-screen  justify-center items-center text-[#3C3C39]   border-b-black bg-white">
      <div className="flex flex-col md:flex-row justify-between  items-center  w-full    ">

      <section className="w-1/2 mx-40 space-y-7 ">
  <Button className="block" label="About Us" />

  

  <p className="text-justify leading-relaxed w-full font-poppins font-medium">
    I wasn’t always a designer. Previously, I worked for large tech companies as a marketing manager.

    In 2019, I quit my job, and became a self-taught freelance designer.

    I spent around 3 years freelancing, mostly designing & building Webflow websites & Shopify online stores. The thing I liked about freelancing was the opportunity to help small businesses.

    In 2021 I started working as a Sr. Product Designer at Sweatcoin, a mobile app that rewards users for walking. I was in the Growth Team, where my main focus was design with the goal of user acquisition. My marketing background was particularly useful here. During my time there we gained 80M+ new users.

    Since 2022, I've been teaching UI & Product Design at Dribbble and mentoring designers at Liftyz.

    Heart Icon | Good Design I love good design, photography, wine, travel, sports, languages and books.
  </p>
</section>


       
        <div className="md:w-1/2 w-full flex justify-center items-center relative ">
          <div className="flex justify-center items-center bg-red-500 f  relative  w-full   ">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTi3UM2b3ZJj_Ri_Q6DF1EsqdBUDtCxy7KtJQkKMEWxnz7qNf2llvt5azYiKGARpV7FHw3p_qQDylYBV9G8vOqKIFJanJH8CXignmP1Kq6A5_0AAyderNdAlRzmIV_MbU-nZpukTIkUOEn/s1600/2E8A46B0-8CCF-4AC9-8AF2-2131B21C3045.jpeg" 
              alt="Kaan"
              className="rounded-full border-8 border-white object-cover  w-[250px] h-[524px]"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
