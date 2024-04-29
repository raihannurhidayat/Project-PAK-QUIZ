import React from "react";

const AddQuestion = () => {
  const createQuestion = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/test/create/", {
        method: "POST",
        body: JSON.stringify([
          { name: "ke sepuluh", description: "quiz ke 10", closed: false },
          [
            {
              question: "What is ReactJS ?",
              answer: "B",
              option_a: "A server-side framework",
              option_b: "A front-end JavaScript library",
              option_c: "A back-end JavaScript framework",
              option_d: "A database management system",
            },
            {
              question: "What is the purpose of the virtual DOM in React?",
              option_a: "To improve website security",
              option_b: "To optimize database queries",
              option_c: "To improve performance by minimizing DOM manipulation",
              option_d: "To handle server-side rendering",

              answer: "C",
            },
            {
              question: "What is the purpose of the setState method in React?",
              option_a: "To update the component’s state",
              option_b: "To force re-rendering of a component",
              option_c: "To set initial state",
              option_d: "To access the DOM",
              answer: "A",
            },
            {
              question:
                "Which of the following is NOT a valid way to create a React component?",
              option_a: "class MyComponent extends Component",
              option_b: "const MyComponent = () => {}",
              option_c: "function MyComponent() {}",
              option_d: "<MyComponent />",
              answer: "D",
            },
            {
              question: "What is Redux in React?",
              option_a: "A state management library",
              option_b: "A form validation library",
              option_c: "A router library",
              option_d: "A build tool",

              answer: "A",
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
