import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components/getuser/User";
import Add from "./components/adduser/Add";
import Edit from "./components/updateuser/Edit";
import Login from "./components/login/Login";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },

    {
      path: "/add",
      element: <Add />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
