import React, { useState } from "react";
import Alert from "./Alert";

const AddQuestion = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [numQuestions, setNumQuestions] = useState(1);

  const { name, description } = data;

  const [status, setStatus] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleAddQuestions = () => {
    setStatus(false);
    const newQuestions = Array.from({ length: numQuestions }, () => ({
      question: "",
      option_a: "",
      option_b: "",
      option_c: "",
      option_d: "",
      answer: "",
    }));

    setQuizData((prevQuizData) => [...prevQuizData, ...newQuestions]);
  };

  const handleQuestionChange = (index, question) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = [...prevQuizData];
      updatedQuizData[index].question = question;
      return updatedQuizData;
    });
  };

  const handleOptionAChange = (index, option) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = [...prevQuizData];
      updatedQuizData[index].option_a = option;
      return updatedQuizData;
    });
  };

  const handleOptionBChange = (index, option) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = [...prevQuizData];
      updatedQuizData[index].option_b = option;
      return updatedQuizData;
    });
  };

  const handleOptionCChange = (index, option) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = [...prevQuizData];
      updatedQuizData[index].option_c = option;
      return updatedQuizData;
    });
  };

  const handleOptionDChange = (index, option) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = [...prevQuizData];
      updatedQuizData[index].option_d = option;
      return updatedQuizData;
    });
  };

  const handleAnswerChange = (index, answer) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = [...prevQuizData];
      updatedQuizData[index].answer = answer;
      return updatedQuizData;
    });
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setResult(() => [data, quizData]);
    setStatus(true);
  };

  const createQuestion = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/test/create/", {
        method: "POST",
        body: JSON.stringify(result),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(result)
      if (response.ok) {
        const data = await response.json();
        console.log({ data });
        setAlert(true);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setData([]);
      setResult([]);
      setQuizData([]);
      setStatus(false)
      setNumQuestions(1);
      setData({
        name: "",
        description: "",
      });
    }
  };

  const handleCreateQuestion = () => {
    if (status) {
      createQuestion();
    }
  };

  return (
    <div className="p-2">
      {alert && <Alert setAlert={setAlert} />}
      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name Questions
          </label>
          <input
            onChange={handleChange}
            value={name}
            name="name"
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description Questions
          </label>
          <textarea
            onChange={handleChange}
            value={description}
            name="description"
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* quesiton start */}
        {quizData.map((question, index) => (
          <div key={index}>
            <div className="mb-6">
              <label
                htmlFor="question"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Question {index + 1}
              </label>
              <input
                value={question.question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                name="question"
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="option_a"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option_a
              </label>
              <input
                onChange={(e) => handleOptionAChange(index, e.target.value)}
                value={question.option_a}
                name="option_a"
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="option_b"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                option_b
              </label>
              <input
                onChange={(e) => handleOptionBChange(index, e.target.value)}
                value={question.option_b}
                name="option_b"
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="option_c"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                option_c
              </label>
              <input
                onChange={(e) => handleOptionCChange(index, e.target.value)}
                value={question.option_c}
                name="option_c"
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="option_d"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                option_d
              </label>
              <input
                onChange={(e) => handleOptionDChange(index, e.target.value)}
                value={question.option_d}
                name="option_d"
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="answer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                answer
              </label>
              <input
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                value={question.answer}
                name="answer"
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        ))}
        <div
          onClick={handleAddQuestions}
          className="bg-blue-400 p-2 rounded cursor-pointer inline-block mr-3"
        >
          Add Question
        </div>
        <div
          onClick={() => {
            quizData.pop();
            setQuizData([...quizData]);
          }}
          className="bg-red-400 p-2 rounded cursor-pointer inline-block"
        >
          Drop Question
        </div>

        {/* quesiton end */}
      </form>
      <div
        onClick={() => {
          handleSubmit();
          handleCreateQuestion();
        }}
        className={`bg-green-600 p-2 mt-2 rounded-lg inline-block hover:bg-green-400 cursor-pointer transition-all ${
          status && "bg-indigo-500 hover:bg-indigo-700"
        }`}
      >
        {status ? "Create" : "Finish"}
      </div>
    </div>
  );
};

export default AddQuestion;
