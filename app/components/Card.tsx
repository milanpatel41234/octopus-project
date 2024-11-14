import React from 'react';

interface CardProps {
  data: {
    title: string;
    description: string;
    imageUrl: {
        src: string;
    };
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { title, description, imageUrl } = data;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="/assets/group 5089.png" alt={title} />
      {/* <div className="bg-white p-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div> */}
    </div>
  );
};

export default Card;
