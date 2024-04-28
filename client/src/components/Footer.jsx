import React from "react";

const Footer = ({
  handleReset,
  setDisplay,
  setIndex,
  setScore,
  setAnsware,
  setUser,
  setCheating
}) => {
  return (
    <div className="bg-[#435866] w-full flex items-center px-[73px] py-[9px] text-english-lavender h-[88px] justify-between">
      <div className="flex gap-[24px] ">
        <svg
          onClick={() => {
            setIndex(0);
            setAnsware({});
            setScore({});
            setUser({});
            setDisplay("user");
            setCheating(0)
          }}
          className="cursor-pointer bg-copper border-[6px] border-pastelPink rounded-full fill-pastelPink hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M16.0262 36.0374V52.2678C16.0262 52.6753 16.3569 53.0069 16.7653 53.0069H34.1845V38.3104H42.3672V53.0069H47.2348C47.644 53.0069 47.9739 52.6753 47.9739 52.2678V36.0374L32.0093 20.1411L16.0262 36.0374ZM29.0165 45.1575H21.6329V38.3113H29.0165V45.1575Z"
            fill="current"
          />
          <path
            d="M51.2097 30.2011L32.0009 10.9932L22.939 20.0542V16.0666C22.939 15.1351 22.183 14.3791 21.2515 14.3791C20.32 14.3791 19.564 15.1351 19.564 16.0666V23.4292L12.7912 30.2011C11.9669 31.0255 11.9669 32.3611 12.7912 33.1846C13.203 33.5964 13.743 33.8023 14.283 33.8023C14.823 33.8023 15.3621 33.5964 15.7747 33.1855L32.0017 16.9602L48.227 33.1846C49.0513 34.009 50.3862 34.009 51.2097 33.1846C52.0332 32.3603 52.0332 31.0246 51.2097 30.2011Z"
            fill="current"
          />
        </svg>
      </div>
      <div className="text-[28px]">Created By Kelompok 3</div>
    </div>
  );
};

export default Footer;
