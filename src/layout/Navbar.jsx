import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Navbar() {

  const [mobile, setMobile] = useState(false);

  const toggleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className="bg-[#FFFFFF] top-0 fixed w-full z-20 p-0 m-0">
      <div className="flex justify-between w-full px-20">
        <div className="flex gap-4 text-black font-bold justify items-center py-5">
          <button className="md:hidden" onClick={toggleMobile}>
            <FaBars />
          </button>
          <div
            className={`${
              mobile ? 'flex' : 'hidden'
            } flex-col gap-4 text-left md:flex md:flex-row`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'hover:text-red-500'
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/contactuspage"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'hover:text-red-500'
              }
            >
              OUR WORK
            </NavLink>
            <NavLink
              to="/error"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'hover:text-red-500'
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/ourmenu"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'hover:text-red-500'
              }
            >
              OUR IMPACT
            </NavLink>
            <NavLink
              to="/ourshop"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-500 flex gap-2'
                  : 'hover:text-red-500 flex gap-2'
              }
            >
              GET INVOLVED
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-500 flex gap-2'
                  : 'hover:text-red-500 flex gap-2'
              }
            >
              DONATE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
