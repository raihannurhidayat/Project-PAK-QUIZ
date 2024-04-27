import React, { useState } from "react";
import TabNotificationExample from "../components/TabNotification";

const QuestionNew = ({
  questions,
  answare,
  setAnsware,
  setScore,
  setDisplay,
  setCheating,
  setIndex,
  cheating
}) => {

  const [notif, setNotif] = useState(false);
  
  const handleAnsware = (key, num) => {
    setAnsware({ ...answare, [num + 1]: key });
  };

  const handleFinish = () => {
    let result = 0;
    let subtraction = cheating * 15
    questions.map((key, index) => {
      if (key.answer === answare[index + 1]) result++;
    });

    setScore({
      score: ((result / questions.length) * 100) - subtraction,
      true: result,
      false: questions.length - result,
    });

    setDisplay("score");
  };

  return (
    <div className="bg-white w-fullmin-h-screen items-center">
      <div className="bg-blue-600 py-4 px-9">
        <h1 className="font-semibold text-4xl">Quiz APP</h1>
      </div>
      <div className="container">
        <div className=" flex justify-center items-center">
          <div className="w-full max-w-xl bg-slate-200 p-4 flex flex-col gap-8 rounded-md my-20">
            {/* Question */}
            {questions.map((item, index) => (
              <div key={index} className="p-2 rounded-sm bg-slate-100">
                <h2 className="p-1 text-xl font-semibold mb-2">
                  {item.question}
                </h2>
                <div className="flex flex-col gap-3">
                  {Object.entries(item.options).map(([key, value]) => {
                    return (
                      <p
                        key={key}
                        onClick={() => handleAnsware(key, index)}
                        className={`bg-slate-200 p-1 cursor-pointer rounded-sm hover:bg-blue-200 transition-all ${
                          answare[index + 1] === key ? "bg-blue-400" : ""
                        }`}
                      >{`${key}. ${value}`}</p>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="">
              <button
                onClick={handleFinish}
                className="bg-green-500 hover:bg-green-600 transition-all p-3 rounded-sm text-xl font-semibold"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
      <TabNotificationExample
        setCheating={setCheating}
        setIndex={setIndex}
        notif={notif}
        setNotif={setNotif}
        setAnsware={setAnsware}
      />
    </div>
  );
};

export default QuestionNew;
