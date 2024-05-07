import React, { useState } from "react";
import TabNotificationExample from "../components/TabNotification";

const Question = ({
  index,
  setIndex,
  answare,
  setAnsware,
  setScore,
  setDisplay,
  questions,
  cheating,
  setCheating,
  testId,
  user,
}) => {
  const [notif, setNotif] = useState(false);

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handleAnsware = (key, num) => {
    setAnsware({ ...answare, [num + 1]: key });
  };

  const handleFinish =async () => {
    let result = 0;
    let subtraction = cheating * 15;
    questions.map((key, index) => {
      if (key.answer == answare[index + 1]) {
        result++;
      }
    });

    setScore({
      score: (result / questions.length) * 100 - subtraction,
      true: result,
      false: questions.length - result,
    });

    const data = {
      test_id: testId,
      student_name: user.user,
      student_id: "",
      answers_true: result,
      answers_false: questions.length - result,
      student_answer: [answare],
      n_cheating: cheating,
      student_grade: (result / questions.length) * 100,
      student_grade_final: (result / questions.length) * 100 - subtraction,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/test/result/post/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      })
      if(response.ok){
        const res = await response.json()
      }
    } catch (error) {
      console.log("Gagal Create User")
    }
    setDisplay("score");
  };

  return (
    <div className="h-full relative p-[54px] flex flex-col gap-[54px]">
      <>
        <div className="flex text-white text-[32px] justify-center text-center">
          {`Question ${index + 1} : ${questions[index].question}`}
        </div>
        <div className="grid grid-cols-2 gap-x-[142px] gap-y-[42px] mx-[20px]">
          {Object.entries(questions[index].options).map(([key, value]) => {
            return (
              <div
                onClick={() => handleAnsware(key, index)}
                key={key}
                className={`h-[111px]  rounded-[20px] text-[20px] flex items-center text-white p-4 cursor-pointer hover:bg-copper hover:border-4 hover:border-white ${
                  answare[index + 1] === key
                    ? "bg-copper border-4 border-white"
                    : "bg-pastelPink"
                }`}
              >
                {`${key}. ${value}`}
              </div>
            );
          })}
        </div>
      </>
      <div className="absolute bottom-[60px] right-[54px] flex justify-end mx-[20px] gap-5">
        {index > 0 && (
          <svg
            onClick={handlePrev}
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="73"
            viewBox="0 0 72 73"
            className="cursor-pointer bg-copper rounded-full border-solid border-[6px] border-pastelPink hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white "
            fill="#EAB2A0"
          >
            <path d="M58.5 32.75H22.5L31.1625 24.0875C31.9013 23.3488 32.25 22.4675 32.25 21.5C32.25 19.655 30.7256 17.75 28.5 17.75C27.5044 17.75 26.6362 18.1119 25.9125 18.8375L10.9912 33.7588C10.3762 34.3738 9.75 35.1331 9.75 36.5C9.75 37.8669 10.2731 38.525 10.9612 39.2131L25.9125 54.1625C26.6362 54.8881 27.5044 55.25 28.5 55.25C30.7275 55.25 32.25 53.345 32.25 51.5C32.25 50.5325 31.9013 49.6513 31.1625 48.9125L22.5 40.25H58.5C60.57 40.25 62.25 38.57 62.25 36.5C62.25 34.43 60.57 32.75 58.5 32.75Z" />
          </svg>
        )}
        {index < questions.length - 1 && (
          <svg
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="73"
            viewBox="0 0 72 73"
            className="cursor-pointer bg-copper rounded-full border-solid border-[6px] border-pastelPink hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white "
            fill="#EAB2A0"
          >
            <path d="M13.5 40.25H49.5L40.8375 48.9125C40.0987 49.6512 39.75 50.5325 39.75 51.5C39.75 53.345 41.2744 55.25 43.5 55.25C44.4956 55.25 45.3638 54.8881 46.0875 54.1625L61.0088 39.2412C61.6238 38.6262 62.25 37.8669 62.25 36.5C62.25 35.1331 61.7269 34.475 61.0388 33.7869L46.0875 18.8375C45.3638 18.1119 44.4956 17.75 43.5 17.75C41.2725 17.75 39.75 19.655 39.75 21.5C39.75 22.4675 40.0987 23.3487 40.8375 24.0875L49.5 32.75H13.5C11.43 32.75 9.75 34.43 9.75 36.5C9.75 38.57 11.43 40.25 13.5 40.25Z" />
          </svg>
        )}
        {index == questions.length - 1 && (
          <div
            onClick={handleFinish}
            className="text-[36px] bg-copper flex items-center cursor-pointer text-white p-1 rounded-sm border-solid border-[6px] border-pastelPink hover:border-white hover:scale-110 hover:shadow-2xl hover:text-white "
          >
            Finish
          </div>
        )}
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

export default Question;
