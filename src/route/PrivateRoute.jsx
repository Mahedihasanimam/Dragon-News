import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
   const location=useLocation()
   console.log(location)
    
    if(user){
        return children;
    }
    else{
      return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
 
};

export default PrivateRoute;