// components/Card.tsx
"use client";

import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden min-h-64 hover:outline outline-offset-2 outline-blue-400 outline-1">
        <div className="p-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-600">{description}.</p>
        </div>
    </div>
  );
};

export default Card;