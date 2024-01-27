import React from "react";

interface ButtonProps {
  name: string;
  Function: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, Function }) => {
  return (
    <button
      onClick={Function}
      className="bg-[#4F46E5] w-[100%] px-5 py-2 rounded text-white"
    >
      {name}
    </button>
  );
};

export default Button;
