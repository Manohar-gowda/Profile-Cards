import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const Sidebar = ({ isOpen, toggleSidebar, setSelectedTab}) => {

  const {auth} = useSelector((store) => store)

  return (
    <div
      style={{ backgroundColor: "#1f2937" }}
      className={`fixed top-0 left-0 h-full w-64 text-white transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <button onClick={toggleSidebar} className="absolute top-4 right-4 p-2">
        <CloseIcon />
      </button>
      <div className="p-4">
        <div className="p-4 flex items-center space-x-3 border-b border-gray-600">
          <div className="h-10 w-10 bg-gray-700 rounded-full text-center">
            <h1 className="text-center p-2 font-bold">M</h1>
          </div>
          <span className="text-lg font-bold">{auth.user?.name}</span>
        </div>
        <ul className="mt-4 space-y-2">
          <li onClick={() => {
            setSelectedTab("home");
            toggleSidebar()
          }} className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200">
            Home
          </li>
          <li onClick={() => {
            setSelectedTab("create");
            toggleSidebar()
          }}
            className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200">
            Create Profile
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
