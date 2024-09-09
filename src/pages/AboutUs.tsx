import React from 'react';



const AboutUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-[#3C3C39] bg-[#F9F5F2] px-6">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto w-full py-12">

        <section className="md:w-1/2 w-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">About me</h1>
          <p className="mb-4">
            I wasn’t always a designer. Previously, I worked for large tech companies as a marketing manager.
          </p>
          <p className="mb-4">
            In 2019, I quit my job, and became a self-taught freelance designer.
          </p>
          <p className="mb-4">
            I spent around 3 years freelancing, mostly designing & building <a href="#" className="text-blue-500 underline">Webflow</a> websites & Shopify online stores. The thing I liked about freelancing was the opportunity to help small businesses.
          </p>
          <p className="mb-4">
            In 2021 I started working as a Sr. Product Designer at <a href="#" className="text-blue-500 underline">Sweatcoin</a>, a mobile app that rewards users for walking. I was in the Growth Team, where my main focus was design with the goal of user acquisition. My marketing background was particularly useful here. During my time there we gained 80M+ new users.
          </p>
          <p className="mb-4">
            Since 2022, I've been teaching UI & Product Design at <a href="#" className="text-blue-500 underline">Dribbble</a> and mentoring designers at <a href="#" className="text-blue-500 underline">Liftyz</a>.
          </p>
        </section>

        {/* Right Section */}
        <div className="md:w-1/2 w-full flex justify-center items-center relative">
          <div className="flex justify-center items-center bg-red-500 f  relative  w-full h-full">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTi3UM2b3ZJj_Ri_Q6DF1EsqdBUDtCxy7KtJQkKMEWxnz7qNf2llvt5azYiKGARpV7FHw3p_qQDylYBV9G8vOqKIFJanJH8CXignmP1Kq6A5_0AAyderNdAlRzmIV_MbU-nZpukTIkUOEn/s1600/2E8A46B0-8CCF-4AC9-8AF2-2131B21C3045.jpeg" 
              alt="Kaan"
              className="rounded-full border-8 border-white object-cover w-[250px] h-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
