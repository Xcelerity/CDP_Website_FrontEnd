import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const deskTopNavButtonLinks = [
  {
    title: "Student",
    id: "/studentRegistration",
  },
  {
    title: "Company",
    id: "https://docs.google.com/forms/d/e/1FAIpQLSfe8BOAMcxts0QIxl9Zp8LEC8XbsBl_kCvTduxokfdt4RjAkg/viewform",
  },
];

const NavBar = ({ navLinks }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        alt="hoobank"
        className="h-[72px] cursor-pointer"
      />
      <ul className="z-[10] list-none sm:flex hidden justify-end items-center flxe-1">
        {navLinks.map((el, index) => {
          return (
            <li
              key={el.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text`}
            >
              <a href={`${el.id}`}>{el.title}</a>
            </li>
          );
        })}

        <button
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ml-5`}
          onClick={() => setToggle((prev) => !prev)}
        >
          Register
        </button>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 mr-[55px] mt-5  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 text-white">
            {deskTopNavButtonLinks.map((el, index) => {
              return (
                <li
                  key={el.id}
                  className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text`}
                >
                  <a className="text-white" href={`${el.id}`}>
                    {el.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 text-white">
            {navLinks.map((el, index) => {
              return (
                <li
                  key={el.id}
                  className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text`}
                >
                  <a className="text-white" href={`${el.id}`}>
                    {el.title}
                  </a>
                </li>
              );
            })}
            <li className="h-[1px] mt-5 mb-5 w-full bg-white"></li>
            <li className="mt-3 mb-3 text-orange-400">Register Below:</li>
            {deskTopNavButtonLinks.map((el, index) => {
              return (
                <li
                  key={el.id}
                  className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text`}
                >
                  <a className="text-white" href={`${el.id}`}>
                    {el.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
