import React, { useState } from 'react';

const Test = () => {
  const [quizData, setQuizData] = useState([]);
  const [numQuestions, setNumQuestions] = useState(1);

  const handleNumQuestionsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumQuestions(value || 1);
  };

  const handleAddQuestions = () => {
    const newQuestions = Array.from({ length: numQuestions }, () => ({
      question: '',
      answer: '',
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

  const handleAnswerChange = (index, answer) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = [...prevQuizData];
      updatedQuizData[index].answer = answer;
      return updatedQuizData;
    });
  };

  return (
    <div>
      <label>
        Number of Questions:
        <input
          type="number"
          value={numQuestions}
          min={1}
          onChange={handleNumQuestionsChange}
        />
      </label>
      <button onClick={handleAddQuestions}>Add Questions</button>

      {quizData.map((question, index) => (
        <div key={index}>
          <label>
            Question #{index + 1}:
            <input
              type="text"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
            />
          </label>
          <label>
            Answer #{index + 1}:
            <input
              type="text"
              value={question.answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => console.log(quizData)}>click</button>
    </div>
  );
};

export default Test;