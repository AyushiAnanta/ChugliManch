import React from "react";

const AuthInput = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#6c584c] focus:ring-2 focus:ring-[#6c584c]/20 outline-none transition"
    />
  );
};

export default AuthInput;