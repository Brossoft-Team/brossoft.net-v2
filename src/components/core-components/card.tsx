import React from "react";

interface CardProps {
  iconSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({ iconSrc, title, description, linkText, linkUrl }) => {
  return (
    <div className="bg-white shadow-xl  h-96 rounded-lg p-6 flex flex-col items-start  max-w-sm mx-auto">
      <div className="mb-4">
        <img src={iconSrc} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
     <div className=" mt-auto">
     <a href={linkUrl} className="text-textColor font-medium hover:text-slate-500 transition-all">
        {linkText} →
      </a>
     </div>
    </div>
  );
};

export default Card;
