import { Link } from "react-router-dom";
import defaultImage from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const {user,Logout}=useContext(AuthContext)
  const handleLogout=()=>{
    Logout()
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
    const NavLink=<>
    <li className="font-bold "><Link  to={'/'}>Home</Link></li>
    <li className="font-bold "><Link  to={'/About'}>About</Link></li>
    <li className="font-bold "><Link  to={'/Career'}>Career</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0  z-[1] p-2  shadow bg-gray-300  ">
                {NavLink}
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {NavLink}
          </ul>
        </div>
        <div className="navbar-end ">
            <img src={defaultImage} alt="" />
        {
          user ? <Link >
          <button onClick={handleLogout} className="btn rounded-sm px-8 ml-4 hover:bg-black bg-black text-white">
          Sign Out
        </button></Link>:
        <Link to={'/login'}>
        <button className="btn rounded-sm px-8 ml-4 hover:bg-black bg-black text-white">
        Login
      </button></Link>
        }
        </div>
      </div>
    );
};

export default Navbar;