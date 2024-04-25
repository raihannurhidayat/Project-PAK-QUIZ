import React from "react";

const Score = ({ setDisplay, score, setIndex, user }) => {
  const handleCLick = () => {
    setDisplay("review");
    setIndex(0);
  };

  return (
    <div className="h-full p-[15px] flex flex-col gap-1 items-center justify-center">
      <div className="text-copper text-center text-[100px]">{user.user} SCORE</div>
      <div className="rounded-[280px] w-[280px] h-[280px] border-[6px] border-english-lavender text-[120px] flex justify-center items-center text-pastelPink">
        {Math.floor(score.score)}
      </div>
      <div className="flex gap-[100px] text-english-lavender text-[28px]">
        <div>True : {score.true}</div>
        <div>False : {score.false}</div>
      </div>
      <div
        onClick={handleCLick}
        className="flex mt-4 text-[32px] bg-copper text-pastelPink p-2 border-pastelPink border-[6px] rounded hover:scale-110 hover:text-white hover:border-white"
      >
        Review Answare
      </div>
    </div>
  );
};

export default Score;
