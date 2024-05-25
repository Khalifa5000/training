
import {createBrowserRouter,  RouterProvider} from "react-router-dom";

import Home from "./pages/home";
import Html from './pages/html';
import Css from './pages/css';
import Javascript from './pages/javascript';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h2>Page not found</h2>
  },
  {
    path: "/html",
    element: <Html/>,

  },
  {
    path: "/css",
    element: <Css/>,

  },
  {
    path: "/javascript",
    element: <Javascript/>,

  },
]);

function App() {
  return (
    <>
  <RouterProvider router={router} />
    </>
  );
}

export default App;

