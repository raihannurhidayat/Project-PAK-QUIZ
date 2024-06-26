import React, { useState } from "react";

const User = ({ setUser, setDisplay, user, setCodeQuestion, setStatusFetch }) => {
  const [temp, setTemp] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setUser({
      id: Math.ceil(Math.random(1)) * Math.floor(Math.random(2)),
      user: e.target.value,
    });

    setTemp(e.target.value);
  };

  const handleLogin = () => {
    if (temp === "admin123") {
      setDisplay("admin");
    } else {
      setDisplay("start");
      setStatusFetch(true)
    }
  };

  return (
    <div className="w-full bg-white h-full flex justify-center items-center">
      <div className="w-full max-w-xs bg-slate-300 p-4">
        <div className="bg-slate-200 p-4 flex flex-col gap-4 rounded-sm">
          <label
            htmlFor="name"
            className="block text-slate-700 text-5xl font-semibold mb-2"
          >
            Quiz App
          </label>
          <input
            onChange={handleClick}
            name="name"
            type="text"
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 opacity-90"
            placeholder="Masukan Nama Anda"
          />
          <input
            onChange={(e) => setCodeQuestion(e.target.value)}
            name="name"
            type="text"
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 opacity-90"
            placeholder="Masukan Kode Soal"
          />
          <button
            onClick={handleLogin}
            className="cursor-pointer block text-slate-700 bg-slate-400 p-2 rounded-sm font-semibold mb-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
