import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate()
    const {login}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        login(email,password)
        .then(result=>{
            console.log(result)
            e.target.reset()
            navigate('/')
        })
        .then(err=>{
            console.log(err.message)
        })
    }
  return (
    <div>
      <Navbar></Navbar>
      {/* login  */}
      <div className="flex flex-col max-w-lg mx-auto p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login with your account</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
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
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 cursor-pointer font-semibold rounded-md bg-violet-400 text-gray-900"
              >
                Login
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?
              <Link to={'/register'}
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Register
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
