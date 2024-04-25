import React from "react";

const Footer = ({ handleReset, setDisplay, setIndex, setScore, setAnsware, setUser }) => {
  return (
    <div className="bg-[#435866] w-full flex items-center px-[73px] py-[9px] text-english-lavender h-[88px] justify-between">
      <div className="flex gap-[24px] ">
        <svg
          className="cursor-pointer bg-copper rounded-full fill-pastelPink hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M32 0C14.3281 0 0 14.3333 0 32C0 49.677 14.3281 64 32 64C49.6719 64 64 49.677 64 32C64 14.3333 49.6719 0 32 0ZM32 57.8064C17.7378 57.8064 6.19355 46.267 6.19355 32C6.19355 17.7426 17.7383 6.19355 32 6.19355C46.2569 6.19355 57.8064 17.7382 57.8064 32C57.8064 46.2619 46.267 57.8064 32 57.8064ZM45.8379 24.8774C45.8379 33.5293 36.4933 33.6624 36.4933 36.8597V37.6774C36.4933 38.5325 35.8 39.2258 34.9449 39.2258H29.055C28.1999 39.2258 27.5066 38.5325 27.5066 37.6774V36.5601C27.5066 31.9479 31.0034 30.1041 33.6458 28.6226C35.9117 27.3523 37.3005 26.4883 37.3005 24.8059C37.3005 22.5806 34.4619 21.1036 32.1671 21.1036C29.175 21.1036 27.7937 22.52 25.852 24.9706C25.3285 25.6312 24.3733 25.7539 23.7015 25.2446L20.1114 22.5223C19.4524 22.0227 19.3048 21.0944 19.7702 20.411C22.8188 15.9343 26.7019 13.4194 32.7476 13.4194C39.0794 13.4194 45.8379 18.3618 45.8379 24.8774ZM37.4194 46.4516C37.4194 49.4399 34.9883 51.871 32 51.871C29.0117 51.871 26.5806 49.4399 26.5806 46.4516C26.5806 43.4634 29.0117 41.0323 32 41.0323C34.9883 41.0323 37.4194 43.4634 37.4194 46.4516Z"
            fill="current"
          />
        </svg>
        <svg
          onClick={handleReset}
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
        <div className="p-2 flex justify-center items-center cursor-pointer hover:bg-copper rounded-xl text-xl  border-2 border-white" onClick={() => {
          setIndex(0);
          setAnsware({});
          setScore({});
          setUser({})
          setDisplay("user")
        }}>
          Logout
        </div>
      </div>
      <div className="text-[28px]">Created By Kelompok 3</div>
    </div>
  );
};

export default Footer;
