import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Registation = () => {
    const navigate=useNavigate()
    const {CreateUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photo')
        const email=form.get('email')
        const password=form.get('password')
        const chack=form.get('chack')
       
        console.log(name,photo,email,password)

        CreateUser(email,password)
        .then(result=>{
            console.log(result)
            e.target.reset()
            navigate('/login')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
       <div>
         <Navbar></Navbar>
        <div className="flex flex-col max-w-lg mx-auto p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register your account</h1>
        </div>
        <form onSubmit={handleRegister} className="space-y-12">
          <div className="space-y-4">
          <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
          <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Your photo url"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="mahedi@gmail.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>

            <input id="chack" name="chack" type="checkbox" />
            <label htmlFor="chack" > Accept our term & condition</label>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 cursor-pointer font-semibold rounded-md bg-violet-400 text-gray-900"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?
              <Link to={'/login'}
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
       </div>
    );
};

export default Registation;