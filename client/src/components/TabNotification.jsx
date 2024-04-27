import React, { useEffect, useState } from "react";

const Modal = () => {
  return <div></div>;
};

const TabNotificationExample = ({ setNotif, notif, setIndex, setAnsware, setCheating }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const handleTabChange = () => {
      if (document.visibilityState === "hidden") {
        setNotif(true);
        setShowModal(true);
        setIndex(0);
        setAnsware({})
        setCheating((prev) => prev + 1)
        console.log("Pengguna keluar dari tab web");
      } else {
        console.log("Pengguna kembali ke tab web");
        // setNotif(false);
      }
    };
    document.addEventListener("visibilitychange", handleTabChange);

    return () => {
      document.removeEventListener("visibilitychange", handleTabChange);
    };
  }, []);

  return (
    <div>
      {notif && (
        <div>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Kecurangan Terdeteksi
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Sistem menemukan bahwa kegiatan yang dilakukan anda
                        melanggar aturan dalam berjalannya Ujian maka Anda nilai
                        akhir anda akan{" "}
                        <span className="text-red-600">DIKURANGI </span>
                        dan jawaban anda akan di <span className="text-red-600">RESET</span>
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Lanjutkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default TabNotificationExample;
