import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import Loading from "../Loading";

const ListQuestion = () => {
  const [allQuestion, setAllQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllQuestion() {
    try {
      setIsLoading(true);
      const response = await fetch("http://127.0.0.1:8000/debug/get-test");
      const data = await response.json();
      setAllQuestion(data);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteQuestion(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`http://127.0.0.1:8000/test/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Deleted Success");
        getAllQuestion();
      } else {
        console.log("Gagal mendelete");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  async function editQuestion(question) {
    const questionInfo = question.Test;
    const questionList = question.Questions;
    const editQuestion = { ...questionInfo, closed: !questionInfo.closed };
    const result = [editQuestion, questionList];
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/test/${question.Test.test_id}/`,
        {
          method: "PUT",
          body: JSON.stringify(result),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("updated Success");
        getAllQuestion();
      }
    } catch (error) {
      console.log("failed to update");
    }
  }

  useEffect(() => {
    getAllQuestion();
  }, []);

  return (
    <div className="p-4">
      {isLoading && <Loading />}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Code Question
              </th>
              <th scope="col" className="px-6 py-3">
                Name Question
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allQuestion.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.Test.test_id}
                </th>
                <td className="px-6 py-4">{item.Test.name}</td>
                {item.Test.closed ? (
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                      Closed
                    </div>
                  </td>
                ) : (
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      Open
                    </div>
                  </td>
                )}

                <td className="px-6 py-4 flex gap-4">
                  <div
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer inline bg-yellow-300 py-2 px-3 rounded-sm"
                    onClick={() => editQuestion(item)}
                  >
                    {item.Test.closed ? "Open": "Close"}
                  </div>
                  <div
                    href="#"
                    className="font-medium text-white dark:text-blue-500 cursor-pointer inline bg-red-600 py-2 px-3 rounded-sm"
                    onClick={() => {
                      deleteQuestion(item.Test.test_id);
                    }}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListQuestion;
