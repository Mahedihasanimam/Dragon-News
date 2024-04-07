
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Layout/Root';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registation from '../pages/Registation';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from './PrivateRoute';


const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
          {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('news.json')
          },
          {
            path:'/news/:id',
            element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
           
           
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Registation></Registation>
          },
        ]
    }
  ])
  export default router;