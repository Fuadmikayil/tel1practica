import React from "react"; 
import logo from "../İmages/logo.png"
const Header = () => {
  return (
    <>
      <header className="flex justify-between px-40 py-2   shadow-lg shadow-slate-800 items-center z-50">
      <img src={logo} alt="logo"  className=" w-14" />
        <button className="bg-blue-600 p-2 rounded-xl tracking-widest text-white cursor-pointer ">
        <h5 className="font-bold"> Get your card</h5>
        </button>
      </header>
    </>
  );
};

export default Header;
 