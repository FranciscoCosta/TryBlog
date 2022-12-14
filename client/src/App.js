import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.scss'
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Single } from "./Pages/Single/Single";
import { Write } from "./Pages/Write/Write";

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
    path: "/post/:id",
    element: <Single/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
