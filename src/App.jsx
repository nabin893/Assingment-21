import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home1 from "./componant/pageses/home/Home1";
import Error1 from "./componant/pageses/errorpage/Error1";
import Root from "./componant/pageses/root/Root";
import Blog1 from "./componant/pageses/blogs/Blog1";
import Ajobs from "./componant/pageses/appliejob/Ajobs";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error1></Error1>,
      children: [
        {
          path: "/",
          element: <Home1></Home1>,
        },
        {
          path: "/jobs1",
          element:<Ajobs></Ajobs>
        },
        {
          path: "/blog1",
          element:<Blog1></Blog1> 
        }
      ]
    },

  ]);


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>


    </div>
  )
}

export default App
