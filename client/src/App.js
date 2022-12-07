import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Single } from "./Pages/Single";
import { Write } from "./Pages/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  {
    path: "/",
    element: <Write/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
