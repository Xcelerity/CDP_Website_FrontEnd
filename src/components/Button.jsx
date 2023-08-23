import React from "react";

const Button = ({ styles, text, className }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} ${className}`}
  >
    {text ? text : "Get Registered"}
  </button>
);

export default Button;
