import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  id: string;
  count: number | null;
}

const Input: React.FC<InputProps> = ({ placeholder, type, id, count }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`${
        count === null ? "w-[100%]" : "w-[85%]"
      }  border border-slate-300 hover:border-[#4F46E5] outline-[#4F46E5] px-3 py-2 rounded`}
    />
  );
};

export default Input;
