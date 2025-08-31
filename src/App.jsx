import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import Home from "./pages/Home"
import Details from "./pages/Details"
import ErrorPage from "./pages/ErrorPage"
import About from "./pages/About"

function App() {
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
      path:"/about",
      element:<About/>
    },
    {
      path:"/:id",
      element:<Details/>
    }
      ]
    }
    
  ])
  return  <RouterProvider router={router}></RouterProvider>

}

export default App
