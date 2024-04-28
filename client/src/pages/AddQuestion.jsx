import React from "react";

const AddQuestion = () => {
  const createQuestion = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/test/create/", {
        method: "POST",
        body: JSON.stringify([
          { name: "ke enam", description: "quiz ke 6", closed: false },
          [
            {
              question: "Question 1",
              option_a: "Option A",
              option_b: "Option B",
              option_c: "Option C",
              option_d: "Option D",
              answer: "A",
            },
            {
              question: "Question 2",
              option_a: "Option A",
              option_b: "Option B",
              option_c: "Option C",
              option_d: "Option D",
              answer: "B",
            },
          ],
        ]),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log({ data });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const deleteQuestion = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/test/6", {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        console.log({ delete: data });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const updateQuestion = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/test/6/", {
        method: "PUT",
        body: JSON.stringify([
          { name: "ke tujuh", description: "quiz ke 7", closed: false },
          [
            {
              question: "Question 1",
              option_a: "Option A",
              option_b: "Option B",
              option_c: "Option C",
              option_d: "Option D",
              answer: "A",
            },
            {
              question: "Question 2",
              option_a: "Option A",
              option_b: "Option B",
              option_c: "Option C",
              option_d: "Option D",
              answer: "B",
            },
          ],
        ]),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log({ data });
        console.log("success");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="flex gap-3">
        <button
          onClick={() => console.log("test")}
          className="p-2 rounded-md bg bg-slate-200"
        >
          Test question
        </button>
        <button
          onClick={createQuestion}
          className="p-2 rounded-md bg bg-slate-200"
        >
          Create question
        </button>
        <button
          onClick={deleteQuestion}
          className="p-2 rounded-md bg bg-red-500"
        >
          Delete question
        </button>
        <button
          onClick={updateQuestion}
          className="p-2 rounded-md bg bg-red-500"
        >
          Update question
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;
