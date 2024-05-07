import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const ListUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listUsers, setListUser] = useState([]);

  async function getAllUser() {
    try {
      setIsLoading(true);
      const response = await fetch("http://127.0.0.1:8000/debug/get-result");
      const data = await response.json();
      setListUser(data);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  async function deletedUSer(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`http://127.0.0.1:8000/test/result/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Deleted Success");
        getAllUser();
      } else {
        console.log("Gagal mendelete");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="p-4">
      {isLoading && <Loading />}

      {listUsers.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Code Question
                </th>
                <th scope="col" className="px-6 py-3">
                  True
                </th>
                <th scope="col" className="px-6 py-3">
                  False
                </th>
                <th scope="col" className="px-6 py-3">
                  Cheating
                </th>
                <th scope="col" className="px-6 py-3">
                  Skor
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {listUsers.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.student_name}
                  </th>
                  <td className="px-6 py-4">{item.test_id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">{item.answers_true}</div>
                  </td>
                  <td className="px-6 py-4">{item.answers_false}</td>
                  <td className="px-6 py-4">{item.n_cheating}</td>
                  <td className="px-6 py-4">{item.student_grade_final}</td>

                  <td className="px-6 py-4 flex gap-4">
                    <div
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer inline bg-yellow-300 py-2 px-3 rounded-sm"
                    >
                      Edit
                    </div>
                    <div
                      href="#"
                      className="font-medium text-white dark:text-blue-500 cursor-pointer inline bg-red-600 py-2 px-3 rounded-sm"
                      onClick={() => {
                        deletedUSer(item.id);
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
      ) : (
        <h1>Tidak ada user yang mengikuti Quiz</h1>
      )}
    </div>
  );
};

export default ListUser;
