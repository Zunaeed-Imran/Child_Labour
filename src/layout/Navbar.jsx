import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { ScrollLink } from "react-scroll";


function Navbar() {

  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  const toggleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className="bg-black top-0 fixed w-full z-20 p-0 m-0">
      <div className="flex justify-between w-full px-20">
        <div className="justify items-center link">
          {location.pathname === '/' ? (
            <ScrollLink to="home" smooth={true} duration={500}>
              <img src={''} alt="logo" />
            </ScrollLink>
          ) : (
            <NavLink to="/">
              <img src={''} alt="logo" />
            </NavLink>
          )}
        </div>
        <div className="flex gap-4 text-white font-bold justify items-center">
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
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/contactuspage"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              CONTACT US
            </NavLink>
            <NavLink
              to="/error"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              DASHBOARD
            </NavLink>
            <NavLink
              to="/ourmenu"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              OUR MENU
            </NavLink>
            <NavLink
              to="/ourshop"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 flex gap-2'
                  : 'hover:text-yellow-400 flex gap-2'
              }
            >
              OUR SHOP <RiShoppingCartLine size="1.5rem" />
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 flex gap-2'
                  : 'hover:text-yellow-400 flex gap-2'
              }
            >
              LOGIN <IoMdLogIn size="1.5rem" />
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 flex gap-2'
                  : 'hover:text-yellow-400 flex gap-2'
              }
            >
              SIGN UP <CgProfile size="1.5rem" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
