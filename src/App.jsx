
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  
 
} from "react-router-dom";


import Login from './components/Login';
import SignUp from './components/SignUp';
import axios from 'axios'
import Layout from './components/Layout';
import Account from './components/Account';
import Home from './components/Home';
import Myform from './components/accounts/Myform';
import Profile from './components/accounts/Profile';
import Singlepage from './components/Singlepage';

axios.defaults.baseURL = 'http://localhost:2000/api'
axios.defaults.withCredentials = true

function App() {
  const router = createBrowserRouter(
    // createRoutesFromElements(
    //   <Route path= "/" element={<Layout/>}>
    //     <Route index element={<Nav/>} />
    //     <Route path='/sig' element={<SignUp />} />
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/account' element={<Account/>}/>
    //   </Route>
    // )
    [
      {
        
        element:<Layout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"login",
            element:<Login/>
          },
          {
            path:"sig",
            element:<SignUp/>
          },
          {
            element:<Account/>,
            children:[
              {
                path:'account',
                element:<Profile/>
              },
              {
                path:'form',
                element:<Myform/>,
               
              },
              {
                path:'form/:id',
                element:<Myform/>,
               
              },

            ]
          },
          {
            path:'/:id',
            element:<Singlepage/>,
           
          }
        ]
      }
    ]
  )
  return (
    
      <div className='w-full'>
        <RouterProvider router={router} />
      </div>
   
  )
}


export default App
