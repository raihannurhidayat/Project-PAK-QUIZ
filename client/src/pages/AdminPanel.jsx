import { useState } from "react";
import SidebarAdmin from "../components/admin/Sidebar";
import AddQuestion from "../components/admin/AddQuestion";
import Test from "../components/admin/Test";
import ListQuestion from "../components/admin/ListQuestion";
import ListUser from "../components/admin/ListUser";

const AdminPanel = () => {
  const [display, setDisplay] = useState("test")
  return (
    <>
    <div className="flex">
      <SidebarAdmin setDisplay={setDisplay} />
      <div className="mx-24 my-12 border w-full">
        {display === "Add Question" && <AddQuestion />}
        {display === "List Question" && <ListQuestion />}
        {display === "Users" && <ListUser />}
        {/* {display === "Add Question" && <Test />} */}
        {/* {display === "test" && <Test />} */}
      </div>
    </div>
    </>
  );
};

export default AdminPanel;
