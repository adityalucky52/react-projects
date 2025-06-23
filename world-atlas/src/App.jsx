
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import  AppLayout  from "./Components/AppLayout";
import './App.css';

import  Home  from "./pages/Home";
import  About  from "./Pages/About";
import  Country  from "./pages/Country";
import  Contact  from "./pages/Contact";
import  ErrorPage  from "./Pages/ErrorPage";
import CountryDetails from './Components/CountryDetails';


const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])

const App =()=>{
  return(
    <RouterProvider router={router}> </RouterProvider>
  )
}

export default App;