import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home1 from "./componant/pageses/home/Home1";
import Error1 from "./componant/pageses/errorpage/Error1";
import Root from "./componant/pageses/root/Root";
import Blog1 from "./componant/pageses/blogs/Blog1";
import Ajobs from "./componant/pageses/appliejob/Ajobs";
import Alljobe3 from "./componant/pageses/home/allJobs/Alljobe3";
import Sineup from "./sineUp/Sineup";
import Sinein1 from "./componant/sinein/Sinein1";



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
        },
        {
          path: "/sineIn",
          element:<Sinein1></Sinein1>
        },
        {
          path: "/sineUp",
          element:<Sineup></Sineup>
        },
        {
          path: "/about/:aboutId",
          loader: ({ params }) => fetch(`https://next-level-two-ashen.vercel.app/jobs${params._Id}`),
          element:<Alljobe3></Alljobe3> 
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
