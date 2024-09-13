import React from "react";

interface ButtonProps {
  styles?: string;
  onClick?: () => void; // Optional onClick handler
}

const Button: React.FC<ButtonProps> = ({ styles, onClick }) => (
  <button
    type="button"
    className={`py-4 px-6 sm:w-48 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-[10px] outline-none hover:opacity-90 transition-opacity duration-300 ${styles}`}
    onClick={onClick}
  >
    Get Started
  </button>
);

export default Button;
