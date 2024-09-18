import React from "react";

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, title }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 rounded-full border-2 border-gray-300"
      />

      <div>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
