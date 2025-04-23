import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl hover:shadow-indigo-200/20",
    secondary: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl hover:shadow-purple-200/20",
    outline: "bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    text: "bg-transparent text-indigo-600 hover:bg-indigo-50 shadow-none"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;