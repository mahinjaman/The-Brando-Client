import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [staticNav, setStaticNav] = useState(false)

  const navMenu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/rooms"}>Rooms</NavLink>
      </li>
      <li>
        <details>
          <summary>The Restaurant</summary>
          <ul className="shadow-none rounded-md flex flex-col gap-3 z-20 bg-slate-800 p-2">
            <li className="border-b-2 duration-300 rounded-b-md rounded-md font-semibold hover:text-white hover:bg-gray-900 hover:border-orange-500">
              <NavLink to={"/restaurant"}>Restaurant</NavLink>
            </li>
            <li className="border-b-2 duration-300 rounded-b-md rounded-md font-semibold hover:text-white hover:bg-gray-900 hover:border-orange-500">
              <NavLink to={"/menu"}>Menu</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={"/about"}>About US</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
    </>
  );


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setStaticNav(true)
      } else {
        setStaticNav(false)
      }
    })
  }, [])


  return (
    <div className={`navbar shadow-md px-5 lg:px-44 py-4 bg-white text-black shadow-white ${staticNav ? 'fixed z-50' : ''}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52 "
          >
            {navMenu}
          </ul>
        </div>
        <Link to={'/'}>
          <img
            src="../../../src/assets/image/logo.png"
            alt="Logo"
            width={200}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>


      <div className="navbar-end">

      

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/GxfNxF3/Whats-App-Image-2024-04-30-at-13-07-47-5f0c778c.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;