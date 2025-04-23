import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;