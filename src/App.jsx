import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Create from "./pages/Create";
import AuthCheck from "./pages/AuthCheck";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <AuthCheck />
          <MainLayout />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
