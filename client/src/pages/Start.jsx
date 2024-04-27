import React, { useState } from "react";

const Start = ({ setDisplay }) => {
  const handleFullScreen = () => {
    document.documentElement.requestFullscreen();
  };

  return (
    <div className="flex flex-col gap-5 items-center h-full justify-center">
      <div className="text-english-lavender text-[120px]">QUIZ APP</div>
      <div
        onClick={() => {
          setDisplay("question");
          handleFullScreen();
        }}
        className="bg-copper border-pastelPink border-[6px] text-[48px] px-5 text-pastelPink rounded-xl hover:scale-110 hover:text-white hover:border-white cursor-pointer"
      >
        START
      </div>
      <div
        onClick={() => {
          setDisplay("new")
          handleFullScreen()
        }}
        className="bg-white border-pastelPink border-[6px] text-[48px] px-5 text-pastelPink rounded-xl hover:scale-110 hover:text-copper hover:border-white cursor-pointer"
      >
        START NEW
      </div>
      <div className="text-english-lavender text-[24px] text-center">
        Dont let the setback define you <br /> let them be stepping to triumph
      </div>
    </div>
  );
};

export default Start;
