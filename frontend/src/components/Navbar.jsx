import { NavLink } from "react-router-dom";
import logo from "/public/images/logo.png";

function NavbarElement({ children, to }) {
  return (
    <NavLink className=" py-1 px-3 text-gray-500" to={to}>
      {children}
    </NavLink>
  );
}

function Navbar() {
  return (
    <>
      <nav className="navbar flex justify-between items-center px-10 py-5 bg-white">
        <NavLink exact to="/">
          <div className="flex justify-around items-center space-x-3">
            <img className="size-7" src={logo} alt="" />
            <h1 className="text-3xl tracking-[0.3rem] font-semibold">
              USE<span className="text-blue-700">RIO</span>
            </h1>
          </div>
        </NavLink>
        <div className="">
          <NavbarElement to="/">Home</NavbarElement>
          <NavbarElement to="/aboutme">About</NavbarElement>
          <NavbarElement to="/contact">Contact</NavbarElement>
          <NavbarElement to="/signin">Login</NavbarElement>
          <NavbarElement to="/signup">Register</NavbarElement>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
